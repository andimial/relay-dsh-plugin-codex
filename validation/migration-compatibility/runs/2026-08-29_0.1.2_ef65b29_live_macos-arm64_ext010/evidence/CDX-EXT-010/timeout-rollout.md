# Timeout Rollout Evidence

- Source: `rollout-2026-08-29T13-05-40-01a04be8-c3fd-7941-abbd-870df284fe07.jsonl`.
- MCP invocation: `relay_failure_1058/timeout_1058`, argument
  `{"token":"TIMEOUT_REQ_1058"}`.
- Native result: `Err`, exact terminal cause
  `timed out awaiting tools/call after 2s`, duration 2.002445167 seconds.
- Assistant messages, in order:
  1. `MCP_TIMEOUT_OBSERVED`
  2. `RECOVERY_AFTER_TIMEOUT_1058`
- Counts: one MCP completion, two assistant messages, no retry and no accepted late
  result.
