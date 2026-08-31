# CDX-IMG-007 Validation Review

## Process review

1. **Independent candidate:** accepted. A new prompt, Session, Thread, generated file,
   and attachment ID were used rather than reusing IMG-006.
2. **Pre-reload baseline:** accepted. File name, count, natural dimensions, content
   address, and screenshot were captured before reload.
3. **Real reload:** accepted. The same browser tab performed a full reload and DSH
   restored the same selected Session from persisted state.
4. **Post-reload identity:** accepted. Name/count/natural dimensions remained exact;
   the blob URL changed, which positively demonstrates resource rehydration.
5. **Viewer after reload:** accepted. The restored attachment opened a fresh original
   viewer whose image completed at the expected natural dimensions.
6. **No duplication:** accepted. Machine-readable Session counts remained one user,
   one assistant, one turn end, and one image attachment.
7. **Automation retry:** handled. Two locator-level evaluations hit the browser
   bridge's 3-second dispatch deadline after reload; a documented read-only page query
   then returned the exact same image metrics without mutating state. This does not
   weaken the product evidence.
8. **Terminal health:** accepted. Clean browser/Host diagnostics and an enabled
   composer remained after reload.

## Reliability assessment

- Content address, persisted event counts, renewed browser resource URL, natural
  dimensions, visible screenshots, and post-reload viewer converge on persistence.
- The result proves one browser reload, not Host restart persistence; Host restart is
  independently covered later under `CDX-SES-003`.

Confidence: **high**.

Reviewed result: **pass**. The process is reasonable and evidence reliably closes
`CDX-IMG-007` before starting `CDX-IMG-008`.
