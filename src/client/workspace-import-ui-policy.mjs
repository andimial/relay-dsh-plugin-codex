export function workspaceImportUiPolicy(phase, ready = 0, failed = 0) {
  if (phase === "importing") {
    return Object.freeze({ canClose: false, primary: "importing", primaryDisabled: true });
  }
  if (phase === "summary") {
    return Object.freeze({
      canClose: true,
      secondary: "cancel",
      primary: "import-all",
      primaryDisabled: ready === 0,
    });
  }
  if (phase === "error") {
    return Object.freeze({ canClose: true, secondary: "cancel", primary: "retry", primaryDisabled: false });
  }
  if (phase === "complete" && failed > 0) {
    return Object.freeze({ canClose: true, secondary: "close", primary: "retry", primaryDisabled: false });
  }
  return Object.freeze({ canClose: true, primary: "close", primaryDisabled: false });
}
