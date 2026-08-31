# CDX-TXT-002 Validation Review

## Process review

1. **Atomic scope:** accepted. The case tests only one direct mixed-Unicode
   round trip in a fresh Session; it does not conflate multi-turn memory, Markdown,
   files, or tools.
2. **Backend identity:** accepted. `Codex` was visibly selected before the first
   message and shown on the completed conversation; the isolated profile links the
   exact current plugin source.
3. **Oracle quality:** accepted. The expected assistant answer is a fixed exact
   string containing Chinese, a variation selector, emoji, a supplementary-plane
   Han character, full-width punctuation, and an ASCII suffix.
4. **Machine comparison:** accepted. The assistant message was scoped to terminal
   `paragraph` elements, avoiding false counts from the same marker appearing in
   the session title/header. Both exact string equality and the complete Unicode
   code-point sequence matched.
5. **Completion/error checks:** accepted. The stop control disappeared, timing
   metadata appeared, the composer accepted and cleared a non-sent draft, browser
   diagnostics were empty, and the isolated Host produced no turn error output.
6. **Visual evidence:** accepted as corroboration only. The screenshot shows one
   user message and one terminal answer, but the DOM/code-point result—not visual
   glyph similarity—is the decisive Unicode evidence.

## Reliability assessment

- Fresh Session isolation prevents the earlier ASCII marker result from satisfying
  this oracle.
- Exact paragraph scoping prevents duplicated title/header text from being mistaken
  for duplicated assistant messages.
- The test covers one supported DSH/platform/model configuration and one live
  attempt. It does not establish normalization behavior for every possible Unicode
  sequence, but it is sufficient for the specified representative atomic marker.
- Absence of a focused protocol test is transparent and does not weaken the real
  `L`/`W` observable needed by this requirement.

Confidence: **high for the scoped representative Unicode round trip**.

Reviewed result: **pass**. The validation method is reasonable and the retained
evidence is reliable enough to close `CDX-TXT-002` before starting `CDX-TXT-003`.
