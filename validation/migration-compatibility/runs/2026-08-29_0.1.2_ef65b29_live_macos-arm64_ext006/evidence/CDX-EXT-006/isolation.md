# Isolated Host And Config Evidence

- DSH home: `/private/tmp/relay-cdx-ext006.zqpFm7/dsh-home`
- Codex home: `/private/tmp/relay-cdx-ext006.zqpFm7/codex-home`
- Host: `http://127.0.0.1:4392/`
- Workspace:
  `/Users/boboyang/work/Relay/integrations/codex/validation/migration-compatibility/fixtures/plain-text-workspace`
- Authentication was referenced by a local symlink; no credential content was copied
  into evidence.
- `codex-cli 0.149.0 mcp list` reported `relay_global_8426`, command `/usr/bin/env`,
  expected script argument, status `enabled`.
- Initial isolated config SHA-256:
  `26c491ea22db55766ab6e7b1ce1b38ab4fe8aee873e8d1f02c1aa8115392e894`.
- First Host use appended only the normal project trust table, producing post-run
  isolated config SHA-256
  `89a3ec6e39287a7b7853c57020c0495c5a10bbdd1b84fe219d99970cdcaa4328`.
- Real user config SHA-256 before and after:
  `da9c10eebd4a2b06338d10272864114099c8c0bb1d0a780227a0d7d003e6f63b`.
- Initial copied profile link was invalid in the new temp hierarchy and caused a
  pre-session Host startup failure. Replacing that temp-only link with the exact current
  plugin source path resolved setup; no MCP process or model turn had started yet.
