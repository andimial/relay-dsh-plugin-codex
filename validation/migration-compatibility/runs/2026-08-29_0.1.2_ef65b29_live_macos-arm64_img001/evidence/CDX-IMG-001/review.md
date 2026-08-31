# CDX-IMG-001 Validation Review

## Process review

1. **Fixture oracle:** accepted. The original PNG was visually inspected at full
   resolution and contains only three red circles/two blue triangles; no text can
   leak the answer.
2. **Correct browser attachment:** accepted. Pre-send DOM/screenshot showed exactly
   one preview, and DSH persisted the expected byte count, dimensions, media type,
   name, and attachment ID equal to the fixture SHA-256.
3. **Visible message preservation:** accepted. The completed conversation displays
   the correct image and prompt, so the browser/UI did not silently drop the paste.
4. **Model-input identity:** accepted as decisive. The exact Codex Thread rollout
   records only `input_text` with both `images` and `local_images` empty.
5. **Failure localization:** accepted. Static adapter inspection shows it requires a
   path-like field, while the real DSH attachment event supplies only attachment ID
   plus metadata. This is a strong likely cause and matches the rollout.
6. **Terminal health:** accepted. The turn completed normally with one wrong answer,
   a usable composer, and clean browser/Host diagnostics; this is a product fail, not
   an infrastructure block.
7. **Automation timeout:** handled. The initial wait looked only for the expected
   answer and reset after timeout; reconnection inspected the already completed turn
   without re-sending, preserving a single-attempt result.

## Reliability assessment

- DSH attachment identity, visible screenshots, adapter path rules, the actual Codex
  rollout, and the wrong answer converge on the same conclusion: the image did not
  reach Codex.
- The existing protocol test passes only for an already path-bearing synthetic image
  block, so it misses the real DSH attachment-ID shape. Its pass is not allowed to
  override the live failure.
- Component attribution to missing attachment-ID resolution is strongly supported but
  remains an inference from source/event mismatch; the user-visible capability fails
  regardless.

Confidence: **high for failure; high for missing live image input; medium-high for the
specific adapter-resolution root cause**.

Reviewed result: **fail**. The validation process is reasonable and evidence is
reliable enough to close `CDX-IMG-001` as unsupported before starting `CDX-IMG-002`.
