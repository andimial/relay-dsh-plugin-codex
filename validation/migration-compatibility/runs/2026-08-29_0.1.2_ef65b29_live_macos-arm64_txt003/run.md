# Codex Validation Run 2026-08-29_0.1.2_ef65b29_live_macos-arm64_txt003

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
- Finished: 2026-08-29 Asia/Shanghai after reviewed live completion

## Configuration

- Reused isolated DSH home `/private/tmp/relay-cdx-validation-20260829-txt001`.
- The profile links the current local Codex plugin source directly.
- A new DSH Session is used; `Codex` must be selected before the first message.

## Cases selected

- `cases/CDX-TXT-003--markdown-code-rendering.md`

## Evidence index

- `evidence/CDX-TXT-003/live.md`
- `evidence/CDX-TXT-003/review.md`
- `evidence/CDX-TXT-003/completed.png`

## Deviations

- No focused Markdown adapter/protocol test exists. This case intentionally relies
  on real Codex plus semantic DSH Web rendering evidence, as declared by `L`/`W`.
