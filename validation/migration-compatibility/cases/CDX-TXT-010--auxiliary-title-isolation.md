# CDX-TXT-010 — Auxiliary title isolation

## Traceability

- Primary requirement: `CDX-TXT-010`
- Secondary requirements: none
- Verification levels: `P`
- Priority: `P1`

## Objective

Prove that automatic DSH session-title generation uses a separate ephemeral Codex
Thread and cannot replace, append to, or gain the capabilities of the main business
Thread.

## Preconditions

- Current plugin build and commit are recorded by the run.
- The deterministic fake runtime can record created configs, sent Thread IDs,
  emitted chunks, released Threads, and the adapter's bound business Thread.

## Method

Run only:

```bash
node --test \
  --test-name-pattern="automatic title generation uses an isolated ephemeral Codex thread" \
  test/dsh-adapter.test.mjs
```

The named test must prove all of these assertions:

1. Main and title calls both occur.
2. Their Thread IDs differ.
3. `adapter.threadFor(main DSH session)` remains the main call's Thread ID.
4. Auxiliary config is `ephemeral: true`, has no dynamic tools, uses read-only
   sandbox, `never` approval, and source `relay.codex.auxiliary`.
5. Auxiliary developer instructions forbid tools.
6. The auxiliary Thread is released after title completion.
7. Main text chunk is `done`, while title text chunk is the separate title result.

## Expected results

- Exactly the named test runs and passes.
- Every isolation/capability/release assertion above remains active in the test source.
- No live-account or screenshot evidence is required because the primary observable
  is internal Thread/config identity and the deterministic test directly controls it.

## Evidence to retain

- Focused test output.
- Reviewed assertion list and relevant source line references.
- Exact plugin commit, Node.js, and platform metadata.

## Result interpretation

- Pass when the focused test and every listed assertion pass.
- Fail when any identity, capability, main-binding, output separation, or release
  assertion fails.
- Blocked only when the test cannot execute because of environment/tooling failure.

## Review focus

- Do not substitute a visually generated title for Thread-isolation evidence.
- Verify that the test still contains the assertions; a passing renamed or weakened
  test is insufficient.
