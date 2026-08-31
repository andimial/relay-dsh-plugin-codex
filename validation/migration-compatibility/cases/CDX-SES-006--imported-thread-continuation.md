# CDX-SES-006 — Imported Thread continuation

## Traceability

- Primary requirement: `CDX-SES-006`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that a new user turn sent from the imported DSH Session appends to the original
source Codex Thread rather than creating a replacement Thread.

## Preconditions

- `CDX-SES-005` is closed with committed imported Session
  `codex-import-67c8c14a0c2edbb430665b44` bound to source Thread
  `01a04c60-8a1e-70d2-8c58-7a3febcef577`.
- Source rollout digest/size/set and imported archive are recorded.

## Method

1. Record original source rollout identity, byte/line counts, rollout set, and imported
   link mapping.
2. In the selected imported DSH Session, send a distinct no-tool continuation marker.
3. Require zero new rollout files, unchanged imported mapping, and an append to the
   original source rollout containing the new prompt/final after imported source history.
4. Require the imported DSH archive/UI to append the second turn in order.
5. Retain digests/screenshot and self-review.

## Expected results

- New turn enters the original Thread and appears after imported history in DSH and Codex.

## Result interpretation

- Pass only when immutable Thread/link identity persists and no replacement appears.
- Fail for continuation error, new Thread, duplicate mapping, or history loss.
- Blocked only when the committed imported Session cannot accept a new turn.

## Review focus

- Compare source rollout set and original file path before/after.
- Do not confuse the original live DSH Session with the imported DSH Session.
