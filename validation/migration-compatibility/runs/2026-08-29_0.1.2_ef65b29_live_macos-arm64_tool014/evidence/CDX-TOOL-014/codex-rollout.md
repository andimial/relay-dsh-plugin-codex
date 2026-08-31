# CDX-TOOL-014 Sanitized Codex Rollout Evidence

Source Thread rollout:
`rollout-2026-08-29T12-00-04-01a04bac-b436-7f11-81e0-ef51d34faac8.jsonl`.

```json
{"tool":"request_user_input","arguments":{"questions":[{"header":"Deployment","id":"deployment_color","options":[{"label":"BLUE_7319 (Recommended)"},{"label":"AMBER_2846"}],"question":"Choose the deployment color."}]}}
{"result":"request_user_input is unavailable in Default mode"}
{"tool":"dsh__ask_user_question","arguments":{"questions":[{"header":"Deployment","id":"deployment_color","multi_select":false,"options":[{"label":"BLUE_7319 (Recommended)"},{"label":"AMBER_2846"}],"question":"Choose the deployment color."}]}}
{"result":{"answers":[{"id":"deployment_color","selected":["BLUE_7319 (Recommended)"]}]}}
{"assistant":"SELECTED_BLUE_7319"}
```

The first built-in call is a non-interactive availability rejection. The plugin-native
DSH question call is the one that paused and received the user answer.
