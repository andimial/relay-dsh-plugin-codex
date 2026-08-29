import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const component = await readFile(
  new URL("../src/client/WorkspaceImportAction.tsx", import.meta.url),
  "utf8",
);
const styles = await readFile(
  new URL("../src/client/WorkspaceImportAction.module.css", import.meta.url),
  "utf8",
);

function cssRule(name) {
  return styles.match(new RegExp(`\\.${name}\\s*\\{([^}]*)\\}`))?.[1] ?? "";
}

test("workspace import action fits both expanded and collapsed sidebar rails", () => {
  assert.match(component, /wide \? css\.triggerWide : css\.triggerCollapsed/);

  const wide = cssRule("triggerWide");
  assert.match(wide, /width:\s*100%/);
  assert.match(wide, /padding:\s*0 12px/);

  const collapsed = cssRule("triggerCollapsed");
  assert.match(collapsed, /width:\s*36px/);
  assert.match(collapsed, /height:\s*36px/);
  assert.match(collapsed, /justify-content:\s*center/);
  assert.match(collapsed, /padding:\s*0/);
});
