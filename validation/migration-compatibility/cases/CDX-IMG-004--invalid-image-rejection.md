# CDX-IMG-004 — Invalid image rejection

## Traceability

- Primary requirement: `CDX-IMG-004`
- Secondary requirements: none
- Verification levels: `A`, `W`
- Priority: `P0`

## Objective

Prove that bytes falsely labeled as PNG are rejected before a Codex model Turn is
created, without leaving a pending attachment or unusable composer.

## Fixture

- Invalid file: `fixtures/invalid-image/not-a-png.png`.
- Content is plain UTF-8 text, not a PNG signature or image stream.
- SHA-256:
  `61a0f23e94c9d99ca97ae625493864d5b6985e4a88f538fd225680f01c346b83`.

## Preconditions

- `CDX-IMG-003` is closed.
- A fresh DSH Session has no Codex Thread or model Turn.

## Method

1. Create a fresh Session and select `GPT-5.6-Sol Low`.
2. Put the exact invalid fixture bytes on the browser clipboard with MIME
   `image/png`, focus the empty composer, and paste once.
3. Enter exactly `Describe the attached image.`, click send once, observe any error
   notification, and inspect the pending-image group.
4. Verify that no user message, plugin-owned Codex Thread rollout, or model Turn was
   created.
5. Remove any temporary preview, verify the composer remains usable for ordinary text,
   then clear the non-sent
   health-check draft.
6. Retain the browser screenshot, DOM counts, diagnostics, isolated DSH events, and
   rollout absence check.

## Expected results

- The invalid bytes are not accepted as a submitted user image. A temporary broken
  pre-send preview is permitted only if submission rejects it explicitly.
- Rejection occurs before a Codex Thread/model Turn starts.
- The user receives an explicit error and the composer remains usable.

## Result interpretation

- Pass when all expected results hold.
- Fail if invalid bytes become a submitted attachment, start a model Turn, fail
  silently, cannot be removed, or leave the composer unusable.
- Blocked only if the browser automation layer itself refuses to construct the
  clipboard payload before DSH can observe it.

## Review focus

- Separate browser-clipboard transport errors from DSH product rejection.
- Use session-event and rollout absence, not screenshot alone, to prove no model Turn.
