# Codex Validation Run 2026-08-29_0.1.2_ef65b29_live_macos-arm64_perm002

## Environment

- Started / finished: 2026-08-29 15:05 Asia/Shanghai
- Operator: Codex automated outside-Workspace policy validation
- Plugin version / commit: `0.1.2` / `ef65b29dd52c92278a2717f19d2a8f056cefdfaa`
- Codex/App Server: `@openai/codex 0.149.0`; DSH `0.1.0-rc.8`
- Node.js/OS: `v25.5.0`, `Darwin 24.3.0 arm64`
- Isolated Host: `http://127.0.0.1:4392/`
- Model / policy: `GPT-5.6-Sol Low`, `Workspace Write`, `on-request`
- cwd: `fixtures/plain-text-workspace`

## Cases selected

- `cases/CDX-PERM-002--outside-workspace.md`

## Deviations

- Codex attempted to request approval, but DSH returned `approval request failed`
  without surfacing an interactive approval control. The enforced-denial acceptance
  branch is conclusive; the approval-success branch is unsupported in this build.

## Evidence index

- `evidence/CDX-PERM-002/observations.md`
- `evidence/CDX-PERM-002/denied.png`
- `evidence/CDX-PERM-002/review.md`
