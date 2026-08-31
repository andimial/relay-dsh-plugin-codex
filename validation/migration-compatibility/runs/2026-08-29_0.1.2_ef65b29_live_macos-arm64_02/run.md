# Codex Validation Run 2026-08-29_0.1.2_ef65b29_live_macos-arm64_02

## Environment

- Started: 2026-08-29 Asia/Shanghai
- Operator: Codex automated validation with browser-visible acceptance
- Plugin version: `0.1.2`
- Plugin commit: `ef65b29dd52c92278a2717f19d2a8f056cefdfaa`
- Codex package/App Server version: `@openai/codex 0.149.0`
- DSH version: `0.1.0-rc.8`
- Node.js: `v25.5.0`
- OS/architecture: `Darwin 24.3.0 arm64`
- Browser: Chrome through the connected browser extension
- Fixture: `fixtures/plain-text-workspace/`
- Finished: 2026-08-29 Asia/Shanghai after reviewed live completion

## Configuration

- DSH home: isolated temporary profile `/private/tmp/relay-cdx-validation-20260829-txt001`
- DSH Web URL: `http://127.0.0.1:4391/`
- Plugin source: current local Codex integration installed in the isolated profile
- Plugin resolution proof: the profile dependency is
  `link:/Users/boboyang/work/Relay/integrations/codex`, and its resolved package
  path is the same directory
- Codex authentication: current OS user's existing authentication; no secrets captured
- DSH mode: `Codex`, selected visibly before the first message
- Access mode: DSH displayed `Workspace Write`
- Selected model/effort: DSH displayed `GPT-5.6-Sol` / `Low`

## Cases selected

- `cases/CDX-TXT-001--plain-text-turn.md`

No later case starts until this case has a result and a process review.

## Evidence index

- `evidence/CDX-TXT-001/protocol.md`
- `evidence/CDX-TXT-001/live.md`
- `evidence/CDX-TXT-001/review.md`
- `evidence/CDX-TXT-001/completed-clean.png`

## Deviations

- The validation used the installed official DSH CLI `0.1.0-rc.8`, which is inside
  the plugin's declared supported peer range, rather than the newer immutable
  reference checkout. The exact version is part of the result scope.
- The first screenshot was captured while a non-sent composer usability probe was
  present. The probe was then cleared and the clean terminal state was captured as
  `completed-clean.png`; only the clean screenshot is acceptance evidence.
