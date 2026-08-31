# CDX-TXT-007 Sanitized Session Events

Source DSH Session: `session-1d29fa27-0e45-4359-8fc3-f3d290d67ea9`.

```json
{"type":"block-start","index":0,"blockType":"reasoning"}
{"type":"block-end","index":0,"block":{"type":"reasoning","text":""}}
{"type":"block-start","index":1,"blockType":"text"}
{"assistantText":"CDX_STOP_START_007 S0001 S0002 S0003 S0004 S0005 S0006 S0007 S0008 S0009 S0010 S0011 S0012 S0013"}
{"turnEnd":{"kind":"aborted","reason":{"kind":"user"}}}
```

Filtered machine checks:

- Forbidden-marker occurrences in assistant chunks/messages: `0`.
- Turn end kind: `aborted`.
- Abort reason kind: `user`.
- No terminal text block end or normal stop finish was persisted after interruption.
