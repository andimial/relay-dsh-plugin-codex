# CDX-TOOL-015 Allow Branch Sanitized DSH Session Events

Source DSH Session: `session-00a70ed5-2763-405d-a33d-5d52d68c10cf`.

```json
{"type":"approval/policy","policy":"ask"}
{"type":"user/message","runtimeContext":"Approval policy: ask. Operations that require approval may ask through the configured answerers; without an available answerer, the request fails closed."}
{"type":"assistant/message","content":["I’ll run the exact shell command and request approval for the external write.","Approval was not granted, so the file was not created."],"source":{"kind":"model","provider":"relay-codex","model":"gpt-5.6-sol","threadId":"01a04baf-b501-78f2-a005-feae943534cf","turnId":"01a04baf-b5e4-74a0-8b7e-92d29d9f4343"}}
{"type":"turn/end","reason":{"kind":"completed"}}
```
