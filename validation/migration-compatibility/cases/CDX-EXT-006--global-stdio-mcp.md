# CDX-EXT-006 — Global STDIO MCP

## Traceability

- Primary requirement: `CDX-EXT-006`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that a user-global Codex `config.toml` STDIO MCP server starts in an isolated
Codex home, advertises its tool, handles an exact call, and returns the result through
the Codex plugin to the owning DSH Session.

## Preconditions

- `CDX-EXT-005` is closed.
- Sanitized server `fixtures/mcp-stdio-global/stdio-server.mjs` has a recorded digest
  and passes a direct protocol oracle.
- A separate DSH home/port and isolated `CODEX_HOME` are used; real
  `/Users/boboyang/.codex/config.toml` is not modified.
- Isolated `config.toml` defines `[mcp_servers.relay_global_8426]` as a required STDIO
  server and captures a private-temp server log.
- Fresh Standard Session uses `GPT-5.6-Sol Low`, `Workspace Write`.

## Method

1. Record server digest and direct initialize/list/call oracle.
2. Record isolated config digest, real user-config digest before execution, and exact
   host environment/port.
3. Start the isolated DSH Host and create a fresh fixture-Workspace Session.
4. Send exactly:

   ```text
   Call only the relay_global_8426 MCP tool global_echo_8426 with token STDIO_INPUT_8426_XRQM. Reply with the exact returned text only.
   ```

5. Require the Codex rollout to advertise and call the exact MCP tool once with exact
   JSON argument; require server log start/initialize/list/call and matching token.
6. Require returned content `STDIO_GLOBAL_OK_8426_XRQM`, exact terminal/persisted DSH
   result, and normal completion.
7. Verify fixture/config digests and real user-config digest remain unchanged.

## Expected results

- Codex starts and discovers the global STDIO MCP from isolated user config.
- One exact tool call round-trips text and structured result without corruption.
- Owning DSH Session receives the exact text and remains usable.

## Result interpretation

- Pass only with config, server-process log, Codex tool trace, and DSH delivery evidence.
- Fail for missing tool, startup/protocol error, wrong input/output, fallback, or lost
  result.
- Blocked only when isolated Host/auth infrastructure cannot start independently of MCP.

## Review focus

- Built-in/plugin tools are not substitutes; prove provenance from the configured
  fixture server and prove the real user config was untouched.
