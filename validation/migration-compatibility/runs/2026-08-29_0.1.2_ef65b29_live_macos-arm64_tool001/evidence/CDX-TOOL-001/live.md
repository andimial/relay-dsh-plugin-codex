# CDX-TOOL-001 Live Evidence

Expected selected Workspace and output:

```text
/Users/boboyang/work/Relay/integrations/codex/validation/migration-compatibility/fixtures/plain-text-workspace
```

Observed:

- Exact rollout tool call executed `exec_command({cmd:"pwd", login:false})` once.
- Tool output was the expected path plus one newline; the command wrapper completed
  successfully.
- Terminal assistant answer was the expected path exactly once with no additional
  prose.
- DSH Session header/system context names the same selected Workspace.
- Turn completed in `11s`; first token `10.3s`.
- `completed.png` records the exact visible terminal answer.
- Composer visible/enabled: `true` / `true`; no stop control remained.
- Browser warning/error diagnostics: `[]`; isolated Host output: none.

Result: **pass**.
