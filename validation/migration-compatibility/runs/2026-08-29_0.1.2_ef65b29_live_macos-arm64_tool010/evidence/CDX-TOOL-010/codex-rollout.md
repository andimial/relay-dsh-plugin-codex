# CDX-TOOL-010 Sanitized Codex Rollout Evidence

Source Thread rollout:
`rollout-2026-08-29T11-44-53-01a04b9e-ce4a-78d3-af62-8588f597a9ff.jsonl`.

```json
{"timestamp":"2026-08-29T03:45:06.969Z","tool":"exec_command","arguments":{"cmd":"sleep 15; printf 'LATE_MARKER_5127\\n' > interrupt-output/should-not-exist.txt","yield_time_ms":1000,"workdir":"/Users/boboyang/work/Relay/integrations/codex/validation/migration-compatibility/fixtures/plain-text-workspace"}}
{"timestamp":"2026-08-29T03:45:08.204Z","result":{"session_id":84777,"output":""}}
{"timestamp":"2026-08-29T03:45:12.763Z","tool":"write_stdin","arguments":{"session_id":84777,"chars":"","yield_time_ms":30000}}
{"timestamp":"2026-08-29T03:45:17.310Z","result":"aborted by user after 4.5s"}
{"timestamp":"2026-08-29T03:45:17.325Z","event":"turn_aborted","reason":"interrupted","duration_ms":23143}
```

The rollout correctly records model-turn/tool-poll abortion, but the filesystem evidence
proves the actual delayed command continued far enough to write its marker.
