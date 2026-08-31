# CDX-IMG-002 Validation Review

## Process review

1. **Independent oracle:** accepted. The new fixture has one unambiguous,
   case-sensitive marker and was visually inspected before use.
2. **Correct attachment:** accepted. The pre-send preview showed one image and DSH
   persisted the expected dimensions, byte count, media type, name, and SHA-256
   attachment ID.
3. **Visible preservation:** accepted. The completed screenshot displays that exact
   image above the prompt, ruling out a browser paste or display failure.
4. **Exact-answer check:** accepted. The expected marker was absent and the complete
   terminal answer explicitly requested that the user attach the image.
5. **Model-input identity:** accepted as decisive. The matching Codex Thread rollout
   contains only `input_text`; `images` and `local_images` are both empty.
6. **Terminal health:** accepted. The turn completed normally, the composer recovered,
   and browser/Host diagnostics were clean. This is a capability failure, not an
   infrastructure block.
7. **Cross-case independence:** accepted. This validation used a different fixture,
   task, DSH Session, and Codex Thread from `CDX-IMG-001`, yet reproduced the same
   missing-input boundary.

## Reliability assessment

- The visual record, content-addressed DSH attachment, terminal answer, and exact
  rollout all converge: Codex did not receive the image.
- OCR ability itself was not exercised because the input was absent. The correct
  product-level result remains `fail` because a user cannot complete the OCR task
  through the current plugin.
- The passing protocol test covers only a path-bearing synthetic block and cannot
  overturn this real DSH attachment-ID failure.

Confidence: **high for failure and high for missing live image input**.

Reviewed result: **fail**. The method is reasonable and evidence is reliable enough
to close `CDX-IMG-002` as unsupported before starting `CDX-IMG-003`.
