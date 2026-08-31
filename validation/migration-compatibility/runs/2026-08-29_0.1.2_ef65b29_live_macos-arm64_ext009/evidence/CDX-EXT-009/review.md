# CDX-EXT-009 Validation Review

## Reasonableness

- Independent tools, tokens, Sessions, screenshots, and result transformations isolate
  the three content types.
- Native MCP events establish actual server results; assistant text alone is never used
  as type evidence.
- Image digest is compared at source, native event, and outer `input_image` layers.

## Reliability

- Text and JSON calls each have exact server log, native event, and DSH persistence.
- Broad-filter mistakes in text/image branches failed before MCP invocation; server logs
  prove one real call per branch. They add latency but not result ambiguity.
- Image evidence is unusually strong: exact bytes reached Codex and the outer tool
  output, while four independent DSH/user checks are negative—no assistant image block,
  no Session attachment, zero attachment files, and no DOM/visual result image.
- The atomic requirement's minimum says the types reach Codex intact; the image meets
  that backend wording. However this migration campaign requires user tasks to complete,
  and the case's explicit end-to-end expectation requires DSH delivery. Reporting an
  overall pass would hide a user-visible loss, so the stricter fail is appropriate.

## Verdict

**Fail, high confidence.** Text and structured JSON pass; MCP image result delivery to
the user fails after intact Codex ingestion.
