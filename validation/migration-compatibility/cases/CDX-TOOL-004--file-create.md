# CDX-TOOL-004 — File create

## Traceability

- Primary requirement: `CDX-TOOL-004`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that Codex's native write tool creates a previously absent Workspace file with
exact requested bytes.

## Preconditions

- `CDX-TOOL-003` is closed.
- Target `write-output/cdx_tool004_created.txt` does not exist before the turn.
- Fresh Session uses sanitized Workspace, `GPT-5.6-Sol Low`, `Workspace Write`.

## Method

1. Record target absence and the expected UTF-8 bytes/digest.
2. Create a fresh Session and send exactly:

   ```text
   Use the write tool, not shell, to create write-output/cdx_tool004_created.txt with exactly these two lines and a final newline:
   CREATE_MARKER_2468_BNQR
   second-line
   After writing, reply CREATED only.
   ```

3. Require one native write call on the exact relative path and terminal `CREATED`.
4. Independently inspect target type, bytes, line count, SHA-256, and Workspace-relative
   containment.
5. Retain artifact copy, calls/results, Session events, screenshot, and diagnostics.

## Expected results

- Exactly one new regular file appears inside the selected Workspace.
- Bytes equal `CREATE_MARKER_2468_BNQR\nsecond-line\n` exactly.
- No shell fallback or unrelated filesystem change occurs.

## Result interpretation

- Pass only when tool identity, exact bytes, containment, and terminal result pass.
- Fail for no/wrong file, altered bytes, outside-Workspace write, or shell substitution.
- Blocked only when native write infrastructure cannot start independently of plugin behavior.

## Review focus

- Treat assistant `CREATED` as insufficient without filesystem and rollout evidence.
- Preserve the unique generated artifact as run evidence.
