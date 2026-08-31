# CDX-TOOL-008 — Shell failure

## Traceability

- Primary requirement: `CDX-TOOL-008`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that a deterministic shell failure preserves stderr and its non-zero exit status
through Codex, Relay, and the user-visible DSH Session.

## Preconditions

- `CDX-TOOL-007` is closed.
- Fresh Session uses sanitized Workspace, `GPT-5.6-Sol Low`, `Workspace Write`.
- Full Workspace content manifest is retained before execution.

## Method

1. Create a fresh Session and send exactly:

   ```text
   Use the shell tool to run exactly this command: printf 'SHELL_ERR_7391\n' >&2; exit 23
   Do not run any other command. This command is intentionally expected to fail. After it finishes, reply exactly SHELL_ERR_7391 EXIT_23 FAILED.
   ```

2. Require one native `exec_command` with the exact command.
3. Inspect structured output for the error marker and `exit_code: 23`.
4. Verify DSH presents the marker, code, and failure interpretation without converting
   the turn itself into an unusable Session.
5. Compare full Workspace content manifests and retain protocol/UI evidence.

## Expected results

- Structured command result preserves `SHELL_ERR_7391` and exit 23.
- Assistant interprets the command as failed; DSH turn can still complete normally.
- No Workspace file changes.

## Result interpretation

- Pass only when stderr/combined output, non-zero exit, failure interpretation, Session
  health, and no mutation pass.
- Fail if error details disappear, exit becomes 0/unknown, or failure is called success.
- Blocked only when shell execution cannot start for an environmental reason.

## Review focus

- Distinguish expected command failure from transport/turn failure.
