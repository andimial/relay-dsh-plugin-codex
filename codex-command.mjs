import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const BUNDLED_CODEX_ENTRY = "@openai/codex/bin/codex.js";
const PLATFORM_PACKAGE = Object.freeze({
  "darwin-arm64": "@openai/codex-darwin-arm64",
  "darwin-x64": "@openai/codex-darwin-x64",
  "linux-arm64": "@openai/codex-linux-arm64",
  "linux-x64": "@openai/codex-linux-x64",
  "win32-arm64": "@openai/codex-win32-arm64",
  "win32-x64": "@openai/codex-win32-x64",
});

export function resolveCodexLaunch({
  command,
  env = process.env,
  execPath = process.execPath,
  platform = process.platform,
  arch = process.arch,
  resolvePackage = require.resolve,
} = {}) {
  const configured = nonBlank(command);
  if (configured !== undefined) {
    return Object.freeze({
      command: configured,
      argsPrefix: [],
      source: "config",
    });
  }
  const environmentCommand = nonBlank(env.RELAY_CODEX_COMMAND);
  if (environmentCommand !== undefined) {
    return Object.freeze({
      command: environmentCommand,
      argsPrefix: [],
      source: "environment",
    });
  }

  const platformPackage = PLATFORM_PACKAGE[`${platform}-${arch}`];
  if (platformPackage === undefined) {
    const error = new Error(
      `The bundled Codex runtime does not support ${platform}/${arch}. `
      + "Set RELAY_CODEX_COMMAND to a compatible Codex executable.",
    );
    error.code = "CODEX_PLATFORM_UNSUPPORTED";
    throw error;
  }

  let launcher;
  try {
    launcher = resolvePackage(BUNDLED_CODEX_ENTRY);
    resolvePackage(`${platformPackage}/package.json`);
  } catch (cause) {
    const error = new Error(
      `The bundled Codex runtime for ${platform}/${arch} is unavailable. `
      + "Reinstall relay-dsh-plugin-codex, "
      + "or set RELAY_CODEX_COMMAND to an absolute Codex executable path.",
      { cause },
    );
    error.code = "CODEX_RUNTIME_MISSING";
    throw error;
  }

  return Object.freeze({
    command: execPath,
    argsPrefix: [launcher],
    source: "bundled",
  });
}

export function codexSpawnError(error, command, source) {
  if (error?.code !== "ENOENT") return error;
  const wrapped = new Error(
    `Unable to start Codex from ${JSON.stringify(command)} (${source}). `
    + "Set RELAY_CODEX_COMMAND to an absolute Codex executable path, or reinstall "
    + "relay-dsh-plugin-codex to restore its bundled runtime.",
    { cause: error },
  );
  wrapped.code = "CODEX_EXECUTABLE_NOT_FOUND";
  wrapped.path = command;
  return wrapped;
}

function nonBlank(value) {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}
