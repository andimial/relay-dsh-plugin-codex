# CDX-TOOL-008 Sanitized DSH Session Events

Source DSH Session: `session-5f2866ef-c43c-4496-9fbb-cc846ab733d5`.

```json
{"type":"user/message","text":"Use the shell tool to run exactly this command: printf 'SHELL_ERR_7391\\n' >&2; exit 23\nDo not run any other command. This command is intentionally expected to fail. After it finishes, reply exactly SHELL_ERR_7391 EXIT_23 FAILED."}
{"type":"assistant/message","content":["I’ll run the exact command and report the expected failure.","SHELL_ERR_7391 EXIT_23 FAILED."],"source":{"kind":"model","provider":"relay-codex","model":"gpt-5.6-sol","threadId":"01a04b96-860c-7431-ac00-e3dec067d65e","turnId":"01a04b96-870c-7a32-ae17-972c9faee364"}}
{"type":"turn/end","reason":{"kind":"completed"}}
```
