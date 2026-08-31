# CDX-EXT-016 Live Evidence

- Baseline absence was independently proven before fixture installation.
- Existing DSH Session and bound Codex Thread survived the isolated Host restart, but
  their later turn did not receive the newly registered tool.
- A new control Session created immediately afterward received and executed that exact
  tool, ruling out invalid package, failed Host load, schema, model, Workspace, or tool
  handler as explanations.
- The focused adapter unit test for a changed `options.tools` signature passes, so the
  live gap lies before or at production tool-surface refresh for an existing DSH
  Session, not in the isolated adapter method alone.

Result: **fail**.
