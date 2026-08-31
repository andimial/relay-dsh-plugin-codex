# MCP Failure Fixture Server Log

- Direct oracle: one `fail_1058` call returned immediately and one `timeout_1058` call
  logged its late response 5.002 seconds later.
- Product failure branch: one `fail_1058` call with `FAIL_REQ_1058`.
- Authoritative product timeout branch: one `timeout_1058` call with
  `TIMEOUT_REQ_1058`; process `67890` remained alive and logged `late_response` 5.002
  seconds later.
- The authoritative branch contains no duplicate business call.

Invalid setup attempts remain attributable in the raw runtime log: one branch made no
call, and one call carried `TIMEOUT_REQ_1058_RETRY2` and received the fixture's invalid
input error. Neither is counted as requirement evidence.
