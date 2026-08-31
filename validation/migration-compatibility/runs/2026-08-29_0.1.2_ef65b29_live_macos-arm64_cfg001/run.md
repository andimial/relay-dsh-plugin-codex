# Codex Validation Run 2026-08-29_0.1.2_ef65b29_live_macos-arm64_cfg001

## Environment

- Started / finished: 2026-08-29 13:54–14:10 Asia/Shanghai
- Operator: Codex automated user-config validation
- Plugin version / commit: `0.1.2` / `ef65b29dd52c92278a2717f19d2a8f056cefdfaa`
- Codex/App Server: `@openai/codex 0.149.0`; DSH `0.1.0-rc.8`
- Node.js/OS: `v25.5.0`, `Darwin 24.3.0 arm64`
- Isolated Host: `http://127.0.0.1:4392/`
- Model / policy: `GPT-5.6-Sol Low`, `Workspace Write`, `on-request`
- Workspace: `fixtures/plain-text-workspace`

## Cases selected

- `cases/CDX-CFG-001--user-config.md`

## Deviations

- Three documented settings were first tested but excluded because Host/turn-owned
  configuration overrode them: network access stayed false, personality stayed
  friendly, and native `view_image` stayed present. Their rollout ids are retained in
  `evidence/CDX-CFG-001/excluded-candidates.md` for `CDX-CFG-005` analysis.
- The first configured MCP prompt supplied only the bare tool name, made no tool call,
  and is excluded. The authoritative retry supplied both server and tool ids.

## Evidence index

- `evidence/CDX-CFG-001/spec.md`
- `evidence/CDX-CFG-001/fixture.md`
- `evidence/CDX-CFG-001/excluded-candidates.md`
- `evidence/CDX-CFG-001/config-and-cleanup.md`
- `evidence/CDX-CFG-001/baseline.md`
- `evidence/CDX-CFG-001/configured-rollout.md`
- `evidence/CDX-CFG-001/server-log.md`
- `evidence/CDX-CFG-001/sessions.md`
- `evidence/CDX-CFG-001/mcp-baseline.png`
- `evidence/CDX-CFG-001/mcp-configured.png`
- `evidence/CDX-CFG-001/live.md`
- `evidence/CDX-CFG-001/review.md`
