# Failure Rollout Evidence

- Source: `rollout-2026-08-29T12-59-05-01a04be2-bad7-7163-99d8-238462bd7e0e.jsonl`.
- MCP invocation: `relay_failure_1058/fail_1058`, argument
  `{"token":"FAIL_REQ_1058"}`.
- Native result: `Ok`, `isError: true`, text `MCP_FAIL_1058_NQDX`, duration
  0.001226375 seconds.
- Assistant messages, in order:
  1. `MCP_FAILURE_OBSERVED_MCP_FAIL_1058_NQDX`
  2. `RECOVERY_AFTER_FAILURE_1058`
- Counts: one MCP completion, two assistant messages, no retry.
