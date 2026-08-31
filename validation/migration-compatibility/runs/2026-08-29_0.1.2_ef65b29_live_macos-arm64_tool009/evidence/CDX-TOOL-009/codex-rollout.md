# CDX-TOOL-009 Sanitized Codex Rollout Evidence (Invalid Capture)

Source Thread rollout:
`rollout-2026-08-29T11-38-57-01a04b99-5c74-79c1-988d-66738ece0d56.jsonl`.

```json
{"tool":"exec_command","arguments":{"cmd":"printf 'STREAM_FIRST_4102\\n'; sleep 8; printf 'STREAM_LAST_8604\\n'","yield_time_ms":1000}}
{"result":{"session_id":76114,"output":"STREAM_FIRST_4102\n"}}
{"tool":"write_stdin","arguments":{"session_id":76114,"chars":"","yield_time_ms":10000}}
{"result":{"exit_code":0,"output":"STREAM_LAST_8604\n"}}
{"assistant":"STREAM_DONE"}
```

The backend streamed correctly, but this alone is explicitly insufficient for the
user-visible requirement.
