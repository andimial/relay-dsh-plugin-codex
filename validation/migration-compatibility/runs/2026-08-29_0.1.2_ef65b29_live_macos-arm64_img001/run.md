# Codex Validation Run 2026-08-29_0.1.2_ef65b29_live_macos-arm64_img001

## Environment

- Started: 2026-08-29 Asia/Shanghai
- Operator: Codex automated validation with browser-visible acceptance
- Plugin version/commit: `0.1.2` / `ef65b29dd52c92278a2717f19d2a8f056cefdfaa`
- Codex package/App Server version: `@openai/codex 0.149.0`
- DSH version: `0.1.0-rc.8`
- Node.js: `v25.5.0`
- OS/architecture: `Darwin 24.3.0 arm64`
- Browser: Chrome through the connected browser extension
- Fixture: `fixtures/image-understanding/single-shapes.png`
- Fixture SHA-256: `71e3ef8768ea6f1c04541bba803dff365ef41c8234c589958045eebd2f4e9d5d`
- Finished: 2026-08-29 Asia/Shanghai after reviewed live failure

## Configuration

- Reused isolated DSH home `/private/tmp/relay-cdx-validation-20260829-txt001`.
- Current plugin is linked directly.
- Fresh DSH Codex Session with one synthetic local PNG attachment.

## Cases selected

- `cases/CDX-IMG-001--single-image-understanding.md`

## Evidence index

- `evidence/CDX-IMG-001/protocol.md`
- `evidence/CDX-IMG-001/live.md`
- `evidence/CDX-IMG-001/review.md`
- `evidence/CDX-IMG-001/session-events.md`
- `evidence/CDX-IMG-001/codex-rollout.md`
- `evidence/CDX-IMG-001/attached.png`
- `evidence/CDX-IMG-001/completed.png`

## Deviation

- The browser-side wait looked only for the expected answer and reached its automation
  timeout after the real turn had already completed with a wrong answer. Browser
  state was reconnected without re-sending; terminal DOM, DSH events, and the exact
  Codex rollout were then inspected. The timeout is test-harness noise, not the
  product result.
