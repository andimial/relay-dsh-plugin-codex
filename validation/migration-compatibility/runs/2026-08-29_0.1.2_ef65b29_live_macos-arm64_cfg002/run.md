# Codex Validation Run 2026-08-29_0.1.2_ef65b29_live_macos-arm64_cfg002

## Environment

- Started / finished: 2026-08-29 14:12–14:17 Asia/Shanghai
- Operator: Codex automated project-config scope validation
- Plugin version / commit: `0.1.2` / `ef65b29dd52c92278a2717f19d2a8f056cefdfaa`
- Codex/App Server: `@openai/codex 0.149.0`; DSH `0.1.0-rc.8`
- Node.js/OS: `v25.5.0`, `Darwin 24.3.0 arm64`
- Isolated Host: `http://127.0.0.1:4392/`
- Model / policy: `GPT-5.6-Sol Low`, `Workspace Write`, `on-request`
- Positive Workspace: `fixtures/plain-text-workspace`
- Negative Workspace: `fixtures/project-scope-control-workspace`

## Cases selected

- `cases/CDX-CFG-002--project-config-scope.md`

## Deviations

- None. The negative turn took 79.5 seconds because unified execution was not emitted
  until late in generation; it still made exactly one catalog-only call and completed.

## Evidence index

- `evidence/CDX-CFG-002/spec.md`
- `evidence/CDX-CFG-002/fixtures-and-oracle.md`
- `evidence/CDX-CFG-002/positive-rollout.md`
- `evidence/CDX-CFG-002/negative-rollout.md`
- `evidence/CDX-CFG-002/server-log.md`
- `evidence/CDX-CFG-002/sessions-and-ui.md`
- `evidence/CDX-CFG-002/project-positive.png`
- `evidence/CDX-CFG-002/project-negative.png`
- `evidence/CDX-CFG-002/review.md`
