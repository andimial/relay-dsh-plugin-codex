# CDX-TOOL-015 Allow Branch Live Evidence

- Preflight: both external targets absent; sentinel SHA-256
  `d6797352938613cf896b4513c6e70460ba213683b2dc1d1b834745b770d36ecb`.
- Fresh Standard Session visibly used `GPT-5.6-Sol Low`, `Workspace Write`; DSH Session
  event declared approval policy `ask`.
- Codex issued exact native shell request with `sandbox_permissions: require_escalated`
  and a concrete user-facing justification.
- No approval UI/card appeared. Tool failed immediately with
  `Rejected("approval request failed")`.
- DSH runtime context says approval asks require a configured answerer and fail closed
  without one. The tested Web surface supplied no answerer despite policy `ask`.
- Target remained absent and sentinel digest unchanged.
- Assistant accurately reported no approval/file, and Session remained usable.
- `approval-missing.png`/`completed.png` show the terminal no-card UI state.
- Browser diagnostics `[]`; Host output none.

Branch result: **fail**. User cannot exercise the allow decision.
