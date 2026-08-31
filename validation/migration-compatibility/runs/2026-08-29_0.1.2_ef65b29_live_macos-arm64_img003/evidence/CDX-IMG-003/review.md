# CDX-IMG-003 Validation Review

## Process review

1. **Independent fixtures:** accepted. Two new, visually distinct PNGs with unique
   markers and hashes avoid relying on either earlier image case.
2. **Attachment count and order before send:** accepted. DOM counts prove two
   previews, and the screenshot visibly records first-orange then second-green.
3. **Persisted count and order:** accepted. The DSH event contains exactly two image
   blocks whose attachment IDs equal the two fixture hashes in the expected order.
4. **Exact-answer oracle:** accepted. The required order-sensitive answer is absent;
   the sole answer says no attachments were received.
5. **Model-input identity:** accepted as decisive. The matching independent Codex
   Thread rollout has empty `images` and `local_images` arrays.
6. **Terminal health:** accepted. The turn completed normally, the composer remained
   usable, and browser/Host diagnostics were clean. This is not blocked infrastructure.
7. **Scope of conclusion:** accepted. Because zero images reached Codex, the case
   proves multi-image transport is unsupported; downstream model ordering was not
   reached and is not separately blamed.

## Reliability assessment

- Visual, content-addressed DSH, terminal, and exact rollout evidence agree.
- The answer itself independently acknowledges the absence of attachments.
- Prior image failures are corroborating only; this conclusion comes from a new
  fixture pair, DSH Session, and Codex Thread.

Confidence: **high for failure, exact DSH ordering, and zero Codex image inputs**.

Reviewed result: **fail**. The method is reasonable and evidence is reliable enough
to close `CDX-IMG-003` as unsupported before starting `CDX-IMG-004`.
