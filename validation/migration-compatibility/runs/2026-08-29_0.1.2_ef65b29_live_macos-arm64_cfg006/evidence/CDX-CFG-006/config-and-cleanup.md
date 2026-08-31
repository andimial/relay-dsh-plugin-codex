# CDX-CFG-006 Config and Cleanup

- Product log had 10 execution records, including exact value at process start and one
  exact tool call; cleanup added only two close records.
- Final 12-record product-log SHA-256:
  `4973005fd73066f48d672938e4c03bf21c09a564f93666277e401694daf5eb75`.
- The temporary MCP table was removed and user config returned to original SHA-256
  `a88d20c9da8c21029a2aad164b5e078d970720a2c7b6228e86f925e93ed83361`.
- Pinned `mcp list` no longer includes the server.
- The normal isolated Host was restarted without `RELAY_CFG006_ENV_REF` in its launch
  command and is listening on port 4392.
