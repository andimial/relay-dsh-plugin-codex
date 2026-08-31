# HTTP MCP Isolated Config

- Isolated config:
  `/private/tmp/relay-cdx-ext006.zqpFm7/codex-home/config.toml`
- Added `[mcp_servers.relay_http_8842]` with exact loopback URL, required true,
  ten-second startup/tool timeouts, and automatic approval.
- `codex-cli 0.149.0 mcp list` reported URL `http://127.0.0.1:4393/mcp`, status
  `enabled`, auth `Unsupported` (no auth required by fixture).
- Isolated config SHA-256 before and after business turn:
  `faabf396a873f0864e265e7ab3e3a047cb5a9e76f682b1e897505020dee74b8d`.
- Real user config SHA-256 before and after:
  `da9c10eebd4a2b06338d10272864114099c8c0bb1d0a780227a0d7d003e6f63b`.
