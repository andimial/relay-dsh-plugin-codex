# CDX-TXT-001 Protocol Evidence

## Execution

Command run from `integrations/codex` on 2026-08-29:

```bash
node --test \
  --test-name-pattern="the Codex preset streams reasoning and answers into the native DSH conversation" \
  test/dsh-adapter.test.mjs
```

Observed result:

```text
tests 1
pass 1
fail 0
cancelled 0
skipped 0
todo 0
duration_ms 82.984458
```

The focused test completed in `3.605292ms`.

## Protocol-lane review

- Exactly one named adapter test ran, so unrelated passing tests cannot mask failure.
- It verifies deterministic text streaming and terminal answer projection into the
  native DSH conversation.
- It does not prove real authentication, live App Server behavior, UI completion, or
  de-duplication; those claims require the live lane.

