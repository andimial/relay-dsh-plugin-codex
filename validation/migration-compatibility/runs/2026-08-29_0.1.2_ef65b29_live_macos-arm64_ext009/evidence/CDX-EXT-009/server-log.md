# MCP Result Server Log

Runtime log: `/private/tmp/relay-cdx-ext009-20260829-results-log.jsonl`.

For each fresh branch, two Host consumers started/initialized/listed from the exact
sibling control Workspace. Exactly one business tool call occurred per branch:

- `result_text_9914` / `TEXT_REQ_9914`;
- `result_json_9914` / `JSON_REQ_9914`;
- `result_image_9914` / `IMAGE_REQ_9914`.

Every process recorded source image digest
`71e3ef8768ea6f1c04541bba803dff365ef41c8234c589958045eebd2f4e9d5d`.
No extra business result call occurred; failed outer filter attempts never reached the
MCP server.
