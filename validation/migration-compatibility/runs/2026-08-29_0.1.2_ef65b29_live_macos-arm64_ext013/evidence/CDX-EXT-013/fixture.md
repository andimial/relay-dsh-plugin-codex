# Plugin MCP Fixture Evidence

- Plugin manifest references companion `./.mcp.json`.
- Companion server id: `relay_plugin_1313`; command runs
  `./scripts/mcp-server.mjs` from plugin cwd with 10-second startup/tool limits.
- Tool: `plugin_echo_1313`, one required string `token`, no additional properties,
  read-only annotation.
- Exact valid token/result: `PLUGIN_MCP_REQ_1313` ->
  `PLUGIN_MCP_OK_1313_ZKPW`, plus structured source/token/marker fields.
- Server SHA-256:
  `be05ddb60a0ff288e3e3c930d63f5dbf3aefbd489dcc538eed8fea9fdf381cc1`.
- `.mcp.json` SHA-256:
  `41e0610c20d4c1c8bf298798778763d50fa845b790decc9221b35de1a77a5923`.
- Updated plugin manifest SHA-256:
  `da11d367a5258257bfc5ffc0c96b054ab7d66ef9d7f3bbf92b51b388b9629789`.
