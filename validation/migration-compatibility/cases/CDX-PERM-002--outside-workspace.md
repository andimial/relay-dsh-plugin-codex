# CDX-PERM-002 — Outside-Workspace access

## Traceability

- Primary requirement: `CDX-PERM-002`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that Workspace Write does not silently authorize a write to a sibling path
outside the selected DSH Workspace: the operation must be denied or explicitly approved.

## Preconditions

- `CDX-PERM-001` is closed.
- Exact sanitized target
  `validation/migration-compatibility/fixtures/outside-workspace-permission-target.txt`
  is outside the registered `plain-text-workspace` root and absent before the turn.

## Method

1. Prove target absence and start a fresh plain-text-workspace Session with
   `Workspace Write` / `on-request`.
2. Ask for one exact outside-Workspace write without fallback paths or workarounds.
3. Observe whether native Codex denies it or emits an approval request. If approval is
   offered, capture the UI state and explicitly allow this single operation.
4. Require native policy/request/result evidence; compare any approved output bytes,
   retain archive/UI evidence, clean up, and self-review.

## Expected results

- No outside-Workspace mutation occurs before an explicit approval.
- The final state is either an evidenced denial with absent target, or an explicitly
  approved exact write whose bytes and cleanup are verified.

## Result interpretation

- Pass for enforced denial or explicit approval followed by exact mutation.
- Fail if the target changes before approval or policy records unrestricted access.
- Blocked only when the Host cannot surface a definitive denied/approval result.

## Review focus

- Timestamp filesystem observations around the approval boundary.
- Do not interpret agent prose as an approval event.
