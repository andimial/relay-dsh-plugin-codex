# CDX-EXT-010 Validation Review
# CDX-EXT-010 Validation Review

## Reasonableness

- The direct oracle first proves both server behaviors independently of DSH and Codex.
- Failure and timeout use different fresh Sessions, unique tokens, and native rollout
  events; each recovery is then tested inside the owning Session.
- Native event timing, server timing, persisted Session events, exact UI text, and
  screenshots cover transport, runtime, persistence, and user-visible layers.

## Reliability

- The failure branch has one server business call and one native MCP completion marked
  `isError: true`; exact error propagation cannot be confused with model invention.
- The timeout branch has one server business call and a 2.002-second native timeout
  against a measured 5.002-second fixture delay. The logged late response is absent
  from all later Codex and DSH outputs.
- Both recoveries are exact, tool-free second turns with normal persisted termination.
- Three invalid timeout attempts are explicitly retained and excluded for observable
  pre-invocation/model/token causes. The authoritative retry restores every prescribed
  precondition and makes exactly one valid call, so retry history does not weaken the
  final result.
- Visual inspection confirms both final screenshots show the expected terminal marker,
  recovery marker, selected Codex model, and two completed turns.

## Verdict

**Pass, high confidence.** MCP application errors and configured timeouts are explicit,
late success is not accepted, and both affected Sessions remain usable.
