# Codex Validation Run 2026-08-29_0.1.2_ef65b29_live_macos-arm64_ins004

## Environment

- Started / finished: 2026-08-29 14:56–14:57 Asia/Shanghai
- Operator: Codex automated same-scope override validation
- Plugin version / commit: `0.1.2` / `ef65b29dd52c92278a2717f19d2a8f056cefdfaa`
- Codex/App Server: `@openai/codex 0.149.0`; DSH `0.1.0-rc.8`
- Node.js/OS: `v25.5.0`, `Darwin 24.3.0 arm64`
- Isolated Host: `http://127.0.0.1:4392/`
- Model / policy: `GPT-5.6-Sol Low`, `Workspace Write`, `on-request`
- Common cwd: `fixtures/plain-text-workspace/override-scope`

## Cases selected

- `cases/CDX-INS-004--agents-override.md`

## Deviations

- DSH's context-source row labels the effective same-scope override as `AGENTS.md`
  instead of `AGENTS.override.md`. Native injected text and behavior both prove that
  the override content won, so this is retained as a presentation/source-label issue.

## Evidence index

- `evidence/CDX-INS-004/base.md`
- `evidence/CDX-INS-004/override.md`
- `evidence/CDX-INS-004/base.png`
- `evidence/CDX-INS-004/override.png`
- `evidence/CDX-INS-004/review.md`
