# CDX-INS-003 — Nested AGENTS.md

## Traceability

- Primary requirement: `CDX-INS-003`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove independently that a nested `AGENTS.md` applies when the DSH-selected working
directory is that nested scope and does not apply at the parent project root.

## Preconditions

- `CDX-INS-002` is closed; root project instruction is trigger-specific.
- `plain-text-workspace/nested-scope` is registered as its own sanitized DSH Workspace
  and contains a distinct trigger-specific `AGENTS.md`.
- Global instruction baseline remains absent.

## Method

1. Hash root/nested instruction files and nested README; register exact nested cwd.
2. In a fresh nested-Workspace Session, send the common prompt with trigger
   `nested instruction probe 7303` and fallback `INS003_NO_NESTED_INSTRUCTION_7303`.
3. Require native instruction data containing the nested source/content, exact nested
   result, exact nested cwd, and zero tool calls.
4. In a fresh parent-root Session with identical prompt/model/mode, require no nested
   instruction content, exact fallback, exact root cwd, and zero tool calls.
5. Retain both rollouts, archives, screenshots, Workspace storage, and self-review.

## Expected results

- Nested cwd: `INS003_NESTED_OK_7303_FQWL` exactly.
- Parent root: `INS003_NO_NESTED_INSTRUCTION_7303` exactly.

## Result interpretation

- Pass only when native source/content and exact behavior follow directory scope.
- Fail when the nested rule is ignored or leaks upward to the parent root.
- Blocked only when isolated DSH cannot start the registered nested Workspace.

## Review focus

- Distinguish a nested cwd from merely mentioning a nested path in the prompt; ensure
  the positive Thread metadata itself binds the subdirectory.
