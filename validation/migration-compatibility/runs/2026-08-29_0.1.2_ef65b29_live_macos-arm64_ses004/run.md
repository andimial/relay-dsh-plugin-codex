# Codex Validation Run 2026-08-29_0.1.2_ef65b29_live_macos-arm64_ses004

## Environment

- Started / finished: 2026-08-29 15:30–15:32 Asia/Shanghai
- Operator: Codex automated Workspace discovery validation
- Plugin version / commit: `0.1.2` / `ef65b29dd52c92278a2717f19d2a8f056cefdfaa`
- Codex/App Server: `@openai/codex 0.149.0`; DSH `0.1.0-rc.8`
- Node.js/OS: `v25.5.0`, `Darwin 24.3.0 arm64`
- Isolated Host: `http://127.0.0.1:4392/`
- Compared Workspaces: `plain-text-workspace`, `迁移 空格 workspace`

## Cases selected

- `cases/CDX-SES-004--workspace-thread-discovery.md`

## Deviations

- Discovery counts match native metadata, but the product exposes no candidate list or
  IDs—only summary counts and a bulk `全部导入` action. This is the tested failure.

## Evidence index

- `evidence/CDX-SES-004/observations.md`
- `evidence/CDX-SES-004/plain-discovery.png`
- `evidence/CDX-SES-004/unicode-discovery.png`
- `evidence/CDX-SES-004/review.md`
