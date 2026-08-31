# CDX-TXT-001 Protocol Evidence

## Execution

Command run from the Codex plugin repository:

```bash
node --test \
  --test-name-pattern="the Codex preset streams reasoning and answers into the native DSH conversation" \
  test/dsh-adapter.test.mjs
```

Observed result on 2026-08-29:

```text
tests 1
pass 1
fail 0
cancelled 0
skipped 0
todo 0
duration_ms 88.713875
```

The focused test completed in `4.20975ms` and verified the adapter's deterministic
plain-text streaming and completion path.

## Protocol-lane review

- The command selected exactly one named test; unrelated passing tests did not mask
  the result.
- The test proves adapter conversion and native DSH block emission with a deterministic
  runtime fixture.
- It does not prove current Codex authentication, real App Server execution, official
  DSH Web rendering, browser visibility, or absence of live duplication.
- Therefore this evidence is reliable for the `P` lane only and cannot complete
  `CDX-TXT-001` without the required live Web lane.

