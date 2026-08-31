# Codex Validation Run 2026-08-29_0.1.2_ef65b29_live_macos-arm64_txt004

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
- Finished: 2026-08-29 Asia/Shanghai after reviewed protocol/live completion

## Configuration

- Reused isolated DSH home `/private/tmp/relay-cdx-validation-20260829-txt001`.
- The profile links the current local Codex plugin source directly.
- A fresh DSH Session is used for the long streaming response.

## Cases selected

- `cases/CDX-TXT-004--incremental-streaming.md`

## Evidence index

- `evidence/CDX-TXT-004/protocol.md`
- `evidence/CDX-TXT-004/live.md`
- `evidence/CDX-TXT-004/review.md`
- `evidence/CDX-TXT-004/streaming.png`
- `evidence/CDX-TXT-004/completed.png`

## Deviations

- The exact pre-terminal machine sample contained only the start marker. The
  immediately following screenshot operation captured two additional tokens because
  the same turn continued streaming. Both observations remained pre-terminal with
  no end marker and a visible stop control.
