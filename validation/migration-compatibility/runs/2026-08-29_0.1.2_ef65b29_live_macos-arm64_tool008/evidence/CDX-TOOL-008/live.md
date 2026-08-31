# CDX-TOOL-008 Live Evidence

- Full eight-file Workspace pre-manifest retained.
- Fresh Session visibly used `GPT-5.6-Sol Low` and `Workspace Write`.
- Exactly one native `exec_command` ran exact command
  `printf 'SHELL_ERR_7391\n' >&2; exit 23` in the selected Workspace.
- Structured result preserved `exit_code: 23` and output `SHELL_ERR_7391\n`.
- The marker is known to originate from stderr by command construction. The tool
  flattens it into its generic `output` field rather than exposing a distinct stderr
  field; content and failure status are nevertheless preserved.
- DSH persisted `SHELL_ERR_7391 EXIT_23 FAILED.` and ended the turn normally, keeping
  the composer usable. It correctly distinguished command failure from Session failure.
- A progress sentence plus terminal punctuation deviated from the requested exact-only
  response, without changing the failure interpretation.
- Post-manifest is byte-identical to pre-manifest.
- Turn completed in `11.6s`; first token `6.9s`.
- Browser warning/error diagnostics: `[]`; isolated Host output: none.

Result: **pass**, with combined-output and response-exactness limitations recorded.
