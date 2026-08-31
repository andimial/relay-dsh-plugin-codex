# Codex Validation Run 2026-08-29_0.1.2_ef65b29_live_macos-arm64_perm004

## Environment

- Started / finished: 2026-08-29 15:09–15:10 Asia/Shanghai
- Operator: Codex automated network-policy validation
- Plugin version / commit: `0.1.2` / `ef65b29dd52c92278a2717f19d2a8f056cefdfaa`
- Codex/App Server: `@openai/codex 0.149.0`; DSH `0.1.0-rc.8`
- Node.js/OS: `v25.5.0`, `Darwin 24.3.0 arm64`
- Isolated Host: `http://127.0.0.1:4392/`
- Probe server: `http://127.0.0.1:4394/`
- Model / policy: `GPT-5.6-Sol Low`, `Workspace Write`, `on-request`

## Cases selected

- `cases/CDX-PERM-004--network-policy.md`

## Deviations

- An initial new-Session model-selection race submitted the probe to unconfigured
  DeepSeek and failed pre-model with `MISSING_CREDENTIAL`; it created no Codex Thread.
  A second fresh Session explicitly confirmed the GPT selector before execution.

## Evidence index

- `evidence/CDX-PERM-004/observations.md`
- `evidence/CDX-PERM-004/network-blocked.png`
- `evidence/CDX-PERM-004/review.md`
