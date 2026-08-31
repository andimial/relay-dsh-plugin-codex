# CDX-SES-007 — Long-context compaction continuation

## Traceability

- Primary requirement: `CDX-SES-007`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P1`

## Objective

Prove that an early private marker remains recoverable from the same Codex Thread after
the supported native App Server compaction path and a subsequent DSH continuation.

## Preconditions

- A committed DSH Session is bound to one known native Codex Thread and source rollout.
- The pinned Codex App Server advertises `thread/compact/start`.
- The DSH Host can be stopped before an independent App Server resumes the Thread.

## Method

1. In the bound DSH Session, add a private random marker in a no-tool turn and require
   only an acknowledgement, then record source rollout, link, archive, and file-set
   identity.
2. Stop the DSH Host so only one App Server owns the Thread. Resume the exact Thread and
   call native `thread/compact/start` using the same isolated `CODEX_HOME`.
3. Require the original rollout to record a native context-compaction item without a
   replacement rollout or Thread mapping.
4. Restart the DSH Host with the same homes/link store. Continue the same imported DSH
   Session and ask for the private marker without including or otherwise revealing it.
5. Require exact marker recall, an append to the original rollout, stable binding, and
   retained DSH archive/UI history. Retain sanitized evidence and self-review.

## Expected results

- Native compaction completes on the bound Thread and a later DSH turn returns the exact
  hidden marker from pre-compaction context.

## Result interpretation

- Pass only when Thread identity, a native compaction record, and exact post-compaction
  recall all agree.
- Fail if compaction replaces/loses the Thread, the marker is not recalled exactly, or
  DSH cannot continue the compacted Thread.
- Blocked only when the pinned supported protocol cannot initiate compaction at all.

## Review focus

- Ensure the recall prompt and post-compaction runtime inputs never contain the marker.
- Distinguish native App Server support from current DSH UI discoverability; the Relay
  Codex preset currently exposes no user-facing compact command.
- Do not treat a synthetic summary, copied history, or a fresh Thread as compaction.
