# CDX-CFG-005 Validation Review

## Reasonableness

- All four user values intentionally oppose explicit DSH Session values in one fresh
  Thread, avoiding cross-turn/config drift.
- Native `turn_context` and DSH request header are authoritative admission inputs, not
  assistant claims.
- A real in-Workspace write distinguishes an effective `workspace-write` sandbox from
  the opposing user `read-only` value.

## Reliability

- The pinned parser accepted the opposing config; its distinct digest proves the test
  was not accidentally run on baseline bytes.
- UI selection, DSH header, Codex turn context, unified call, exact file bytes, archive,
  and screenshot all agree on the DSH-owned settings and successful execution.
- Approval is observed in both Codex native `on-request` and DSH injected `ask` forms.
- The progress sentence is presentation-only and cannot alter any setting evidence.
- Cleanup restored both the exact config digest and clean fixture state.

## Verdict

**Pass, high confidence.** In a DSH-created Codex turn, DSH Session choices override
conflicting user defaults for model, reasoning effort, sandbox, and approval policy.
