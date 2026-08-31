# CDX-SES-005 — Thread import and history

## Traceability

- Primary requirement: `CDX-SES-005`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that importing the sole eligible Codex Thread in a Workspace creates one DSH
Session whose user/assistant presentation preserves native source order and content.

## Preconditions

- `CDX-SES-004` is closed.
- Unicode/spaced Workspace discovery has exactly one native eligible Thread, known ID
  `01a04c60-8a1e-70d2-8c58-7a3febcef577`.
- Its source rollout and ordered user/progress/final markers are recorded.

## Method

1. Record source rollout digest/order, isolated link store, and Unicode DSH session set.
2. Select the Unicode Workspace and execute bulk import; the candidate count must still
   be exactly one.
3. Require exactly one new DSH Session and one new imported link mapping to the known
   Thread, without modifying or duplicating the native rollout.
4. Open the imported Session and compare displayed user prompt, assistant progress,
   tool-result presentation, and final response against native chronological order.
5. Retain archive/UI/digest evidence and self-review.

## Expected results

- One imported Session maps to the known Thread and presents its history in source order.

## Result interpretation

- Pass only when mapping cardinality and ordered content both agree.
- Fail for missing/reordered/duplicated history or wrong Thread mapping.
- Blocked only when the deterministic single-candidate import cannot run.

## Review focus

- Distinguish the pre-existing live DSH Session from the newly imported Session.
- Compare immutable markers and sequence numbers rather than titles alone.
