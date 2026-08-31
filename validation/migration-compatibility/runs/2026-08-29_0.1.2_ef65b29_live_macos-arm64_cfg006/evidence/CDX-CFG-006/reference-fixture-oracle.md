# CDX-CFG-006 Reference, Fixture, and Oracle

- Official Codex config reference (accessed 2026-08-29) defines
  `mcp_servers.<id>.env_vars` as additional environment variables whitelisted for a
  STDIO MCP server:
  `https://developers.openai.com/codex/config-file/config-reference`.
- Fixture server SHA-256:
  `e61f7c8547a06f49604c3172d66b055e7335b7e2c8353a551a004eda19a9ed1d`.
- It reads exactly `RELAY_CFG006_ENV_REF`, exposes no environment enumeration, and
  accepts only the sanitized expected marker.
- Direct JSON-RPC initialize/list/call with the one variable returned exact text and
  structured `source:env_vars`; direct log SHA-256
  `1a193db53de61fd9b35d2362bc576792d3838e24015e74925cb786791c8ac634`.
