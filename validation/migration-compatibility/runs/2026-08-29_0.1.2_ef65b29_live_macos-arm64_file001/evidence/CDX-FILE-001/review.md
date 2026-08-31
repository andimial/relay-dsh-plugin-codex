# CDX-FILE-001 Validation Review

## Process review

1. **Deterministic unreadable-by-workspace oracle:** accepted. The fixture has a
   content hash, undisclosed marker, and lies outside the selected Workspace.
2. **Actual product surface:** accepted. Browser DOM and screenshot directly inspect
   the tested DSH UI rather than assuming a conventional upload button.
3. **Hidden control check:** accepted. There are zero file inputs, and the only visible
   add control expands a command list with no attachment operation.
4. **Static corroboration:** accepted. The exact installed DSH version's composer
   source routes clipboard files exclusively through image MIME validation and its
   send contract serializes only draft images plus text.
5. **No false model result:** accepted. Since the capability cannot be invoked, no
   prompt, user event, plugin Thread, or model Turn was created. A speculative model
   answer is not used.
6. **State classification:** accepted. Missing product UI/protocol support is a
   user-visible capability failure, not browser automation or account infrastructure
   blockage.

## Reliability assessment

- Live UI evidence and immutable tested-version source agree on image-only attachment
  support.
- This result is scoped to uploaded text/source attachments. Reading files already in
  a Workspace is evaluated separately under built-in tool requirements.

Confidence: **high**.

Reviewed result: **fail**. The validation process is reasonable and evidence reliably
closes `CDX-FILE-001` before starting `CDX-FILE-002`.
