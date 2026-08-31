# CDX-IMG-002 — Image OCR

## Traceability

- Primary requirement: `CDX-IMG-002`
- Secondary requirements: none
- Verification levels: `P`, `L`, `W`
- Priority: `P0`

## Objective

Prove that a text-bearing PNG pasted into DSH reaches the real Codex image input and
that Codex returns the exact visible marker without OCR substitutions.

## Fixture

- PNG: `fixtures/image-ocr/ocr-marker.png`
- Dimensions: `1200 × 400`, RGBA
- PNG SHA-256: `91c980cd2c508d6703811e307a6328ae4abc76195cdeefb2ae1f942fe7132768`
- Exact visible marker: `OCR_MARKER_4821_Q7XZ`

## Preconditions

- `CDX-IMG-001` is closed; this case still executes independently in a fresh Session.
- Current plugin is linked into the isolated supported DSH profile.

## Method

1. Run only `user image messages are forwarded as Codex local image inputs` for the
   protocol lane.
2. Create a fresh Codex Session.
3. Paste the exact PNG bytes into the composer and confirm one pending
   `clipboard.png` preview before sending.
4. Send exactly:

   ```text
   Read the exact text in the attached image. Reply with that text only, preserving underscores and character case.
   ```

5. Require one terminal assistant paragraph exactly equal to
   `OCR_MARKER_4821_Q7XZ`.
6. Inspect the DSH attachment metadata and exact Codex rollout image arrays for this
   new Thread; do not reuse IMG-001 provenance.
7. Retain attached/completed screenshots, terminal/composer checks, and diagnostics.

## Expected results

- Protocol path-bearing image forwarding passes.
- The new DSH message stores/displays the OCR PNG attachment.
- The new Codex rollout contains one local image input.
- The exact OCR marker appears once with no substitutions.

## Result interpretation

- Pass only when image forwarding and exact OCR both pass.
- Fail when the live image is absent or the exact marker is wrong/missing.
- Blocked only when infrastructure prevents the new image turn.

## Review focus

- Independently compare the new DSH attachment ID with this fixture hash and inspect
  the new Codex Thread rollout.
- Do not infer failure solely from IMG-001; this case must reproduce or contradict it.
