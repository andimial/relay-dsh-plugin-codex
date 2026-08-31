# Global STDIO MCP Direct Oracle

- Server SHA-256 before and after:
  `6f9ce35fe4e6bceebcb4aab38ea70ab94e7653a8e6bd44c4739e2f0f4667d181`
- Direct initialize returned protocol `2024-11-05`, capabilities `tools`, server name
  `relay-global-stdio-fixture`, version `1.0.0`.
- Direct `tools/list` returned exactly `global_echo_8426` with the expected JSON schema
  and read-only annotation.
- Direct `tools/call` with `STDIO_INPUT_8426_XRQM` returned text
  `STDIO_GLOBAL_OK_8426_XRQM` plus structured fields `transport: stdio`,
  `scope: global`, and the exact token.
- All direct JSON-RPC ids and responses matched; the process exited normally after
  stdin closed.
