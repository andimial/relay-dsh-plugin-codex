# Codex Validation Run 2026-08-29_0.1.2_ef65b29_live_macos-arm64_tool009

## Environment

- Started: 2026-08-29 Asia/Shanghai
- Operator: Codex automated validation with timed browser-visible acceptance
- Plugin version/commit: `0.1.2` / `ef65b29dd52c92278a2717f19d2a8f056cefdfaa`
- Codex package/App Server version: `@openai/codex 0.149.0`
- DSH version: `0.1.0-rc.8`
- Node.js/OS: `v25.5.0`, `Darwin 24.3.0 arm64`
- Browser: Chrome through connected extension

## Cases selected

- `cases/CDX-TOOL-009--long-shell-streaming.md`

## Deviation

- Executed the initial eight-second command. The `interim.png` sample preceded the
  first structured yield, while the provisionally named
  `interim-after-first-yield.png` was captured after completion. Neither proves the
  required moment, so this run is invalid for product interpretation and not counted as
  pass/fail. A longer synchronized retry is required.

## Evidence index

- `evidence/CDX-TOOL-009/interim.png`
- `evidence/CDX-TOOL-009/interim-after-first-yield.png` (captured after completion)
- `evidence/CDX-TOOL-009/completed.png`
- `evidence/CDX-TOOL-009/interim-observation.md`
- `evidence/CDX-TOOL-009/codex-rollout.md`
- `evidence/CDX-TOOL-009/session-events.md`
- `evidence/CDX-TOOL-009/live.md`
- `evidence/CDX-TOOL-009/review.md`
