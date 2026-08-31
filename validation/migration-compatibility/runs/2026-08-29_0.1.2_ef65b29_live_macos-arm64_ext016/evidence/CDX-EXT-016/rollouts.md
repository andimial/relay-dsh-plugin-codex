# CDX-EXT-016 Rollout Evidence

## Existing Session and Thread

- Rollout: `rollout-2026-08-29T13-45-47-01a04c0d-7c07-7182-a671-9fa12797ab1e.jsonl`.
- Thread: `01a04c0d-7c07-7182-a671-9fa12797ab1e`.
- Initial native catalog contains 25 DSH functions and no `late_probe_1616`.
- The same rollout has exactly one `session_meta` and two `turn_context` records,
  proving the later interaction resumed this Thread rather than creating a replacement.
- In the later turn, the first unified call asserted exactly one matching tool but found
  zero; a second search over name/description also returned `[]`.
- No `dsh__late_probe_1616` invocation or fixture result occurs; final response is
  `late_probe_1616 is unavailable.`
- Final SHA-256:
  `1df1aecd9629f1cbd57241db685698f05411b98d23494c5ddcedc71d089d3779`.

## Fresh-Session Environment Control

- Rollout: `rollout-2026-08-29T13-49-21-01a04c10-bfa1-7e62-8053-5bdd9c564ca5.jsonl`.
- Thread: `01a04c10-bfa1-7e62-8053-5bdd9c564ca5`.
- Native catalog includes exact DSH function `late_probe_1616`, description, required
  string `token` schema, and no extra properties from the fixture.
- One unified call selected `dsh__late_probe_1616`, supplied the exact token, received
  `LATE_TOOL_OK_1616_JXNP`, and produced the exact final answer.
- SHA-256:
  `b811c363fb7155ff88746bc5b2071803821a7ed9becdb794735a87e853431bd0`.
