# CDX-IMG-002 Sanitized Codex Rollout Evidence

Source Thread rollout:
`rollout-2026-08-29T10-35-49-01a04b5f-905f-7dc1-9cca-b935d880791d.jsonl`.

Only the matching business input records are retained:

```json
{"type":"response_item","payload":{"type":"message","role":"user","content":[{"type":"input_text","text":"Read the exact text in the attached image. Reply with that text only, preserving underscores and character case."}]}}
{"type":"event_msg","payload":{"type":"user_message","message":"Read the exact text in the attached image. Reply with that text only, preserving underscores and character case.","images":[],"local_images":[],"audio":[],"local_audio":[],"text_elements":[]}}
```

Actual Codex image inputs: `0`. The image was absent before model inference, so the
answer cannot be treated as an OCR-quality result.
