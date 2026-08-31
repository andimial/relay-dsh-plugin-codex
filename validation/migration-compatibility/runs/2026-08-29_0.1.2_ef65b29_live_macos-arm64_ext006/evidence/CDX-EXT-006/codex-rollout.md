# Codex Rollout Evidence

- Rollout:
  `/private/tmp/relay-cdx-ext006.zqpFm7/codex-home/sessions/2026/08/29/rollout-2026-08-29T12-35-49-01a04bcd-6f81-78f3-af32-08b49cac8a80.jsonl`
- Thread: `01a04bcd-6f81-78f3-af32-08b49cac8a80`
- Model: `gpt-5.6-sol`, reasoning effort `low`

Codex filtered `ALL_TOOLS` for the configured server/tool and required exactly one
match. It invoked that dynamic tool once with JSON
`{"token":"STDIO_INPUT_8426_XRQM"}`.

The native `mcp_tool_call_end` event records:

- server: `relay_global_8426`;
- tool: `global_echo_8426`;
- exact input token;
- `read_only_hint: true`;
- result `Ok` with text `STDIO_GLOBAL_OK_8426_XRQM`;
- structured content `{transport:"stdio", scope:"global", token:<exact>}`.

The assistant final and `task_complete.last_agent_message` both equal the exact returned
text. Task duration was 16.260 seconds.
