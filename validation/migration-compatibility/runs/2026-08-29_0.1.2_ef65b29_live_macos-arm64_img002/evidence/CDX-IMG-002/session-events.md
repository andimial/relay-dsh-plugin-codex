# CDX-IMG-002 Sanitized DSH Session Events

Source DSH Session: `session-70ec7ea9-ac8e-4a33-bb83-3a7d3d655c2b`.

```json
{"type":"user/message","content":[{"type":"image","attachment":{"attachmentId":"sha256:91c980cd2c508d6703811e307a6328ae4abc76195cdeefb2ae1f942fe7132768","mediaType":"image/png","width":1200,"height":400,"bytes":32062,"name":"clipboard.png"}},{"type":"text","text":"Read the exact text in the attached image. Reply with that text only, preserving underscores and character case."}],"sourceKind":"user"}
{"type":"assistant/message","text":"Please attach the image.","source":{"kind":"model","provider":"relay-codex","model":"gpt-5.6-sol","replayState":{"threadId":"01a04b5f-905f-7dc1-9cca-b935d880791d","turnId":"01a04b5f-911c-70b3-b8b4-12553b913798"}}}
{"type":"turn/end","reason":{"kind":"completed"}}
```

The attachment ID equals the fixture SHA-256, proving the intended image bytes
reached and persisted in DSH before the Codex handoff.
