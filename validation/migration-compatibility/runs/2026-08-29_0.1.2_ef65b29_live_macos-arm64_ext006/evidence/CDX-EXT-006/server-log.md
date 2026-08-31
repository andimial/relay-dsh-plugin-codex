# Global STDIO MCP Server Log

Runtime log:
`/private/tmp/relay-cdx-ext006.zqpFm7/global-mcp-log.jsonl`

Observed events, in order:

- process start pid `36410`, exact fixture Workspace cwd;
- process start pid `36411`, exact fixture Workspace cwd;
- two `initialize` requests, id `0`;
- two `notifications/initialized` notifications;
- two `tools/list` requests, id `1`;
- one `tools/call`, id `2`;
- one exact tool-call record: name `global_echo_8426`, token
  `STDIO_INPUT_8426_XRQM`.

Two server processes initialized because the Host created separate Codex consumers
during Session/title and business-turn setup. Only one business tool call occurred.
Duplicate initialization is retained as lifecycle evidence, not counted as duplicate
user action.
