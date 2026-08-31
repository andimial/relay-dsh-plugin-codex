# Codex Validation Run 2026-08-29_0.1.2_ef65b29_live_macos-arm64_txt002

## Environment

- Started: 2026-08-29 Asia/Shanghai
- Operator: Codex automated validation with browser-visible acceptance
- Plugin version/commit: `0.1.2` / `ef65b29dd52c92278a2717f19d2a8f056cefdfaa`
- Codex package/App Server version: `@openai/codex 0.149.0`
- DSH version: `0.1.0-rc.8`
- Node.js: `v25.5.0`
- OS/architecture: `Darwin 24.3.0 arm64`
- Browser: Chrome through the connected browser extension
- Fixture: `fixtures/plain-text-workspace/`
- Finished: 2026-08-29 Asia/Shanghai after reviewed live completion

## Configuration

- Reused the running isolated DSH home
  `/private/tmp/relay-cdx-validation-20260829-txt001`; no user DSH profile was used.
- The profile links the current local Codex plugin source directly.
- A new DSH Session is required for this case.
- Codex authentication is inherited from the current OS user; no secrets are captured.

## Cases selected

- `cases/CDX-TXT-002--chinese-unicode-round-trip.md`

## Evidence index

- `evidence/CDX-TXT-002/live.md`
- `evidence/CDX-TXT-002/review.md`
- `evidence/CDX-TXT-002/completed.png`

## Deviations

- No focused mixed-Unicode protocol test exists in the current repository. The case
  therefore uses live App Server plus DSH Web evidence only, as declared by its
  `L`/`W` verification levels; no unrelated protocol pass is cited.
