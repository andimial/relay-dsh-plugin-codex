# Codex Validation Run 2026-08-29_0.1.2_ef65b29_live_macos-arm64_ext016

## Environment

- Started / finished: 2026-08-29 13:45–13:53 Asia/Shanghai
- Operator: Codex automated dynamic DSH-tool refresh validation
- Plugin version / commit: `0.1.2` / `ef65b29dd52c92278a2717f19d2a8f056cefdfaa`
- Codex/App Server: `@openai/codex 0.149.0`; DSH `0.1.0-rc.8`
- Node.js/OS: `v25.5.0`, `Darwin 24.3.0 arm64`
- Isolated Host: `http://127.0.0.1:4392/`
- Model / policy: `GPT-5.6-Sol Low`, `Workspace Write`, `on-request`
- Workspace: `fixtures/plain-text-workspace`

## Cases selected

- `cases/CDX-EXT-016--dynamic-dsh-tool-refresh.md`

## Deviations

- The existing-Session later turn made two catalog-inspection unified calls after the
  expected tool was absent. This is retained as product failure evidence and is not
  counted as a valid one-call execution.
- A separate fresh Session was added as an environment control after that failure.

## Evidence index

- `evidence/CDX-EXT-016/fixture.md`
- `evidence/CDX-EXT-016/install-cleanup.md`
- `evidence/CDX-EXT-016/rollouts.md`
- `evidence/CDX-EXT-016/sessions.md`
- `evidence/CDX-EXT-016/existing-session.png`
- `evidence/CDX-EXT-016/new-session-control.png`
- `evidence/CDX-EXT-016/live.md`
- `evidence/CDX-EXT-016/review.md`
