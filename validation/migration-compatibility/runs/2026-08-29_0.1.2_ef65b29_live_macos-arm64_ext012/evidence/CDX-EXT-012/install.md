# Plugin Refresh Evidence

- Marketplace-name helper returned `relay-validation-1173` before mutation.
- Canonical cachebuster changed only the version:
  `0.1.0` -> `0.1.0+codex.20260829051641`.
- Reinstall returned the exact plugin id, marketplace, new version, isolated cache path,
  and `ON_INSTALL` authentication policy.
- Independent isolated `codex plugin list` showed installed and enabled at the new
  version.
- A fresh DSH Thread created before restarting the already-running Host did not see the
  new Skill. This retained attempt demonstrates missing live plugin-component refresh;
  it does not test startup discovery.
- The isolated Host was then cleanly restarted with the same DSH and Codex homes. The
  authoritative fresh Thread was created only after restart.
- Real user config stayed byte-identical at SHA-256
  `da9c10eebd4a2b06338d10272864114099c8c0bb1d0a780227a0d7d003e6f63b`.
