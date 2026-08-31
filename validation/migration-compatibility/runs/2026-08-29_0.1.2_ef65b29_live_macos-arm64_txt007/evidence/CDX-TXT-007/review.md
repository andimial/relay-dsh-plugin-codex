# CDX-TXT-007 Validation Review

## Process review

1. **Protocol interruption path:** accepted. The focused test asserts an exact
   `turn/interrupt` request for the active Thread/Turn.
2. **Active-state proof:** accepted. The pre-click recheck simultaneously observed a
   start-prefixed partial assistant paragraph, absent forbidden marker, and one stop
   control. The stop was not clicked after natural completion.
3. **Prompt-marker false positive avoided:** accepted. Marker absence was scoped to
   assistant `p` text and persisted assistant event payloads, not global page text
   containing the user instruction.
4. **Late-output check:** accepted. Partial length and SHA-256 were unchanged across
   a five-second post-stop observation, and no assistant marker appeared.
5. **Terminal-state identity:** accepted. DSH showed `已停止`; persisted `turn/end`
   recorded `aborted` with user reason, rather than a normal stop finish.
6. **Recovery and diagnostics:** accepted. Composer remained usable, browser/Host
   diagnostics were clean, and before/after screenshots corroborate the state change.

## Reliability assessment

- The requested 1000-token tail made natural completion before the stop unlikely;
  the simultaneous active-state sample and persisted user-abort event make it
  conclusive.
- Five seconds plus stable hash detects ordinary late projection, while persisted
  event inspection detects a marker that might not be visible due to rendering.
- This proves one active text-turn interruption. Separate cases still need to cover
  shell-process interruption and approval/tool cancellation.

Confidence: **high for stopping an active text generation turn**.

Reviewed result: **pass**. The process is reasonable and evidence is reliable enough
to close `CDX-TXT-007` before starting `CDX-TXT-008`.
