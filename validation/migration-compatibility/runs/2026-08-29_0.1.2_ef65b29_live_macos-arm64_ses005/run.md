# Codex Validation Run 2026-08-29_0.1.2_ef65b29_live_macos-arm64_ses005

## Environment

- Started / finished: 2026-08-29 15:34 Asia/Shanghai
- Operator: Codex automated Thread-import history validation
- Plugin version / commit: `0.1.2` / `ef65b29dd52c92278a2717f19d2a8f056cefdfaa`
- Codex/App Server: `@openai/codex 0.149.0`; DSH `0.1.0-rc.8`
- Node.js/OS: `v25.5.0`, `Darwin 24.3.0 arm64`
- Isolated Host: `http://127.0.0.1:4392/`
- Imported Thread: `01a04c60-8a1e-70d2-8c58-7a3febcef577`

## Cases selected

- `cases/CDX-SES-005--thread-import-history.md`

## Deviations

- Imported presentation preserves the source user/progress/write/final sequence but
  omits native `pwd`, read, and read-back exec calls. DSH intentionally presents the
  material write operation rather than every low-level source tool call.

## Evidence index

- `evidence/CDX-SES-005/observations.md`
- `evidence/CDX-SES-005/imported-history.png`
- `evidence/CDX-SES-005/review.md`
