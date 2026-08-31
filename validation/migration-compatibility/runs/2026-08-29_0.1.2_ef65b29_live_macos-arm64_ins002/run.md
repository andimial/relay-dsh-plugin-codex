# Codex Validation Run 2026-08-29_0.1.2_ef65b29_live_macos-arm64_ins002

## Environment

- Started / finished: 2026-08-29 14:46–14:49 Asia/Shanghai
- Operator: Codex automated project-instruction scoping validation
- Plugin version / commit: `0.1.2` / `ef65b29dd52c92278a2717f19d2a8f056cefdfaa`
- Codex/App Server: `@openai/codex 0.149.0`; DSH `0.1.0-rc.8`
- Node.js/OS: `v25.5.0`, `Darwin 24.3.0 arm64`
- Isolated Host: `http://127.0.0.1:4392/`
- Model / policy: `GPT-5.6-Sol Low`, `Workspace Write`, `on-request`
- Positive Workspace: `fixtures/plain-text-workspace`
- Negative Workspace: `fixtures/project-scope-control-workspace`

## Cases selected

- `cases/CDX-INS-002--project-agents-md.md`

## Deviations

- None. The trigger-specific project instruction remains as a sanitized fixture for
  subsequent nested and override cases.

## Evidence index

- `evidence/CDX-INS-002/positive.md`
- `evidence/CDX-INS-002/negative.md`
- `evidence/CDX-INS-002/project-positive.png`
- `evidence/CDX-INS-002/sibling-negative.png`
- `evidence/CDX-INS-002/review.md`
