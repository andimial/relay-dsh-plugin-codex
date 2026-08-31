# CDX-IMG-003 Sanitized DSH Session Events

Source DSH Session: `session-7efa2a5c-d3e4-48e3-86e0-2b83bebbb140`.

```json
{"type":"user/message","content":[{"type":"image","attachment":{"attachmentId":"sha256:4516ed147dc19878d7e9c03c7940d22bc5b1bea2155edf582350a6dbbae218d5","mediaType":"image/png","width":900,"height":500,"bytes":18912,"name":"clipboard.png"}},{"type":"image","attachment":{"attachmentId":"sha256:24380f9ae0cfc80aa165df010ea360420833690fbcbd7728395ed944f6466b44","mediaType":"image/png","width":900,"height":500,"bytes":26553,"name":"clipboard.png"}},{"type":"text","text":"Each attached image contains one uppercase marker. Reply with the markers in attachment order, separated by >, and nothing else."}],"sourceKind":"user"}
{"type":"assistant/message","content":[{"type":"reasoning","text":""},{"type":"reasoning","text":""},{"type":"reasoning","text":""},{"type":"reasoning","text":""},{"type":"text","text":"No attachments received."}],"source":{"kind":"model","provider":"relay-codex","model":"gpt-5.6-sol","replayState":{"threadId":"01a04b66-2074-7cc0-a69c-1db6c436245a","turnId":"01a04b66-2172-7c23-9f77-6e40a868232a"}}}
{"type":"turn/end","reason":{"kind":"completed"}}
```

The two attachment IDs equal the two fixture SHA-256 values and occur in the exact
submission order.
