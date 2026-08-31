# CDX-TXT-005 Sanitized Session Events

Only configuration identifiers and assistant block payloads from the two sanitized
fixture Sessions are retained here. System prompts and unrelated session data are
excluded.

## Primary High-effort turn

Source session: `session-597748e4-3b0f-4e9c-8866-4555938d1ade`

```json
{"provider":"relay-codex","model":"gpt-5.6-sol","reasoningEffort":"high"}
{"type":"block-start","index":0,"blockType":"reasoning"}
{"type":"block-end","index":0,"block":{"type":"reasoning","text":""}}
{"content":[{"type":"reasoning","text":""},{"type":"text","text":"CDX_REASON_FINAL_005_5017"}]}
```

## Complex confirmation High-effort turn

Source session: `session-ad50254c-a258-4fb2-8ed6-bccc5fcb649a`

```json
{"provider":"relay-codex","model":"gpt-5.6-sol","reasoningEffort":"high"}
{"type":"block-start","index":0,"blockType":"reasoning"}
{"type":"block-end","index":0,"block":{"type":"reasoning","text":""}}
{"type":"block-start","index":1,"blockType":"text"}
{"type":"block-end","index":1,"block":{"type":"text","text":"CDX_REASON_CONFIRM_005"}}
{"type":"finish","reason":{"kind":"stop"}}
{"content":[{"type":"reasoning","text":""},{"type":"text","text":"CDX_REASON_CONFIRM_005"}]}
```

These records prove the Web UI did not merely hide non-empty reasoning text: the
persisted reasoning blocks themselves were empty in both real turns.
