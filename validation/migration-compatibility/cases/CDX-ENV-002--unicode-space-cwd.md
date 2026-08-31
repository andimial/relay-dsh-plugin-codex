# CDX-ENV-002 — Non-ASCII and spaced cwd

## Traceability

- Primary requirement: `CDX-ENV-002`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that DSH binds a Codex Thread to a real Workspace path containing both spaces and
non-ASCII characters, and that native tools operate on exact Unicode filenames there.

## Preconditions

- `CDX-ENV-001` is closed and Host PATH cleanup is complete.
- Dedicated `fixtures/迁移 空格 workspace` is trusted and registered as its own DSH
  Workspace; source file digest is recorded and output target is absent.

## Method

1. Hash/register the dedicated Workspace and restart the isolated Host.
2. In a fresh Session, request native `pwd`, exact read of `输入 文件 8602.txt`, and
   exact creation/read-back of `输出 文件 8602.txt`.
3. Require native turn-context cwd and `pwd` to equal the absolute Unicode/spaced path,
   and verify source/result paths and output bytes.
4. Retain rollout/archive/UI evidence, remove generated output, and self-review.

## Expected results

- Exact cwd survives DSH → Codex binding without encoding or quoting loss.
- Unicode/spaced source is read and Unicode/spaced output is written exactly.

## Result interpretation

- Pass only when native cwd, tool paths, bytes, archive, and UI agree.
- Fail for path truncation, wrong cwd, quoting errors, or incorrect bytes.
- Blocked only when DSH cannot register or open the sanitized Workspace.

## Review focus

- Inspect raw native paths, not normalized prose.
- Clean only the generated output; retain deterministic source fixture.
