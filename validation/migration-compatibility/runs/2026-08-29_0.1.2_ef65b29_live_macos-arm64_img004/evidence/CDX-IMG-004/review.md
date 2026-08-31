# CDX-IMG-004 Validation Review

## Process review

1. **Invalidity oracle:** accepted. The retained hex bytes lack a PNG signature and
   are plainly not an image, despite the `.png` name and `image/png` clipboard MIME.
2. **Transport to DSH:** accepted. Browser clipboard write/paste both succeeded and
   DSH rendered a broken pending preview; this was not a browser-tool rejection.
3. **Rejection timing:** accepted as decisive. Send produced an explicit format alert,
   with no generation control, persisted DSH user message, Codex rollout, or model
   Turn.
4. **Rollout absence check:** accepted with isolation. The sole global text match was
   the known operator/controller rollout that contains this validation procedure;
   after excluding it, plugin-owned matches were zero.
5. **Recovery:** accepted. The residual preview was removable, normal text re-enabled
   send, and the health-check draft was cleared without persistence.

## Oracle correction

The initial case draft disallowed even a temporary pending preview. That was stricter
than requirement `CDX-IMG-004`, whose specified minimum observable is rejection before
a model Turn starts. The case was corrected to permit a removable temporary preview
only when submission rejects explicitly. This correction preserves the pre-existing
atomic criterion; it does not weaken it in response to a model result.

## Reliability assessment

- UI alert, absence of a DSH user event, absence of a plugin-owned rollout, and lack
  of generation state independently prove pre-model rejection.
- The deferred-validation preview is recorded as a UX issue, not hidden by the pass.

Confidence: **high**.

Reviewed result: **pass**. The validation process is reasonable after correcting the
over-strict pre-send assumption, and the evidence reliably proves the specified
capability before starting `CDX-IMG-005`.
