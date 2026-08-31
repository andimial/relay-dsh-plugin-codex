# CDX-TOOL-014 Sanitized DSH Session Events

Source DSH Session: `session-2e1ab0fe-c715-42dd-a4b8-4da346b35199`.

```json
{"type":"user/message","text":"Before doing anything else, use the structured user-input question tool to ask: Choose the deployment color. Offer exactly two options: BLUE_7319 (recommended) and AMBER_2846. Do not choose for me. After I answer, reply SELECTED_<answer> only."}
{"type":"assistant/message","content":[{"reasoning":""},{"reasoning":""},{"reasoning":""},"SELECTED_BLUE_7319"],"source":{"kind":"model","provider":"relay-codex","model":"gpt-5.6-sol","threadId":"01a04bac-b436-7f11-81e0-ef51d34faac8","turnId":"01a04bac-b539-7261-8cdb-8bf538da56e2"}}
{"type":"turn/end","reason":{"kind":"completed"}}
```

The DSH Session log stores the terminal model message, while the paused/selected question
state is evidenced by the rollout tool result and UI screenshots.
