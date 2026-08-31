# CDX-EXT-008 — HTTP MCP

## Traceability

- Primary requirement: `CDX-EXT-008`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P1`

## Objective

Prove that Codex connects to a configured local Streamable HTTP MCP endpoint, discovers
its tool, executes one exact call, and delivers the result through the plugin to DSH.

## Preconditions

- `CDX-EXT-007` is closed.
- Sanitized HTTP server fixture has recorded digest and passes direct initialize/list/call
  requests at `http://127.0.0.1:4393/mcp`.
- Isolated user `config.toml` adds required URL server `relay_http_8842`; real user
  config remains untouched.
- Fresh Standard Session on isolated Host uses `GPT-5.6-Sol Low`, `Workspace Write`.

## Method

1. Start the fixture HTTP server and record direct protocol transcript/log.
2. Add and record isolated URL config plus before/after source and real-user-config
   digests.
3. Send exactly:

   ```text
   Call only the relay_http_8842 MCP tool http_echo_8842 with token HTTP_INPUT_8842_CWNS. Reply with the exact returned text only.
   ```

4. Require server log initialize/list/call, one native Codex MCP event with exact server,
   tool, input, text, and structured transport.
5. Require terminal/persisted `HTTP_MCP_OK_8842_CWNS`, normal DSH completion, and no
   fallback.
6. Verify fixture and real user config digests remain unchanged.

## Expected results

- HTTP transport initializes and lists tools successfully.
- Exact call returns intact text/structured content.
- Same exact text reaches and persists in the owning DSH Session.

## Result interpretation

- Pass only with direct, server-log, Codex-native, and DSH evidence.
- Fail for connection/protocol/auth errors, missing tool, corrupted result, fallback, or
  lost delivery.
- Blocked only when loopback networking cannot start independently of the plugin.

## Review focus

- A successful direct curl is not enough; require the Codex MCP call event.
