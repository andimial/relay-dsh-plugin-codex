# Isolated Codex CLI Evidence

- Marketplace add returned `marketplaceName: relay-validation-1173`, the exact local
  fixture root, and `alreadyAdded: false`.
- Plugin add returned exact plugin id
  `relay-migration-fixture-1173@relay-validation-1173`, version `0.1.0`, and a cache
  path inside the isolated Codex home.
- Independent isolated `codex plugin list` showed:

  ```text
  relay-migration-fixture-1173@relay-validation-1173  installed, enabled  0.1.0  /Users/boboyang/work/Relay/integrations/codex/validation/migration-compatibility/fixtures/plugin-marketplace/plugins/relay-migration-fixture-1173
  ```

- `codex plugin marketplace list` mapped `relay-validation-1173` to the exact fixture
  root.
- The real user config SHA-256 remained
  `da9c10eebd4a2b06338d10272864114099c8c0bb1d0a780227a0d7d003e6f63b`.
