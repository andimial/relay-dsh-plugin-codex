# CDX-TOOL-012 — Git inspection

## Traceability

- Primary requirement: `CDX-TOOL-012`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that Codex can correctly inspect deterministic Git status and diff without
mutating HEAD, index, or worktree.

## Preconditions

- `CDX-TOOL-011` is closed.
- Nested repository `git-fixture/` has baseline commit
  `989d584df070c7381848291f13755f3504b4c57c`, one modified tracked file, one untracked
  file, and no staged changes.
- Record exact HEAD, index digest/mtime, worktree file digests, status, and diff.
- Fresh Session uses sanitized Workspace, `GPT-5.6-Sol Low`, `Workspace Write`.

## Method

1. Create a fresh Session and send exactly:

   ```text
   Use the shell tool to run exactly: git -C git-fixture status --short && git -C git-fixture diff -- tracked.txt
   Do not change, stage, or commit anything. Interpret the output by replying GIT_STATUS MODIFIED_TRACKED UNTRACKED_NEW DIFF_ONE_TO_TWO only.
   ```

2. Require one exact native shell call, exit 0, status lines for modified `tracked.txt`
   and untracked `new.txt`, plus the exact one-line diff.
3. Compare post-run HEAD, index digest/mtime, worktree digests, status, diff, staged diff,
   and file set to preflight.
4. Retain raw tool/Session evidence, screenshot, and diagnostics.

## Expected results

- Status reports ` M tracked.txt` and `?? new.txt`.
- Diff changes only `BASE=ONE_3141` to `BASE=TWO_2718`.
- Assistant interpretation is correct and repository state is byte-for-byte unchanged.

## Result interpretation

- Pass only when inspection output and all no-mutation checks pass.
- Fail for omitted/misread status/diff or any stage/commit/worktree/ref mutation.
- Blocked only when the nested repository cannot be read environmentally.

## Review focus

- Do not rely on a clean post-status alone; compare HEAD, index, file digests, and diff.
