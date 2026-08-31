# CDX-SES-003 — Host restart continuation

## Traceability

- Primary requirement: `CDX-SES-003`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that stopping and restarting the isolated DSH Host preserves the DSH Session and
continues its exact bound Codex Thread with ordered history.

## Preconditions

- `CDX-SES-002` is closed with two ordered turns in one rollout and one link mapping.
- Host restart will reuse the same DSH_HOME, CODEX_HOME, and dedicated link-store path.

## Method

1. Record rollout set, original Thread/link mapping, existing turn order, and digests.
2. Stop the isolated DSH Host; prove the endpoint is unavailable; restart it with the
   identical homes/link store and reload the browser.
3. Require the same DSH Session and first two turns to rehydrate, then send a distinct
   third no-tool marker request.
4. Require zero new rollout files, byte-identical link mapping, and append to the same
   original rollout/archive in three-turn order.
5. Retain UI evidence and self-review.

## Expected results

- Same Session and Thread continue after process restart; all three turns remain ordered.

## Result interpretation

- Pass only when the original Thread ID persists with no replacement rollout/mapping.
- Fail for lost history, new Thread, duplicate binding, or wrong order.
- Blocked only when the Host cannot restart using its original isolated state.

## Review focus

- Prove an actual process outage occurred between turns.
- Keep the dedicated link-store path unchanged across restart.
