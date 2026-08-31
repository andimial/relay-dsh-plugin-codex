# Codex Validation Run 2026-08-29_0.1.2_ef65b29_live_macos-arm64_txt005

## Environment

- Started: 2026-08-29 Asia/Shanghai
- Operator: Codex automated validation with browser-visible acceptance
- Plugin version/commit: `0.1.2` / `ef65b29dd52c92278a2717f19d2a8f056cefdfaa`
- Codex package/App Server version: `@openai/codex 0.149.0`
- DSH version: `0.1.0-rc.8`
- Node.js: `v25.5.0`
- OS/architecture: `Darwin 24.3.0 arm64`
- Browser: Chrome through the connected browser extension
- Fixture: `fixtures/plain-text-workspace/`

## Configuration

- Reused isolated DSH home `/private/tmp/relay-cdx-validation-20260829-txt001`.
- The profile links the current local Codex plugin source directly.
- A fresh DSH Session is used for the reasoning/final separation check.

## Cases selected

- `cases/CDX-TXT-005--reasoning-presentation.md`

## Evidence index

- `evidence/CDX-TXT-005/protocol.md`
- `evidence/CDX-TXT-005/live.md`
- `evidence/CDX-TXT-005/review.md`

## Deviation

- The first live attempt inherited `Low` effort. It completed with one correct final
  paragraph but emitted no reasoning disclosure, so the process review rejected it
  as a reasoning-presentation oracle. The case now explicitly requires `High`; a new
  append-only run will execute the corrected method.
