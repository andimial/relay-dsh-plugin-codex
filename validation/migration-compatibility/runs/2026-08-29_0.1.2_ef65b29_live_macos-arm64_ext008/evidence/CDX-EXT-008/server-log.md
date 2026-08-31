# HTTP MCP Server Log

Runtime log: `/private/tmp/relay-cdx-ext008-20260829-http-log.jsonl`.

- One listener started on `127.0.0.1:4393`.
- Direct oracle used `accept: application/json, text/event-stream`, ids `1/2/3`, and
  produced the first exact tool call.
- Codex performed unauthenticated metadata probes (`GET /mcp` and OAuth/OpenID
  well-known paths); the fixture returned non-success discovery responses and Codex
  correctly continued without authentication.
- Business Host consumers used `accept: text/event-stream, application/json`, each
  initialized/listed; exactly one business `tools/call`, id `2`, carried exact tool name
  and token.

The direct and product calls are separated by timestamps and request ids. Only the
later call is counted as plugin execution evidence.
