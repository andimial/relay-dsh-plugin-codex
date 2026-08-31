# Codex Validation Run 2026-08-29_0.1.2_ef65b29_live_macos-arm64_cfg004

## Environment

- Started / finished: 2026-08-29 14:27–14:33 Asia/Shanghai
- Operator: Codex automated project-trust validation
- Plugin version / commit: `0.1.2` / `ef65b29dd52c92278a2717f19d2a8f056cefdfaa`
- Codex/App Server: `@openai/codex 0.149.0`; DSH `0.1.0-rc.8`
- Node.js/OS: `v25.5.0`, `Darwin 24.3.0 arm64`
- Isolated Host: `http://127.0.0.1:4392/`
- Model / policy: `GPT-5.6-Sol Low`, `Workspace Write`, `on-request`
- Workspace: `fixtures/untrusted-project-workspace`

## Cases selected

- `cases/CDX-CFG-004--project-trust-boundary.md`

## Deviations

- The dedicated Workspace registration remains in the temporary isolated DSH profile
  for later validation reuse; it is not product/user state and contains only sanitized
  fixture paths. User Codex config was fully restored.

## Evidence index

- `evidence/CDX-CFG-004/spec-fixture-oracle.md`
- `evidence/CDX-CFG-004/untrusted-branch.md`
- `evidence/CDX-CFG-004/trusted-branch.md`
- `evidence/CDX-CFG-004/config-log-cleanup.md`
- `evidence/CDX-CFG-004/sessions-and-ui.md`
- `evidence/CDX-CFG-004/untrusted.png`
- `evidence/CDX-CFG-004/trusted.png`
- `evidence/CDX-CFG-004/review.md`
