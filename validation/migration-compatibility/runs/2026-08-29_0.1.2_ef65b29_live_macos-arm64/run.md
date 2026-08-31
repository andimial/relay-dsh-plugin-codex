# Codex Validation Run 2026-08-29_0.1.2_ef65b29_live_macos-arm64

## Environment

- Started: 2026-08-29 Asia/Shanghai
- Finished: 2026-08-29 Asia/Shanghai after live-lane access was blocked
- Operator: Codex automated validation with browser-visible acceptance
- Plugin version: `0.1.2`
- Plugin commit: `ef65b29dd52c92278a2717f19d2a8f056cefdfaa`
- Repository state: validation specification files are untracked; product source is unchanged
- Codex package/App Server version: `@openai/codex 0.149.0`
- DSH version: `0.1.1-rc.2`
- DSH commit: `b150a551b8d465e31e418e1b2eaf5e79bbb7d28e`
- Node.js: `v25.5.0`
- OS/architecture: `Darwin 24.3.0 arm64`
- Browser: connected Chrome; exact build to be recorded by browser evidence when exposed
- Fixture: sanitized Relay Workspace; case-specific fixture digest not required for plain text

## Configuration

- DSH profile: isolated temporary `web` profile
- Codex configuration: current OS user's existing authentication; no configuration contents captured
- Project trust: sanitized Workspace selected through DSH
- Model/effort/sandbox/approval: selected defaults for this plain-text capability
- Network: required only for the signed-in Codex request

## Commands and actions

Execution is recorded sequentially in the case evidence and final result. Exact setup
commands and browser actions are retained without credentials.

## Cases selected

- `cases/CDX-TXT-001--plain-text-turn.md`

No later case may begin until this case has a result and process review.

## Deviations

- The official DSH `0.1.1-rc.2` reference checkout could not be started because its
  specified pnpm 11.7.0 runtime was unavailable through the restricted environment.
- An installed standalone DSH `0.1.0-rc.8` profile accepted the current local plugin,
  but loopback listening was denied before Web startup.
- Browser access to an already-running local DSH Web server was also denied.
- No live prompt was sent; the case was reviewed as blocked rather than failed.

## Evidence index

- `evidence/CDX-TXT-001/protocol.md`
- `evidence/CDX-TXT-001/live.md`
- `evidence/CDX-TXT-001/review.md`
- No screenshot was produced because browser access was blocked before navigation.
