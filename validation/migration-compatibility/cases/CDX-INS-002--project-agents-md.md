# CDX-INS-002 — Project AGENTS.md

## Traceability

- Primary requirement: `CDX-INS-002`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove independently that a project-root `AGENTS.md` is injected and followed only in
that DSH Workspace, not in a trusted sibling control Workspace.

## Preconditions

- `CDX-INS-001` is closed and no global instruction file remains.
- Trusted positive `plain-text-workspace` has trigger-specific root `AGENTS.md`;
  trusted sibling control has no instruction file.
- Response/fallback markers are unique and neither turn needs a tool.

## Method

1. Hash the positive project file and confirm control-tree instruction absence.
2. In a fresh positive Session, send the common prompt containing trigger
   `project instruction probe 7202` and fallback response
   `INS002_NO_PROJECT_INSTRUCTION_7202` if no applicable instruction supplies a result.
3. Require complete native project instruction injection and exact project marker with
   no tool call.
4. In a fresh sibling Session with the same model/mode and identical prompt, require
   empty native `agents_md`, exact fallback marker, and no tool call.
5. Retain both cwd bindings, rollouts, archives, screenshots, and self-review.

## Expected results

- Positive: `INS002_PROJECT_OK_7202_BKSV` exactly.
- Negative: `INS002_NO_PROJECT_INSTRUCTION_7202` exactly, with no project marker.

## Result interpretation

- Pass only when native injection and behavior are project-scoped across both branches.
- Fail when the project instruction is ignored or leaks into the sibling.
- Blocked only when either otherwise-normal fresh Session cannot start.

## Review focus

- Confirm the common prompt omits the project response marker and the global baseline
  remains absent.
