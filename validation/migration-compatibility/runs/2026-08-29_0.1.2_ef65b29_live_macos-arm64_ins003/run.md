# Codex Validation Run 2026-08-29_0.1.2_ef65b29_live_macos-arm64_ins003

## Environment

- Started / finished: 2026-08-29 14:49–14:54 Asia/Shanghai
- Operator: Codex automated nested-instruction validation
- Plugin version / commit: `0.1.2` / `ef65b29dd52c92278a2717f19d2a8f056cefdfaa`
- Codex/App Server: `@openai/codex 0.149.0`; DSH `0.1.0-rc.8`
- Node.js/OS: `v25.5.0`, `Darwin 24.3.0 arm64`
- Isolated Host: `http://127.0.0.1:4392/`
- Model / policy: `GPT-5.6-Sol Low`, `Workspace Write`, `on-request`
- Positive cwd: `fixtures/plain-text-workspace/nested-scope`
- Negative cwd: `fixtures/plain-text-workspace`

## Cases selected

- `cases/CDX-INS-003--nested-agents-md.md`

## Deviations

- The sanitized nested Workspace registration remains in the temporary isolated DSH
  profile for later scope/override validation reuse.

## Evidence index

- `evidence/CDX-INS-003/positive.md`
- `evidence/CDX-INS-003/negative.md`
- `evidence/CDX-INS-003/nested-positive.png`
- `evidence/CDX-INS-003/root-negative.png`
- `evidence/CDX-INS-003/review.md`
