# CDX-TOOL-009 Sanitized DSH Session Events

Source DSH Session: `session-262bac05-0bd4-4558-8bab-d50a745fb0f6`.

Observed event-type counts include no tool or tool-output event. The only persisted model
message is:

```json
{"type":"assistant/message","content":["Running the command with the requested initial yield, then I’ll poll the same session if needed.","STREAM_DONE"],"source":{"kind":"model","provider":"relay-codex","model":"gpt-5.6-sol","threadId":"01a04b9b-c5a0-76c3-8834-9359f9758b70","turnId":"01a04b9b-c71a-78e0-97b4-138f85d8bcad"}}
{"type":"turn/end","reason":{"kind":"completed"}}
```

Neither streamed marker is persisted into the DSH presentation history.
