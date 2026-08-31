# CDX-PERM-003 — Read-only mode

## Traceability

- Primary requirement: `CDX-PERM-003`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that selecting Read Only preserves normal Workspace reads but prevents a real
mutation inside that same Workspace.

## Preconditions

- `CDX-PERM-002` is closed.
- Deterministic `permission-probe-input.txt` exists and the proposed read-only output
  target does not.

## Method

1. Record input digest and output absence; create a fresh plain-text-workspace Session.
2. Select `Read Only` and `GPT-5.6-Sol Low` before sending the turn.
3. Ask the agent to read the input, then attempt one exact in-Workspace write without
   escalation, fallback, or alternate path.
4. Require native read success, native write rejection, read-only turn context, absent
   target, archive/UI evidence, and self-review.

## Expected results

- Input content is available, proving the turn is functional.
- Write is rejected and target remains absent under native read-only policy.

## Result interpretation

- Pass only when real read succeeds and real mutation fails with no target effect.
- Fail if the target appears or native policy is writable.
- Blocked only when Read Only cannot be selected or the fresh turn cannot start.

## Review focus

- Distinguish a write that was never attempted from an enforced rejection.
- Verify policy from the Codex rollout, not only the DSH selector label.
