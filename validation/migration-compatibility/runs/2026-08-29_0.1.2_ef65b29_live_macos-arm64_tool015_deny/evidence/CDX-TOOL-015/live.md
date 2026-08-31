# CDX-TOOL-015 Deny Branch Live Evidence

- Deny target and allow target were both absent immediately before/after this branch;
  sentinel digest remained
  `d6797352938613cf896b4513c6e70460ba213683b2dc1d1b834745b770d36ecb`.
- Fresh Standard Session visibly used `GPT-5.6-Sol Low`, `Workspace Write`, policy ask.
- Exact native shell request used `require_escalated` and a user-facing justification.
- No approval UI/card appeared; tool immediately returned
  `Rejected("approval request failed")`.
- DSH persisted `DENIED_NO_WRITE` and remained usable. This is safe fail-closed behavior,
  but not evidence of a user choosing deny.
- `approval-missing.png`/`completed.png` preserve the no-card terminal state.
- Turn duration `14.2s`; first token `7.7s`; browser diagnostics `[]`; Host output none.

Branch result: **fail for interactive deny**, while safe default denial works.
