# Codex Validation Run 2026-08-29_0.1.2_ef65b29_live_macos-arm64_cfg003

## Environment

- Started / finished: 2026-08-29 14:18–14:26 Asia/Shanghai
- Operator: Codex automated config-precedence validation
- Plugin version / commit: `0.1.2` / `ef65b29dd52c92278a2717f19d2a8f056cefdfaa`
- Codex/App Server: `@openai/codex 0.149.0`; DSH `0.1.0-rc.8`
- Node.js/OS: `v25.5.0`, `Darwin 24.3.0 arm64`
- Isolated Host: `http://127.0.0.1:4392/`
- Model / policy: `GPT-5.6-Sol Low`, `Workspace Write`, `on-request`
- User-only control Workspace: `fixtures/project-scope-control-workspace`
- Project-override Workspace: `fixtures/plain-text-workspace`

## Cases selected

- `cases/CDX-CFG-003--config-precedence.md`

## Deviations

- One blank control-Workspace Session was created while navigating between Workspace
  groups. It started no Codex Thread or MCP tool call and is excluded from both branches.

## Evidence index

- `evidence/CDX-CFG-003/spec-and-fixtures.md`
- `evidence/CDX-CFG-003/user-branch.md`
- `evidence/CDX-CFG-003/project-branch.md`
- `evidence/CDX-CFG-003/server-logs.md`
- `evidence/CDX-CFG-003/config-and-cleanup.md`
- `evidence/CDX-CFG-003/sessions-and-ui.md`
- `evidence/CDX-CFG-003/user-wins.png`
- `evidence/CDX-CFG-003/project-wins.png`
- `evidence/CDX-CFG-003/review.md`
