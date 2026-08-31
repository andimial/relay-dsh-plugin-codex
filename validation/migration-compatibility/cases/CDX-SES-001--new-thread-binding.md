# CDX-SES-001 — New Thread binding

## Traceability

- Primary requirement: `CDX-SES-001`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that one new DSH Codex Session creates and durably binds exactly one Codex Thread.

## Preconditions

- `CDX-ENV-003` is closed and Host environment cleanup is complete.
- Isolated Host uses a new dedicated link-store path that is absent before startup.
- Baseline Codex rollout set is recorded.

## Method

1. Restart the isolated Host with the fresh link store and prove it has no mappings.
2. Create one fresh plain-text-workspace Session and send one deterministic no-tool turn.
3. Require exactly one new Codex rollout/Thread and one DSH Session archive.
4. Require the link store to contain exactly one binding between that DSH Session ID
   and Thread ID with matching workspace cwd.
5. Retain digests/UI evidence and self-review.

## Expected results

- One DSH Session, one Codex Thread, and one durable mapping agree on cwd and IDs.

## Result interpretation

- Pass only for exact one-to-one binding with no duplicate rollout or mapping.
- Fail for missing, duplicate, or mismatched Thread binding.
- Blocked only when a fresh Session cannot start against the isolated store.

## Review focus

- Compare before/after sets rather than assuming the newest file is unique.
- Distinguish DSH title-generation activity from Codex execution Threads.
