# CDX-IMG-008 Validation Review

## Process review

1. **Independent protected-content oracle:** accepted. New source fixture was visually
   inspected and its `KEEP_73` marker was deliberately omitted from the live prompt.
2. **Correct attachment:** accepted. Pre-send screenshot and the content-addressed DSH
   event match the exact source hash and dimensions.
3. **Model-input identity:** accepted as decisive. The independent Codex Thread has
   empty `images` and `local_images`, so the source was absent before editing.
4. **Actual edit attempt:** accepted. Codex invoked the image edit tool with one recent
   conversation image requested; the tool independently reported zero available.
5. **Output oracle:** accepted. No generated image block or artifact exists, so neither
   requested background change nor protected-content preservation passed.
6. **Failure localization:** accepted. DSH source retention, rollout absence, tool
   error, and terminal answer converge on the same attachment-forwarding boundary.
7. **Terminal health:** accepted. The turn completed and composer remained usable with
   clean browser/Host diagnostics; this is `fail`, not `blocked`.

## Reliability assessment

- This case does not inherit its result from IMG-001/002/003. It independently uses a
  new source, Session, Thread, and a real editing-tool attempt.
- The editing model's quality was not reached. The product-level editing task remains
  unsupported because users cannot deliver the source image through the plugin.

Confidence: **high for failure and high for zero-image edit input**.

Reviewed result: **fail**. The process is reasonable and evidence reliably closes
`CDX-IMG-008` before starting `CDX-FILE-001`.
