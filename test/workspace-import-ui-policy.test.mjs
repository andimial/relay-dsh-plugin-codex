import assert from "node:assert/strict";
import test from "node:test";

import { workspaceImportUiPolicy } from "../src/client/workspace-import-ui-policy.mjs";

test("Workspace import UI policy covers every control state", () => {
  assert.deepEqual(workspaceImportUiPolicy("no-workspace"), {
    canClose: true, primary: "close", primaryDisabled: false,
  });
  assert.deepEqual(workspaceImportUiPolicy("scanning"), {
    canClose: true, primary: "close", primaryDisabled: false,
  });
  assert.deepEqual(workspaceImportUiPolicy("summary", 0), {
    canClose: true, secondary: "cancel", primary: "import-all", primaryDisabled: true,
  });
  assert.deepEqual(workspaceImportUiPolicy("summary", 2), {
    canClose: true, secondary: "cancel", primary: "import-all", primaryDisabled: false,
  });
  assert.deepEqual(workspaceImportUiPolicy("importing", 2), {
    canClose: false, primary: "importing", primaryDisabled: true,
  });
  assert.deepEqual(workspaceImportUiPolicy("error"), {
    canClose: true, secondary: "cancel", primary: "retry", primaryDisabled: false,
  });
  assert.deepEqual(workspaceImportUiPolicy("complete", 0, 1), {
    canClose: true, secondary: "close", primary: "retry", primaryDisabled: false,
  });
  assert.deepEqual(workspaceImportUiPolicy("complete", 0, 0), {
    canClose: true, primary: "close", primaryDisabled: false,
  });
});
