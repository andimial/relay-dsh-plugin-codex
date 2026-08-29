import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { runInThisContext } from "node:vm";
import test from "node:test";

import { JSDOM } from "jsdom";
import * as React from "react";
import * as SlotPackage from "@deepseek-ai/dsh-client-ui-slots";

const clientBundle = await readFile(new URL("../lib/client.js", import.meta.url), "utf8");
const conversationBundle = await readFile(
  new URL("../node_modules/@deepseek-ai/dsh-client-ui-conversation/lib/client.js", import.meta.url),
  "utf8",
);

test("the Codex client preserves DSH's native conversation header in a rendered host", async () => {
  const state = await renderConversationHost();

  assert.deepEqual(state.tabs, ["Chat", "Trajectory", "Memory"]);
  assert.equal(state.selectedTab, "Trajectory");
  assert.notEqual(state.tabListDisplay, "none");
  assert.equal(state.simpleConversationMarker, null);
  assert.deepEqual(state.consoleErrors, []);
  assert.deepEqual(state.consoleWarnings, []);
  assert.deepEqual(state.networkRequests, []);
});

test("the rendered-host oracle rejects the removed simple-conversation guard", async () => {
  const state = await renderConversationHost({ legacyGuardControl: true });

  assert.throws(
    () => assertNativeConversationHeader(state),
    /native conversation header was replaced/,
  );
});

function assertNativeConversationHeader(state) {
  const preserved = state.tabs.join(",") === "Chat,Trajectory,Memory"
    && state.selectedTab === "Trajectory"
    && state.tabListDisplay !== "none"
    && state.simpleConversationMarker === null;
  assert.ok(preserved, "native conversation header was replaced");
}

async function renderConversationHost({ legacyGuardControl = false } = {}) {
  const dom = new JSDOM("<!doctype html><html><head></head><body><div id=\"root\"></div></body></html>", {
    url: "http://127.0.0.1:3080/",
  });
  const restoreGlobals = installBrowserGlobals(dom.window);
  const consoleErrors = [];
  const consoleWarnings = [];
  const networkRequests = [];
  const originalConsoleError = console.error;
  const originalConsoleWarn = console.warn;
  const disposers = [];
  const effectDisposers = [];
  let declarationDisposer;
  let disposePlugin;
  let root;
  try {
    console.error = (...args) => { consoleErrors.push(args.map(String).join(" ")); };
    console.warn = (...args) => { consoleWarnings.push(args.map(String).join(" ")); };
    globalThis.fetch = async (input) => {
      networkRequests.push(String(input));
      return new Response(null, { status: 204 });
    };

    const core = new SlotPackage.SlotCore();
    declarationDisposer = core.register({
      name: "root",
      children: {
        "conversation.session.header": { kind: "single", scope: "session" },
        "conversation.view": { kind: "list", scope: "session" },
        "settings.section": { kind: "list", scope: "root" },
        "sidebar.footer.action": { kind: "list", scope: "root" },
      },
    }, () => null);

    const ReactJsxRuntime = await import("react/jsx-runtime");
    const browserModules = new Map();
    dom.window.__ModuleLoader__ = {
      load(definition) {
        browserModules.set(definition.id, definition.factory(name => browserDependency(
          name,
          ReactJsxRuntime,
        )));
      },
    };
    runInThisContext(exposePublishedConversationHeader(conversationBundle), {
      filename: "@deepseek-ai/dsh-client-ui-conversation/lib/client.js",
    });
    runInThisContext(clientBundle, { filename: "lib/client.js" });
    const conversationModule = browserModules.get("@deepseek-ai/dsh-client-ui-conversation");
    const pluginModule = browserModules.get("relay-dsh-plugin-codex");
    assert.equal(typeof conversationModule?.__ConversationSessionHeader, "function");
    assert.equal(typeof pluginModule?.apply, "function");

    const viewLabels = [
      ["chat", "Chat"],
      ["trajectory", "Trajectory"],
      ["memory", "Memory"],
    ];
    for (const [id, label] of viewLabels) {
      disposers.push(core.register({ name: "conversation.view", id, label }, () => null));
    }
    const views = {
      list: () => core.entriesOfSlot("conversation.view").map(entry => ({
        id: entry.options.id,
        label: entry.options.label,
      })),
      subscribe: listener => core.subscribe("conversation.view", listener),
      version: () => core.getVersion("conversation.view"),
    };
    disposers.push(core.register({
      name: "conversation.session.header",
      children: {
        "conversation.session.header.lineage": { kind: "single", scope: "session" },
        "conversation.session.header.actions": { kind: "list", scope: "session" },
        "conversation.session.header.utilities": { kind: "list", scope: "session" },
      },
      inject: () => ({ views, open() {} }),
    }, conversationModule.__ConversationSessionHeader));

    const emptyList = observable({ current: undefined, byId: {} });
    const context = {
      slots: {
        inject(_name, install) {
          const dispose = install();
          if (typeof dispose === "function") disposers.push(dispose);
        },
        register(options, component) {
          return core.register(options, component);
        },
      },
      locale: {
        register() { return () => {}; },
        bind() { return key => key; },
      },
      sessions: {
        list: emptyList,
        currentProvideInfo: observable(null),
        async refresh() {},
        open() {},
      },
      workspaces: {
        list: observable({ items: [] }),
        async refresh() {},
      },
      get(name) {
        if (name !== "connection") return undefined;
        return {
          api: { sessions: {
            async models() { throw new Error("unexpected model request"); },
            async selectModel() { throw new Error("unexpected model selection"); },
          } },
        };
      },
      effect(setup) {
        const dispose = setup();
        if (typeof dispose === "function") effectDisposers.push(dispose);
      },
    };

    disposePlugin = pluginModule.apply(context);
    if (legacyGuardControl) {
      disposers.push(core.register({
        name: "conversation.session.header.actions",
        id: "legacy-simple-conversation-guard",
        order: -100,
      }, LegacySimpleConversationGuard));
    }

    const { createRoot } = await import("react-dom/client");
    root = createRoot(dom.window.document.getElementById("root"));
    await React.act(async () => {
      root.render(React.createElement(PublishedConversationHeaderHarness, { core }));
    });
    const header = dom.window.document.querySelector("header");
    const tabList = header.querySelector("[role=\"tablist\"]");
    const tabs = [...tabList.querySelectorAll("[role=\"tab\"]")];
    return {
      tabs: tabs.map(tab => tab.textContent),
      selectedTab: tabs.find(tab => tab.getAttribute("aria-selected") === "true")?.textContent ?? null,
      tabListDisplay: dom.window.getComputedStyle(tabList).display,
      simpleConversationMarker: header.getAttribute("data-relay-simple-conversation"),
      consoleErrors,
      consoleWarnings,
      networkRequests,
    };
  } finally {
    if (root) await React.act(async () => { root.unmount(); });
    disposePlugin?.();
    for (const dispose of effectDisposers.reverse()) dispose();
    for (const dispose of disposers.reverse()) dispose();
    declarationDisposer?.();
    console.error = originalConsoleError;
    console.warn = originalConsoleWarn;
    restoreGlobals();
    dom.window.close();
  }
}

