# CDX-TOOL-005 — Targeted edit

## Traceability

- Primary requirement: `CDX-TOOL-005`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that Codex's native edit tool changes only one uniquely identified line while
preserving every surrounding byte.

## Preconditions

- `CDX-TOOL-004` is closed.
- Fixture `edit-fixture/targeted-edit.txt` has its recorded pre-edit bytes/digest.
- `TARGET_VALUE=BEFORE_8642` occurs exactly once in the Workspace.
- Fresh Session uses sanitized Workspace, `GPT-5.6-Sol Low`, `Workspace Write`.

## Method

1. Record fixture bytes, line count, digest, and unique occurrence of the old marker.
2. Compute and retain the only acceptable post-edit bytes/digest.
3. Create a fresh Session and send exactly:

   ```text
   Use the edit tool, not shell, to edit edit-fixture/targeted-edit.txt. Replace exactly TARGET_VALUE=BEFORE_8642 with TARGET_VALUE=AFTER_7319 and change nothing else. After editing, reply EDITED only.
   ```

4. Require one native targeted edit on the exact relative path and terminal `EDITED`.
5. Independently inspect the post-edit bytes/digest and a unified pre/post diff.
6. Retain pre/post artifacts, calls/results, Session events, screenshot, and diagnostics.

## Expected results

- Exactly one line changes from the old marker to the new marker.
- All other bytes, line order, and final newline remain identical.
- No shell fallback or unrelated filesystem change occurs.

## Result interpretation

- Pass only when native tool identity and the exact one-line diff both pass.
- Fail for wrong/multiple edits, altered surrounding bytes, wrong path, or shell use.
- Blocked only when native edit infrastructure cannot start independently of plugin
  behavior.

## Review focus

- A successful tool status or terminal `EDITED` is insufficient without exact diff and
  digest evidence.
