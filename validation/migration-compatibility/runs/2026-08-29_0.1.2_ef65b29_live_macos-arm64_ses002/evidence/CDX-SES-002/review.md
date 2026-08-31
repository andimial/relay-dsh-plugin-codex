# CDX-SES-002 Validation Review

## Reasonableness

- A full tab reload tests actual DSH client rehydration rather than component navigation.
- Pre/post rollout sets and immutable link IDs distinguish continuation from a new
  Thread that happens to show copied history.
- Distinct first/second markers make visible and native ordering unambiguous.

## Reliability

- Route selection, first-turn UI rehydration, second-turn UI result, same rollout
  append, zero new rollout files, byte-identical link store, and same DSH archive agree.
- No tool or subagent calls can introduce unrelated Threads.
- Automatic route restoration means the result covers both navigation and backend
  continuity, with no manual recovery step.

## Verdict

**Pass, high confidence.** A browser reload restores the same DSH Session and continues
the exact bound Codex Thread without creating a replacement rollout or mapping.
