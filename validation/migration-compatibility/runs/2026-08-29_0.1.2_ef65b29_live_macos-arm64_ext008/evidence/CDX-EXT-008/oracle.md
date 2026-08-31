# HTTP MCP Direct Oracle

- Server SHA-256 before and after:
  `6b1e44ac2e3cc0a1a9282a4125d5a384e38fed7742b617f424f5db03348f9f8b`.
- Endpoint: `http://127.0.0.1:4393/mcp`.
- Direct initialize returned protocol `2025-06-18`, server `relay-http-fixture`
  version `1.0.0`.
- Direct initialized notification returned HTTP `202`.
- Direct list returned exactly `http_echo_8842` with expected schema/read-only hint.
- Direct exact call returned text `HTTP_MCP_OK_8842_CWNS` and structured transport
  `streamable_http` plus exact token.
