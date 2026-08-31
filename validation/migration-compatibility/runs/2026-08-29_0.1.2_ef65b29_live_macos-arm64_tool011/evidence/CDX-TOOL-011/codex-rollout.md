# CDX-TOOL-011 Sanitized Codex Rollout Evidence

Source Thread rollout:
`rollout-2026-08-29T11-48-24-01a04ba2-0694-7170-a048-90f71c47e336.jsonl`.

```json
{"tool":"exec_command","arguments":{"cmd":"node --test test-fixture/deterministic.test.mjs","workdir":"/Users/boboyang/work/Relay/integrations/codex/validation/migration-compatibility/fixtures/plain-text-workspace","yield_time_ms":30000,"max_output_tokens":2000}}
{"result":{"exit_code":1,"output":{"tests":2,"pass":1,"fail":1,"cancelled":0,"skipped":0,"todo":0,"passName":"PASS_MARKER_2461","failName":"FAIL_MARKER_9753","error":"AssertionError [ERR_ASSERTION]","actual":"ACTUAL_1357","expected":"EXPECTED_8642"}}}
{"assistant":"TESTS 1_PASS 1_FAIL EXIT_1"}
```

The omitted raw stack/timing fields are nondeterministic; semantic fields above are
literal values from the retained rollout.
