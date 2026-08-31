# CDX-CFG-001 Fixture Evidence

- Server source:
  `fixtures/mcp-user-config/stdio-server.mjs`.
- SHA-256:
  `e541c87b16e8465aa8df96982f376dc8f00117c5fe86282768e34e3db118673a`.
- Server id: `relay_cfg001_1001`.
- Tool: `user_config_echo_1001`, read-only, exact required string `token`.
- Request: `USER_CONFIG_INPUT_1001`.
- Text result: `USER_CONFIG_OK_1001_RVKM`.
- Structured result: `{source:"user-config", token:"USER_CONFIG_INPUT_1001"}`.
- Direct STDIO oracle completed `initialize`, `tools/list`, and `tools/call` with the
  exact schema and both exact result forms before product execution.
