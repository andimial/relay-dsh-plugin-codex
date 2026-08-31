# CDX-EXT-016 — Dynamic DSH Tool Refresh

## Traceability

- Primary requirement: `CDX-EXT-016`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P1`

## Objective

Prove that an existing Codex-backed DSH Session and its bound Codex Thread receive an
updated DSH tool catalog on a later turn, then execute the newly contributed tool.

## Preconditions

- `CDX-EXT-015` is closed.
- The isolated Host initially has no package or tool named
  `relay-dsh-validation-late-tool-1616` / `late_probe_1616`.
- The sanitized fixture plugin is not installed before the baseline turn.

## Method

1. Validate and hash the fixture package, config, and handler.
2. Create a fresh `GPT-5.6-Sol Low` Session in `plain-text-workspace`; send a tool-free
   baseline prompt and require exact marker `LATE_TOOL_BASELINE_1616`.
3. Record the DSH Session id, Codex Thread id, and native baseline catalog; require that
   namespace `dsh` does not contain `late_probe_1616`.
4. Add only the fixture package to the isolated DSH profile, install it, and restart the
   isolated Host. Reopen the same DSH Session, not a new conversation.
5. In a later turn, require exactly one call to `late_probe_1616` with token
   `LATE_TOOL_REQUEST_1616`, then exact response `LATE_TOOL_OK_1616_JXNP`.
6. Require the same DSH Session id and same Codex Thread id, a refreshed native catalog
   containing the exact schema, one `dsh__late_probe_1616` execution, and exact result.
7. Capture the UI, remove the isolated fixture package/profile entry, restart the Host,
   and verify no fixture process/config remains.
8. Retain digests, install/cleanup evidence, rollout, Session, screenshot, and review.

## Expected results

- Baseline catalog excludes the fixture tool.
- Later-turn catalog in the same Thread includes it under `dsh`.
- Exactly one later-turn invocation returns the deterministic marker to the same DSH
  Session.

## Result interpretation

- Pass only when Session and Thread identity remain stable across the catalog change.
- Fail when refresh requires a new Session/Thread, the tool stays absent, or execution
  does not return to the owner Session.
- Blocked only when the isolated Host cannot load a valid DSH fixture plugin for reasons
  independent of the Codex integration.

## Review focus

- A new Thread is not valid evidence. Require pre/post catalog comparison and exact
  identity continuity.
