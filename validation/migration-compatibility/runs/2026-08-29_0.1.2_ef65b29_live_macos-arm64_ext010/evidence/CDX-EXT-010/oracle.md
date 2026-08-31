# MCP Failure And Timeout Oracle

- Fixture SHA-256: `087b35ce06522b90d5ab2e8ebb9a54cbfcbee9773f3410e1efc570430ee09309`.
- Direct JSON-RPC oracle initialized the fixture, listed exactly two tools, observed
  `fail_1058` as `isError: true` with `MCP_FAIL_1058_NQDX`, and observed the delayed
  `timeout_1058` response after 5.002 seconds.
- Isolated Codex config SHA-256:
  `1de614dd21160624d7812de34d54fc5fbcf144203167c5f0593771f9390cba35`.
- The active stanza set `tool_timeout_sec = 2`, `required = true`, and automatic tool
  approval for `relay_failure_1058`.
- Real user config stayed untouched at SHA-256
  `da9c10eebd4a2b06338d10272864114099c8c0bb1d0a780227a0d7d003e6f63b`.

The direct oracle separates fixture correctness from plugin/runtime behavior: the
server really can return one deterministic MCP error and one deterministic late
success.
