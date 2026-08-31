# Codex Validation Run 2026-08-29_0.1.2_ef65b29_live_macos-arm64_ses007

## Environment

- Started / finished: 2026-08-29 15:41–15:47 Asia/Shanghai
- Operator: Codex native-compaction continuity validation
- Plugin version / commit: `0.1.2` / `ef65b29dd52c92278a2717f19d2a8f056cefdfaa`
- Codex/App Server: `@openai/codex 0.149.0`; DSH `0.1.0-rc.8`
- Node.js/OS: `v25.5.0`, `Darwin 24.3.0 arm64`
- Source Thread: `01a04c60-8a1e-70d2-8c58-7a3febcef577`
- Pre-compaction imported Session: `codex-import-67c8c14a0c2edbb430665b44`

## Cases selected

- `cases/CDX-SES-007--long-context-compaction-continuation.md`

## Deviations

- The Relay Codex DSH command menu has no compact action. The run therefore uses the
  pinned App Server's supported `thread/compact/start` protocol with the DSH Host
  stopped, then resumes through DSH.
- An initial setup call confirmed request acceptance but closed the App Server after
  `504ms`, before any compaction event or rollout mutation. It is excluded. The reviewed
  retry waited for the native `contextCompaction` completion item.
- After out-of-band compaction, Host reconciliation replaced the internal imported DSH
  Session key with `codex-rebuild-*` archives. The original Codex Thread/rollout and
  user-visible four-turn history persisted, but DSH Session/archive identity did not.

## Evidence index

- `evidence/CDX-SES-007/protocol-output.json`
- `evidence/CDX-SES-007/observations.md`
- `evidence/CDX-SES-007/pre-compaction.png`
- `evidence/CDX-SES-007/post-compaction-recall.png`
- `evidence/CDX-SES-007/post-restart-persistence.png`
- `evidence/CDX-SES-007/review.md`
