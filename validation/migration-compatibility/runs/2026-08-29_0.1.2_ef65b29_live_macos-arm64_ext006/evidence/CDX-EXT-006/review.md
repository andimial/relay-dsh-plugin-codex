# CDX-EXT-006 Validation Review

## Reasonableness

- A purpose-built dependency-free server removes registry/network variability and logs
  protocol events independently of the client rollout.
- Four evidence layers agree: direct oracle, isolated config/list, server process log,
  and Codex native `mcp_tool_call_end` plus DSH persistence.
- Exact unique input/output values and structured fields prevent confusion with another
  installed MCP tool.

## Reliability

- The business rollout records exactly one MCP call and the server log records exactly
  one `tools/call` with the matching token.
- Two starts/init/list cycles are attributable to separate Host consumers; no duplicate
  business call occurred. This startup multiplicity may matter for stateful servers but
  does not undermine this stateless capability result.
- The isolated config changed once because Codex appended the fixture project's normal
  trust table. The MCP table remained intact, the post hash stabilized, and the real
  user config stayed unchanged. Therefore the original “isolated config unchanged”
  expectation is not met literally, but isolation and MCP provenance remain reliable.
- The failed first Host launch was a temp-profile symlink setup error before any Session,
  MCP startup, or model turn; it is excluded and documented.

## Verdict

**Pass, high confidence.** Global STDIO MCP execution and delivery work through the
current Codex plugin in an isolated user configuration.
