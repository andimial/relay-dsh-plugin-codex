# Codex Validation Run 2026-08-29_0.1.2_ef65b29_live_macos-arm64_cfg005

## Environment

- Started / finished: 2026-08-29 14:34–14:38 Asia/Shanghai
- Operator: Codex automated DSH-setting precedence validation
- Plugin version / commit: `0.1.2` / `ef65b29dd52c92278a2717f19d2a8f056cefdfaa`
- Codex/App Server: `@openai/codex 0.149.0`; DSH `0.1.0-rc.8`
- Node.js/OS: `v25.5.0`, `Darwin 24.3.0 arm64`
- Isolated Host: `http://127.0.0.1:4392/`
- Workspace: `fixtures/project-scope-control-workspace`

## Cases selected

- `cases/CDX-CFG-005--dsh-owned-setting-collision.md`

## Deviations

- Pinned Codex reports `--strict-config` unsupported for the `mcp` subcommand, so the
  ordinary pinned CLI parser was used and succeeded. The case wording was corrected
  before product execution.
- DSH displayed one progress sentence before the exact final marker. It does not affect
  the four effective setting observables.

## Evidence index

- `evidence/CDX-CFG-005/config-and-effective-context.md`
- `evidence/CDX-CFG-005/write-and-delivery.md`
- `evidence/CDX-CFG-005/cleanup.md`
- `evidence/CDX-CFG-005/settings-win.png`
- `evidence/CDX-CFG-005/review.md`
