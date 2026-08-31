# CDX-CFG-003 Config and Cleanup

- Original isolated user-config SHA-256:
  `a88d20c9da8c21029a2aad164b5e078d970720a2c7b6228e86f925e93ed83361`.
- Configured collision SHA-256:
  `7c8e88ca938e4f35ebe763285360529f1cffa8b03cf7c03d2ca7afab6d4d049e`.
- Pinned `@openai/codex 0.149.0` CLI `mcp list` accepted the config and listed the
  user-layer `relay_project_7731` command.
- After both branches, the added table was removed with a targeted patch; the resulting
  digest exactly matches the original and `mcp list` no longer lists that user server.
- The isolated Host was restarted on the normal command and is listening at port 4392.
