# Codex Validation Run 2026-08-29_0.1.2_ef65b29_live_macos-arm64_env003

## Environment

- Started / finished: 2026-08-29 15:20–15:22 Asia/Shanghai
- Operator: Codex automated secret-persistence validation
- Plugin version / commit: `0.1.2` / `ef65b29dd52c92278a2717f19d2a8f056cefdfaa`
- Codex/App Server: `@openai/codex 0.149.0`; DSH `0.1.0-rc.8`
- Node.js/OS: `v25.5.0`, `Darwin 24.3.0 arm64`
- Isolated Host: `http://127.0.0.1:4392/`
- Model / policy: `GPT-5.6-Sol Low`, `Workspace Write`, `on-request`

## Cases selected

- `cases/CDX-ENV-003--secret-redaction.md`

## Deviations

- The intended consumer and visible transcripts were clean, but Codex persisted the
  sanitized secret literal in two generated shell snapshots. This is the tested failure,
  not a harness deviation.

## Evidence index

- `evidence/CDX-ENV-003/observations.md`
- `evidence/CDX-ENV-003/leak.md`
- `evidence/CDX-ENV-003/consumer-success.png`
- `evidence/CDX-ENV-003/review.md`
