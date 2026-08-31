import assert from "node:assert/strict";
import test from "node:test";

import { codexDshToolSurface, handleCodexServerRequest } from "../codex-tools.js";

test("reserved DSH MCP tool names are safely exposed and routed to their original names", async () => {
  const originalName = "mcp__context7__query-docs";
  const { dynamicTools } = codexDshToolSurface([{
    name: originalName,
    description: "Query Context7 documentation.",
    parameters: { type: "object", properties: {}, additionalProperties: false },
  }]);
  const dshNamespace = dynamicTools.find(tool => tool.type === "namespace" && tool.name === "dsh");
  const exposedName = dshNamespace.tools[0].name;

  assert.notEqual(exposedName, originalName);
  assert.doesNotMatch(exposedName, /^mcp(?:__|$)/);
  assert.match(exposedName, /^[a-zA-Z0-9_-]{1,128}$/);

  const calls = [];
  const agent = {
    id: "dsh-1",
    ctx: {
      tools: {
        async execute(input) {
          calls.push(input);
          return { isError: false, content: [{ type: "text", text: "context7:ok" }] };
        },
      },
    },
  };
  const adapter = {
    dshSessionForInteractionThread: threadId => threadId === "thread-1" ? agent.id : null,
    dshToolName: (sessionId, name) => sessionId === agent.id && name === exposedName ? originalName : null,
    captureRequestOwnership: request => request.id,
    assertRequestOwnership() {},
    signalForInteractionThread: () => new AbortController().signal,
  };
  const runtime = {
    dynamic: [],
    rejected: [],
    respondDynamicTool(id, success, text) { this.dynamic.push({ id, success, text }); },
    rejectRequest(id, error) { this.rejected.push({ id, error }); },
  };

  await handleCodexServerRequest({
    agents: { get: id => id === agent.id ? agent : null },
    approval: { async request() { throw new Error("unexpected approval"); } },
    userQuestions: { async ask() { throw new Error("unexpected question"); } },
  }, {
    adapter,
    runtime,
    request: {
      id: "context7-1",
      method: "item/dynamicTool/call",
      params: {
        threadId: "thread-1",
        namespace: "dsh",
        name: exposedName,
        arguments: JSON.stringify({ library: "codex" }),
      },
    },
  });

  assert.deepEqual(runtime.rejected, []);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].name, originalName);
  assert.deepEqual(calls[0].arguments, { library: "codex" });
  assert.deepEqual(runtime.dynamic, [{ id: "context7-1", success: true, text: "context7:ok" }]);
});

test("DSH tool aliases are deterministic, valid, and isolated from raw tool names", () => {
  const unsafeName = "mcp__server__tool.with spaces";
  const longName = `tool_${"x".repeat(128)}`;
  const firstUnsafeAlias = dshToolNames(codexDshToolSurface([tool(unsafeName)]).dynamicTools)[0];
  const secondUnsafeAlias = dshToolNames(codexDshToolSurface([tool(unsafeName)]).dynamicTools)[0];
  const longAlias = dshToolNames(codexDshToolSurface([tool(longName)]).dynamicTools)[0];

  assert.equal(firstUnsafeAlias, secondUnsafeAlias);
  assert.match(firstUnsafeAlias, /^[a-zA-Z0-9_-]{1,128}$/);
  assert.match(longAlias, /^[a-zA-Z0-9_-]{1,128}$/);

  const names = dshToolNames(codexDshToolSurface([
    tool(unsafeName),
    tool(firstUnsafeAlias),
    tool("ordinary_tool"),
  ]).dynamicTools);
  assert.equal(new Set(names).size, names.length);
  assert.equal(names[2], "ordinary_tool");
  assert.notEqual(names[1], firstUnsafeAlias);
});

test("duplicate DSH tool names fail before reaching Codex", () => {
  assert.throws(
    () => codexDshToolSurface([tool("same_tool"), tool("same_tool")]),
    /Duplicate DSH tool name: same_tool/,
  );
});

function tool(name) {
  return {
    name,
    description: `Tool ${name}`,
    parameters: { type: "object", properties: {}, additionalProperties: false },
  };
}

function dshToolNames(dynamicTools) {
  return dynamicTools.find(candidate => candidate.type === "namespace" && candidate.name === "dsh")
    .tools.map(candidate => candidate.name);
}
