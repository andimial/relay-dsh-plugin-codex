# CDX-IMG-003 — Ordered multi-image input

## Traceability

- Primary requirement: `CDX-IMG-003`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P1`

## Objective

Prove that two separately attached PNGs both reach one real Codex turn and retain
their DSH attachment order.

## Fixture

- First PNG: `fixtures/image-order/first.png`, visible marker `FIRST_17`.
- Second PNG: `fixtures/image-order/second.png`, visible marker `SECOND_29`.
- First PNG SHA-256:
  `4516ed147dc19878d7e9c03c7940d22bc5b1bea2155edf582350a6dbbae218d5`.
- Second PNG SHA-256:
  `24380f9ae0cfc80aa165df010ea360420833690fbcbd7728395ed944f6466b44`.
- Both PNGs are `900 × 500` and were visually inspected before use.

## Preconditions

- `CDX-IMG-002` is closed.
- Current plugin is linked into the isolated supported DSH profile.

## Method

1. Create a fresh Codex Session.
2. Paste `first.png`, then `second.png`, into the same empty composer.
3. Before sending, require two visible pending image previews in that order.
4. Send exactly:

   ```text
   Each attached image contains one uppercase marker. Reply with the markers in attachment order, separated by >, and nothing else.
   ```

5. Require one terminal answer exactly `FIRST_17>SECOND_29`.
6. Inspect the new DSH event to confirm two ordered attachment IDs and the exact
   Codex rollout to confirm two ordered image inputs.
7. Retain fixture/pre-send/completed screenshots and machine-readable evidence.

## Expected results

- DSH stores and displays both exact PNG attachments in first/second order.
- Codex receives two image inputs in the same order.
- The answer is exactly `FIRST_17>SECOND_29` once.

## Result interpretation

- Pass only when transport, ordering, and exact answer all pass.
- Fail if either image is missing, duplicated, reordered, or the answer is wrong.
- Blocked only when infrastructure prevents submission or observation.

## Review focus

- Confirm attachment hashes and ordering at both DSH and Codex boundaries.
- Do not infer the result solely from prior single-image failures.