function PublishedConversationHeaderHarness({ core }) {
  const [view, setView] = React.useState("trajectory");
  const entry = core.entriesOfSlot("conversation.session.header")[0];
  const useSessions = selector => selector({
    byId: {
      "session-1": {
        id: "session-1",
        displayTitle: "Codex session",
        origin: "user",
        agentPreset: "standard",
      },
    },
  });
  const renderSlot = (name, owner = {}) => React.createElement(
    React.Fragment,
    null,
    ...renderEntries(core.entriesOfSlot(name), useSessions, owner),
  );
  return React.createElement(entry.component, {
    sessionId: "session-1",
    useSession: selector => selector({ blank: false, composerPhase: "active" }),
    useSessions,
    useStore: selector => selector({ view }),
    actions: { setView },
    renderSlot,
    t: key => key,
    ...entry.inject?.("session-1"),
  });
}

function renderEntries(entries, useSessions, owner = {}) {
  return entries.map((entry) => React.createElement(entry.component, {
    key: entry.options.id,
    sessionId: "session-1",
    useSessions,
    t: key => key,
    ...owner,
    ...injectedProps(entry.inject?.("session-1") ?? {}),
  }));
}

function exposePublishedConversationHeader(source) {
  const marker = "\t\texports.ConversationController = ConversationController;";
  assert.ok(source.includes(marker), "published conversation bundle export marker changed");
  return source.replace(
    marker,
    `\t\texports.__ConversationSessionHeader = ConversationSessionHeader;\n${marker}`,
  );
}

function browserDependency(name, ReactJsxRuntime) {
  if (name === "react") return React;
  if (name === "react/jsx-runtime") return ReactJsxRuntime;
  if (name === "@deepseek-ai/dsh-client-ui-slots") return SlotPackage;
  if (name === "@deepseek-ai/dsh-client-runtime/client") return {};
  if (name === "@deepseek-ai/dsh-client-ui-primitives") return {};
  if (name === "@deepseek-ai/cordis") return { Service: class {} };
  throw new Error(`Unexpected browser module: ${name}`);
}

function injectedProps(injected) {
  const props = { ...injected };
  delete props.hooks;
  for (const [name, source] of Object.entries(injected.hooks ?? {})) {
    props[`use${name[0].toUpperCase()}${name.slice(1)}`] = selector => selector(
      React.useSyncExternalStore(source.subscribe, source.getSnapshot, source.getSnapshot),
    );
  }
  return props;
}

function LegacySimpleConversationGuard() {
  const marker = React.useRef(null);
  React.useLayoutEffect(() => {
    const header = marker.current.closest("header");
    const tabList = header.querySelector("[role=\"tablist\"]");
    const chat = tabList.querySelector("[role=\"tab\"]");
    header.setAttribute("data-relay-simple-conversation", "true");
    tabList.style.display = "none";
    chat.click();
  }, []);
  return React.createElement("span", { ref: marker, hidden: true });
}

function observable(snapshot) {
  return {
    getSnapshot: () => snapshot,
    subscribe: () => () => {},
  };
}

function installBrowserGlobals(window) {
  const keys = [
    "window",
    "document",
    "navigator",
    "HTMLElement",
    "MutationObserver",
    "Node",
    "Event",
    "getComputedStyle",
    "fetch",
    "IS_REACT_ACT_ENVIRONMENT",
  ];
  const previous = new Map(keys.map(key => [key, Object.getOwnPropertyDescriptor(globalThis, key)]));
  const replacements = {
    window,
    document: window.document,
    navigator: window.navigator,
    HTMLElement: window.HTMLElement,
    MutationObserver: window.MutationObserver,
    Node: window.Node,
    Event: window.Event,
    getComputedStyle: window.getComputedStyle.bind(window),
    IS_REACT_ACT_ENVIRONMENT: true,
  };
  for (const [key, value] of Object.entries(replacements)) {
    Object.defineProperty(globalThis, key, {
      configurable: true,
      enumerable: true,
      value,
      writable: true,
    });
  }
  return () => {
    for (const [key, descriptor] of previous) {
      if (descriptor === undefined) delete globalThis[key];
      else Object.defineProperty(globalThis, key, descriptor);
    }
  };
}
