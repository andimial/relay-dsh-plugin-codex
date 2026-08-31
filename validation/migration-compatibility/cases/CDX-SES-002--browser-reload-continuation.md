# CDX-SES-002 — Browser reload continuation

## Traceability

- Primary requirement: `CDX-SES-002`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that a full browser reload preserves the DSH Session and continues the exact
already-bound Codex Thread rather than creating a replacement mapping.

## Preconditions

- `CDX-SES-001` is closed with one DSH Session, one Thread, and one rollout in the
  dedicated isolated link store.
- The first turn marker and baseline rollout byte/line counts are recorded.

## Method

1. Record Session/Thread/link-store/rollout identity and the first-turn marker.
2. Fully reload the DSH browser tab and reopen the same selected Session if navigation
   state does not auto-restore.
3. Require the first turn to be visibly rehydrated, then send a distinct second no-tool
   marker request.
4. Require the link store to remain one entry with the same Thread ID, the rollout set
   to gain no file, and the existing rollout/archive to append the second turn in order.
5. Retain post-reload UI evidence and self-review.

## Expected results

- Both turns appear in order and the same Codex Thread continues after reload.

## Result interpretation

- Pass only when no replacement Thread/mapping/rollout appears.
- Fail for lost history, duplicate mapping, or new Thread binding.
- Blocked only when the same DSH Session cannot be reopened after reload.

## Review focus

- Separate automatic route restoration from continuity after explicit reopening.
- Compare immutable IDs and before/after rollout sets, not titles.
