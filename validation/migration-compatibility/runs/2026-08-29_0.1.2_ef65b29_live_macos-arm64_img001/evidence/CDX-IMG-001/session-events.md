# CDX-IMG-001 Sanitized DSH Session Events

Source DSH Session: `session-bbbf7827-293f-43ad-b8cb-7c0b930fc853`.

```json
{"type":"user/message","content":[{"type":"image","attachment":{"attachmentId":"sha256:71e3ef8768ea6f1c04541bba803dff365ef41c8234c589958045eebd2f4e9d5d","mediaType":"image/png","width":800,"height":500,"bytes":25052,"name":"clipboard.png"}},{"type":"text","text":"Count only the red circles and blue triangles in the attached image. Reply exactly as RED_CIRCLES=n;BLUE_TRIANGLES=n with digits substituted, and nothing else."}]}
{"type":"assistant/message","text":"RED_CIRCLES=0;BLUE_TRIANGLES=0","source":{"provider":"relay-codex","model":"gpt-5.6-sol","replayState":{"threadId":"01a04b59-a29e-7fa0-8a1c-dabe40156a0c","turnId":"01a04b59-a381-71f3-9b6b-f0de603b7f02"}}}
{"type":"turn/end","reason":{"kind":"completed"}}
```

The attachment ID exactly equals the source PNG SHA-256, proving the intended image
bytes reached and persisted in DSH before the Codex handoff.
