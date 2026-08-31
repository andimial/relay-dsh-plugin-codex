# CDX-SES-003 Validation Review

## Reasonableness

- A confirmed TCP outage demonstrates process restart rather than browser-only reload.
- Reusing all three state roots isolates restart persistence from migration or import.
- Three distinct ordered markers and before/after sets expose replacement or duplication.

## Reliability

- Outage control, startup command, automatic UI rehydration, zero new rollouts,
  byte-identical link store, same-rollout append, archive, and screenshot agree.
- The immutable original Thread ID appears in both link store and rollout metadata after
  restart.
- No tool/subagent activity can create auxiliary Threads.

## Verdict

**Pass, high confidence.** A full DSH Host restart preserves the DSH Session and exact
Codex Thread, restores ordered history, and continues by appending to the same rollout.
