# CDX-CFG-001 Config and Cleanup Evidence

- Original isolated `config.toml` SHA-256:
  `a88d20c9da8c21029a2aad164b5e078d970720a2c7b6228e86f925e93ed83361`.
- Before authoritative baseline, the config contained no fixture server/tool/log id.
- Configured SHA-256:
  `4261babd0dbfc82be58b11efa6e5e2670dff17836e788a102d8960bf2e67cafd`.
- The added user table contained exact STDIO command/source, isolated log environment,
  ten-second startup/tool timeouts, `required=true`, and automatic read-only approval.
- Pinned Codex CLI parsed the config successfully before Host restart.
- After the authoritative turn, the entire table was removed. The config again has the
  exact original SHA-256, the Host restarted, and the normal App Server args are active.
- Real user Codex configuration was not modified.
