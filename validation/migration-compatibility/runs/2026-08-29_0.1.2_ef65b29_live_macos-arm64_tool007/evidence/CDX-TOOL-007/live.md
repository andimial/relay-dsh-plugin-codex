# CDX-TOOL-007 Live Evidence

- Before the turn, the Workspace contained exactly eight regular fixture files; their
  content SHA-256 manifest is retained in `pre-manifest.sha256`.
- Fresh Session visibly used `GPT-5.6-Sol Low` and `Workspace Write`.
- The rollout contains exactly one native `exec_command` with exact command
  `printf 'SHELL_OK_4826\n'` and exact selected Workspace `workdir`.
- Structured tool result: `exit_code: 0`, `output: "SHELL_OK_4826\n"`, no stderr,
  wall time `0.000002125s`.
- DSH persisted `SHELL_OK_4826 EXIT_0`, so both stdout identity and zero-exit
  interpretation were user-visible.
- It also persisted one progress sentence before the requested exact reply; this is a
  response-exactness deviation, not a shell-result mismatch.
- Post-turn Workspace contains the same eight paths and exact same content SHA-256
  manifest as preflight.
- Turn completed normally in `9.7s`; first token `6.3s`.
- `completed.png` records the visible answer.
- Browser warning/error diagnostics: `[]`; isolated Host output: none.

Result: **pass**, with a response-exactness deviation.
