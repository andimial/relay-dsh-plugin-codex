# CDX-TOOL-008 Sanitized Codex Rollout Evidence

Source Thread rollout:
`rollout-2026-08-29T11-35-51-01a04b96-860c-7431-ac00-e3dec067d65e.jsonl`.

```json
{"assistant":"I’ll run the exact command and report the expected failure."}
{"tool":"exec_command","arguments":{"cmd":"printf 'SHELL_ERR_7391\\n' >&2; exit 23","workdir":"/Users/boboyang/work/Relay/integrations/codex/validation/migration-compatibility/fixtures/plain-text-workspace","yield_time_ms":10000,"max_output_tokens":1000}}
{"result":{"chunk_id":"507496","wall_time_seconds":0.000005375,"exit_code":23,"original_token_count":4,"output":"SHELL_ERR_7391\n"}}
{"assistant":"SHELL_ERR_7391 EXIT_23 FAILED."}
```

This was the only shell call. The command proves the marker originated on stderr; the
tool result exposes it in a combined `output` field rather than a separate `stderr` field.
