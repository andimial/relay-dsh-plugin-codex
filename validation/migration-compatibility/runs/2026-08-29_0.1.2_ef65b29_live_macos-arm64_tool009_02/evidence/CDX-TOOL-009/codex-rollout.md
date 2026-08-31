# CDX-TOOL-009 Sanitized Codex Rollout Evidence

Source Thread rollout:
`rollout-2026-08-29T11-41-35-01a04b9b-c5a0-76c3-8834-9359f9758b70.jsonl`.

```json
{"timestamp":"2026-08-29T03:41:45.813Z","tool":"exec_command","arguments":{"cmd":"printf 'STREAM_FIRST_4102\\n'; sleep 15; printf 'STREAM_LAST_8604\\n'","yield_time_ms":1000}}
{"timestamp":"2026-08-29T03:41:47.071Z","result":{"session_id":88699,"output":"STREAM_FIRST_4102\n"}}
{"tool":"write_stdin","arguments":{"session_id":88699,"chars":"","yield_time_ms":30000}}
{"timestamp":"2026-08-29T03:42:00.969Z","result":{"exit_code":0,"output":"STREAM_LAST_8604\n"}}
{"timestamp":"2026-08-29T03:42:06.173Z","assistant":"STREAM_DONE"}
```

Backend semantics were correct: one process, split output in order, and exit 0.
