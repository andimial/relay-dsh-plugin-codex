# CDX-INS-002 Validation Review

## Reasonableness

- Identical prompts provide a deterministic fallback only when no project rule applies;
  the positive answer marker exists solely in the positive project's instruction.
- Positive complete native injection and negative exact empty state test actual scope,
  not merely different assistant answers.
- Zero-tool turns rule out runtime file reads.

## Reliability

- Fresh Threads bind exact sibling cwd values with identical Host/model/effort/policy.
- File digest, native directory/text, DSH context row, final event/archive, and screenshot
  agree in the positive branch; all corresponding absence/fallback evidence agrees in
  the negative branch.
- No global instruction remains, preventing accidental cross-scope inheritance.

## Verdict

**Pass, high confidence.** Root project `AGENTS.md` is discovered and followed only in
its owning DSH Workspace and does not leak into a trusted sibling Workspace.
