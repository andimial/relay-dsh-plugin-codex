# CDX-INS-004 — AGENTS.override.md

## Traceability

- Primary requirement: `CDX-INS-004`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove independently that same-scope `AGENTS.override.md` replaces `AGENTS.md` in a
fresh DSH Codex Thread.

## Preconditions

- `CDX-INS-003` is closed and global instruction baseline is absent.
- Dedicated `override-scope` DSH Workspace initially contains root-inherited project
  instruction plus a trigger-specific same-scope `AGENTS.md`, but no override file.
- Base and override response markers are distinct and omitted from the common prompt.

## Method

1. Hash/register the directory and confirm `AGENTS.override.md` absence.
2. In a fresh baseline Session, send trigger `override instruction probe 7404`; require
   native same-scope base injection and exact `INS004_BASE_RESULT_7404_CJNH`.
3. Add same-scope `AGENTS.override.md` mapping the identical trigger to
   `INS004_OVERRIDE_WINS_7404_XPMD`, hash it, and restart the isolated Host.
4. In a fresh Session with identical cwd/prompt/model/mode, require native instruction
   chain to contain the override and omit the same-scope base content/marker; require
   exact override result.
5. Require zero tool calls in both branches, retain artifacts, and self-review.

## Expected results

- Before override: exact base marker.
- After override: exact override marker; same-scope base marker/content absent natively.

## Result interpretation

- Pass only when the A/B differs by the override file and native source plus behavior
  prove replacement.
- Fail when both same-scope files are merged, base wins, or override is ignored.
- Blocked only when isolated DSH cannot start the registered directory Workspace.

## Review focus

- Allow the parent-root instruction to remain inherited, but distinguish it from the
  same-scope base file that the override must replace.
