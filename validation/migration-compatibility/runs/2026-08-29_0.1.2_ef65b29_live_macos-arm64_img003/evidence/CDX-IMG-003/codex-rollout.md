# CDX-IMG-003 Sanitized Codex Rollout Evidence

Source Thread rollout:
`rollout-2026-08-29T10-42-59-01a04b66-2074-7cc0-a69c-1db6c436245a.jsonl`.

Only the matching business input records are retained:

```json
{"type":"response_item","payload":{"type":"message","role":"user","content":[{"type":"input_text","text":"Each attached image contains one uppercase marker. Reply with the markers in attachment order, separated by >, and nothing else."}]}}
{"type":"event_msg","payload":{"type":"user_message","message":"Each attached image contains one uppercase marker. Reply with the markers in attachment order, separated by >, and nothing else.","images":[],"local_images":[],"audio":[],"local_audio":[],"text_elements":[]}}
```

Actual Codex image inputs: `0`; therefore neither multi-image transport nor ordering
reached the model.
