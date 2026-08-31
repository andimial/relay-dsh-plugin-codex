# CDX-SES-007 Validation Review

## Reasonableness

- The marker is random and introduced before compaction; the later recall prompt omits it.
- `thread/compact/start`, the `contextCompaction` item pair, rollout `compacted` object,
  changed context window, and replacement history prove native compaction rather than a
  synthetic summary or copied prompt.
- Exact Thread ID, rollout path, and unchanged rollout-file set distinguish continuation
  from a fresh Thread with similar visible history.

## Reliability

- Protocol events, persistent rollout records, marker-preserving replacement history,
  marker-free recall input, exact native final, Relay binding, and UI all agree.
- A second Host restart reproduces the complete four-turn UI, ruling out a transient
  browser-only success.
- The initial premature-close setup attempt had no rollout mutation and is excluded; only
  the terminal native compaction run supports the verdict.

## Limitations

- Users cannot initiate this path from the current Relay Codex DSH command menu.
- Out-of-band native compaction triggers DSH Session reconciliation/re-keying and creates
  rebuild archives. The owning Codex Thread and visible task continuity survive, but
  internal DSH Session/archive identity is not stable.
- The fixture is a deterministic forced compaction of a moderate history, not a natural
  automatic threshold crossing at the full model context limit.

## Verdict

**Pass, high confidence for native same-Thread context continuity.** The exact hidden
pre-compaction marker survives a real supported App Server compaction and is recalled by
a marker-free later DSH turn on the same Codex Thread. User-triggerability and internal
DSH Session identity remain explicit product limitations.
