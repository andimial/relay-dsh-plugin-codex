# CDX-TOOL-007 — Shell success

## Traceability

- Primary requirement: `CDX-TOOL-007`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that Codex can execute a deterministic successful shell command in the selected
Workspace and receive/present exact stdout plus zero exit status.

## Preconditions

- `CDX-TOOL-006` is closed.
- Fresh Session uses sanitized Workspace, `GPT-5.6-Sol Low`, `Workspace Write`.
- Record a Workspace file manifest before the turn; the command has no intended file
  side effect.

## Method

1. Create a fresh Session and send exactly:

   ```text
   Use the shell tool to run exactly this command: printf 'SHELL_OK_4826\n'
   Do not run any other command. After it finishes, reply exactly SHELL_OK_4826 EXIT_0.
   ```

2. Require one native `exec_command` call with the exact command.
3. Inspect its structured result for stdout `SHELL_OK_4826\n` and `exit_code: 0`.
4. Verify DSH persists the requested interpretation and the Workspace file manifest is
   unchanged.
5. Retain rollout/Session excerpts, screenshot, manifests, and diagnostics.

## Expected results

- Native shell call completes with exact stdout and exit code 0.
- Terminal response presents both marker and zero-exit interpretation.
- No Workspace file content or file set changes.

## Result interpretation

- Pass only when exact command, stdout, zero exit, presentation, and no side effect pass.
- Fail for missing/altered output, non-zero/unknown exit, extra shell command, or mutation.
- Blocked only when shell execution cannot start for an environmental reason.

## Review focus

- Do not infer zero exit only from assistant prose; require structured tool evidence.
