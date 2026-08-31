# CDX-TOOL-015 Deny Branch Sanitized DSH Session Events

Source DSH Session: `session-7b227c10-b2c7-42f4-a689-99b40a94f349`.

```json
{"type":"approval/policy","policy":"ask"}
{"type":"assistant/message","content":["I’ll issue the exact shell command with the required outside-workspace approval.","DENIED_NO_WRITE"],"source":{"kind":"model","provider":"relay-codex","model":"gpt-5.6-sol","threadId":"01a04bb1-6c3e-7892-b0c1-5fb47686ffc9","turnId":"01a04bb1-6d2d-7811-8d12-647a165508fe"}}
{"type":"turn/end","reason":{"kind":"completed"}}
```

There is no approval-decision event because no approval answerer/card was available.
