# CDX-EXT-010 — MCP failure and timeout

## Traceability

- Primary requirement: `CDX-EXT-010`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P1`

## Objective

Prove that an MCP `isError` result and a configured tool timeout are explicit to Codex
and the user, and neither prevents a later turn in the same DSH Session.

## Preconditions

- `CDX-EXT-009` is closed.
- Isolated global STDIO server `relay_failure_1058` has exact fail and five-second delay
  tools; direct oracle and source digest are recorded.
- Isolated config sets `tool_timeout_sec = 2`; previous results server is disabled.
- Each branch begins in a fresh isolated-Host Standard Session with `GPT-5.6-Sol Low`,
  `Workspace Write`.

## Method

1. Failure branch sends exactly:

   ```text
   Call only relay_failure_1058 fail_1058 once with token FAIL_REQ_1058. It intentionally returns isError. Do not retry. Reply MCP_FAILURE_OBSERVED_<exact error text> only.
   ```

   Require one native error-marked MCP result, exact error marker, explicit terminal
   `MCP_FAILURE_OBSERVED_MCP_FAIL_1058_NQDX`, normal turn end.
2. In the same Session send exactly:

   ```text
   Do not call tools. Reply RECOVERY_AFTER_FAILURE_1058 only.
   ```

   Require exact recovery and completed second turn.
3. Timeout branch sends exactly:

   ```text
   Call only relay_failure_1058 timeout_1058 once with token TIMEOUT_REQ_1058. Do not retry. If it exceeds the configured tool timeout, reply MCP_TIMEOUT_OBSERVED only; otherwise reply MCP_TIMEOUT_NOT_OBSERVED only.
   ```

   Require one call, approximately two-second client timeout, explicit native/outer
   error, no late success accepted, and terminal `MCP_TIMEOUT_OBSERVED`.
4. After at least five seconds, verify server late-response logging if process survived;
   then in the same Session send exactly:

   ```text
   Do not call tools. Reply RECOVERY_AFTER_TIMEOUT_1058 only.
   ```

   Require exact recovery and completed second turn.
5. Retain separate rollouts/Sessions/screenshots, server timing log, digests, and review.

## Expected results

- Both failure classes are explicit and accurately interpreted.
- Neither error result is mistaken for success.
- Both owning Sessions remain usable on their next turn.

## Result interpretation

- Pass only when both branches and both recovery turns pass.
- Fail for silent/ambiguous failure, retry storm, accepted late result, stuck Session, or
  incorrect recovery.
- Blocked only when fixture execution cannot start independently of error handling.

## Review focus

- Distinguish MCP `isError` payload from transport/tool-timeout exception and record
  exact timing/provenance for both.
