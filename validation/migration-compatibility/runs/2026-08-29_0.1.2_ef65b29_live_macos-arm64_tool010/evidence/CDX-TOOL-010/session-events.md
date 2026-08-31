# CDX-TOOL-010 Sanitized DSH Session Events

Source DSH Session: `session-8d4451c6-2119-473b-bae4-dd6628baed88`.

```json
{"type":"assistant/message","content":["I’ll run the command exactly as provided and poll the same session if needed."],"source":{"kind":"model","provider":"relay-codex","model":"gpt-5.6-sol"},"interrupted":true}
{"type":"turn/end","reason":{"kind":"aborted","reason":{"kind":"user"}}}
```

No `LATE_COMMAND_FINISHED` was appended. The user-facing abort is real but did not
guarantee child-process termination.
