# Plugin MCP Install Evidence

- Marketplace-name helper returned `relay-validation-1173` before update.
- Canonical cachebuster changed version from
  `0.1.0+codex.20260829051641` to `0.1.0+codex.20260829052233`.
- Complete plugin validation passed before and after refresh.
- Reinstall returned exact plugin id, marketplace, new version, `ON_INSTALL` policy,
  and isolated versioned cache path.
- Independent isolated list showed installed and enabled at the exact new version.
- Host was cleanly restarted before the product call, following the refresh limitation
  established by `CDX-EXT-012`.
- Real user config stayed byte-identical at SHA-256
  `da9c10eebd4a2b06338d10272864114099c8c0bb1d0a780227a0d7d003e6f63b`.
