# CDX-TXT-006 Sanitized Session Events

Source DSH Session: `session-2e853a31-3e9c-4d45-a58b-ff8b5e1bb2bd`.

Only terminal assistant text and replay-state identifiers are retained:

```json
{"turn":1,"text":"ACK_CDX_006","replayState":{"threadId":"01a04b4b-1200-7e50-91f4-ca0d31888015","turnId":"01a04b4b-128f-7b41-a870-1b82ea42e004"}}
{"turn":2,"text":"CDX_MEMORY_A_006_7C91","replayState":{"threadId":"01a04b4b-1200-7e50-91f4-ca0d31888015","turnId":"01a04b4b-5d1a-7b80-ac9b-61fb506b650a"}}
```

Observed invariants:

- Thread IDs equal: `true`.
- Turn IDs differ: `true`.
- Turn order: `1`, `2`.
