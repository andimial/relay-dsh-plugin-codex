import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const preset = await readFile(
  new URL("../presets/relay-codex/agent.cordis.yml", import.meta.url),
  "utf8",
);

test("Codex preset mounts the scoped skill catalog and skill tool", () => {
  assert.match(preset, /name:\s*['"]@deepseek-ai\/dsh-skill-filesystem['"]/);
  assert.match(preset, /name:\s*['"]@deepseek-ai\/dsh-tool-skill['"]/);
  assert.doesNotMatch(preset, /^\s*\[\]\s*$/m);
});
