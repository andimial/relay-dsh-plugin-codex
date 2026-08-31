# CDX-EXT-010 Live Evidence

## Failure branch

- Fresh isolated DSH Session, `GPT-5.6-Sol Low`, `Workspace Write`.
- Exactly one native `mcp_tool_call_end` invoked
  `relay_failure_1058/fail_1058` with `FAIL_REQ_1058`.
- Native duration was 1.226 ms and the result was `Ok` at the transport layer with
  MCP `isError: true` and exact text `MCP_FAIL_1058_NQDX`.
- The assistant and DSH UI returned exactly
  `MCP_FAILURE_OBSERVED_MCP_FAIL_1058_NQDX`.
- A second turn in the same Session used no MCP tool and returned exactly
  `RECOVERY_AFTER_FAILURE_1058`.
- The rollout contains one MCP completion and two assistant messages; DSH persisted
  two normal `turn/end` records.

## Timeout branch

- A fresh isolated DSH Session used the same model, effort, and permission mode.
- Exactly one native `mcp_tool_call_end` invoked
  `relay_failure_1058/timeout_1058` with `TIMEOUT_REQ_1058`.
- Codex terminated the call after 2.002445167 seconds with an explicit error:
  `timed out awaiting tools/call after 2s`.
- The server remained alive and logged its attempted late response 5.002 seconds after
  receiving the call. No native success event, assistant success text, or later DSH
  message accepted that response.
- The assistant and DSH UI returned exactly `MCP_TIMEOUT_OBSERVED`.
- A second turn in the same Session used no MCP tool and returned exactly
  `RECOVERY_AFTER_TIMEOUT_1058`.
- The rollout contains one MCP completion and two assistant messages; DSH persisted
  two normal `turn/end` records.

## Retained invalid attempts

- `timeout-attempt-1-invalid-no-call.png`: the model's broad `ALL_TOOLS` filter matched
  more than one tool and exited before invocation; the server log proves zero business
  calls, so this attempt is excluded.
- `timeout-attempt-2-invalid-model-selection.png`: a combined new-Session/model action
  left the default DeepSeek model selected and failed before execution due to its absent
  credential; it is excluded.
- `timeout-attempt-3-invalid-token.png`: the exact MCP tool was invoked, but the
  operator-added retry suffix violated the fixed fixture token and correctly produced
  `MCP_FAILURE_INVALID_INPUT`; it is excluded.
- The final timeout run restored the prescribed token and provides the authoritative
  result. No invalid attempt mutated the fixture or altered the final branch.

Result: **pass**.
