# Plugin Hook Install Evidence

- Marketplace helper returned `relay-validation-1173` before mutation.
- Canonical cachebuster changed plugin version from
  `0.1.0+codex.20260829052233` to `0.1.0+codex.20260829052923`.
- Reinstall returned the exact plugin id, marketplace, new version, isolated cache path,
  and `ON_INSTALL` policy; isolated listing showed installed/enabled.
- Installed cache contains both `hooks/hooks.json` and `hooks/pre-tool-use.mjs` with the
  expected contents.
- Installed plugin manifest SHA-256:
  `36398993cc0eea4a4887bd97022508ef6afb14130436a443c5f4ea4533303882`.
- Real user config stayed byte-identical at SHA-256
  `da9c10eebd4a2b06338d10272864114099c8c0bb1d0a780227a0d7d003e6f63b`.
