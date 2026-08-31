# CDX-EXT-015 — DSH-Contributed Tool

## Traceability

- Primary requirement: `CDX-EXT-015`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P1`

## Objective

Prove that a tool contributed by the DSH runtime is advertised to a Codex-backed DSH
turn under the Codex `dsh` namespace, executes there, and returns its exact result to
the owning DSH Session.

## Preconditions

- `CDX-EXT-014` is closed and the isolated Host is back on its normal policy.
- The deterministic fixture contains marker `DSH_NAMESPACE_PROBE_1515_QKMR`.
- A fresh `GPT-5.6-Sol Low` DSH Session uses the fixture workspace.

## Method

1. Record the fixture digest before execution.
2. Start a fresh Codex-backed DSH Session and request exactly one read of
   `dsh-tool/ext015-probe.txt`, explicitly forbidding shell and alternate file tools.
3. Require the final response to be exactly the first-line marker.
4. Inspect the native rollout for the turn's dynamic-tool catalog, one custom tool
   call named `dsh__read`, the exact relative path argument, and the exact two-line
   tool result.
5. Capture the completed DSH presentation and compare it with the rollout and fixture.
6. Retain the fixture oracle, rollout, Session record, screenshot, live observations,
   and self-review.

## Expected results

- The turn advertises `read` in namespace `dsh` with its executable schema.
- Exactly one `dsh__read` call returns both fixture lines without an error.
- The owning Session presents exactly `DSH_NAMESPACE_PROBE_1515_QKMR`.

## Result interpretation

- Pass only when catalog, call, result, final response, and fixture all agree.
- Fail when the tool is absent, called outside `dsh`, errors, or loses its result.
- Blocked only when a fresh Codex-backed Session cannot be started independently of
  the feature under test.

## Review focus

- Do not infer namespace execution from the assistant answer; require native catalog
  and custom-call records plus the independent fixture digest.
