import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import test from "node:test";

import { resolveCodexLaunch } from "../codex-command.mjs";

const execFileAsync = promisify(execFile);

test("bundled Codex is the PATH-independent default", () => {
  const launch = resolveCodexLaunch({ env: { PATH: "" } });
  assert.equal(launch.command, process.execPath);
  assert.equal(launch.source, "bundled");
  assert.match(launch.argsPrefix[0], /@openai[/\\]codex[/\\]bin[/\\]codex\.js$/);
});

test("explicit configuration overrides environment and the bundled runtime", () => {
  assert.deepEqual(
    resolveCodexLaunch({ command: "/configured/codex", env: { RELAY_CODEX_COMMAND: "/environment/codex" } }),
    { command: "/configured/codex", argsPrefix: [], source: "config" },
  );
  assert.deepEqual(
    resolveCodexLaunch({ env: { RELAY_CODEX_COMMAND: "/environment/codex" } }),
    { command: "/environment/codex", argsPrefix: [], source: "environment" },
  );
});

test("a missing bundled runtime has an actionable error", () => {
  assert.throws(
    () => resolveCodexLaunch({ resolvePackage() { throw new Error("missing"); } }),
    (error) => error.code === "CODEX_RUNTIME_MISSING" && /RELAY_CODEX_COMMAND/.test(error.message),
  );
});

test("a missing platform package is detected before App Server spawn", () => {
  assert.throws(
    () => resolveCodexLaunch({
      platform: "win32",
      arch: "x64",
      resolvePackage(specifier) {
        if (specifier === "@openai/codex/bin/codex.js") return "C:\\relay\\codex.js";
        throw new Error(`missing ${specifier}`);
      },
    }),
    (error) => error.code === "CODEX_RUNTIME_MISSING" && /win32\/x64/.test(error.message),
  );
});

test("unsupported architectures require an explicit compatible command", () => {
  assert.throws(
    () => resolveCodexLaunch({ platform: "linux", arch: "riscv64" }),
    (error) => error.code === "CODEX_PLATFORM_UNSUPPORTED" && /RELAY_CODEX_COMMAND/.test(error.message),
  );
});

test("the bundled platform binary runs with an empty PATH", async () => {
  const launch = resolveCodexLaunch({ env: { PATH: "" } });
  const { stdout } = await execFileAsync(launch.command, [...launch.argsPrefix, "--version"], {
    env: { ...process.env, PATH: "" },
    windowsHide: true,
  });
  assert.match(stdout, /^codex-cli \d+\./);
});

test("the pinned Codex package covers supported desktop targets", async () => {
  const manifest = await import("@openai/codex/package.json", { with: { type: "json" } });
  assert.deepEqual(
    Object.keys(manifest.default.optionalDependencies).sort(),
    [
      "@openai/codex-darwin-arm64",
      "@openai/codex-darwin-x64",
      "@openai/codex-linux-arm64",
      "@openai/codex-linux-x64",
      "@openai/codex-win32-arm64",
      "@openai/codex-win32-x64",
    ],
  );
});
