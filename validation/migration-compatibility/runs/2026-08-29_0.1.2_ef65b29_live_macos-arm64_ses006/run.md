# Codex Validation Run 2026-08-29_0.1.2_ef65b29_live_macos-arm64_ses006

## Environment

- Started / finished: 2026-08-29 15:36 Asia/Shanghai
- Operator: Codex automated imported-Thread continuation validation
- Plugin version / commit: `0.1.2` / `ef65b29dd52c92278a2717f19d2a8f056cefdfaa`
- Codex/App Server: `@openai/codex 0.149.0`; DSH `0.1.0-rc.8`
- Node.js/OS: `v25.5.0`, `Darwin 24.3.0 arm64`
- Imported Session: `codex-import-67c8c14a0c2edbb430665b44`
- Source Thread: `01a04c60-8a1e-70d2-8c58-7a3febcef577`

## Cases selected

- `cases/CDX-SES-006--imported-thread-continuation.md`

## Deviations

- Link-store digest changes as expected because the adapter appends the new native
  `dshTurnIds` admission ID; binding identity/config remain unchanged.

## Evidence index

- `evidence/CDX-SES-006/observations.md`
- `evidence/CDX-SES-006/imported-continuation.png`
- `evidence/CDX-SES-006/review.md`
