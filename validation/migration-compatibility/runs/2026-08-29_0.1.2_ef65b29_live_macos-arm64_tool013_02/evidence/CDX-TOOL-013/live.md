# CDX-TOOL-013 Public Retry Live Evidence

- Independent HTTPS oracle returned HTTP 200, title `Example Domain`, and the stable
  documentation-examples statement immediately before the retry.
- Fresh Session visibly used `GPT-5.6-Sol Low` and `Workspace Write`.
- Codex called native `web__run` with exact `https://example.com/`; no shell fallback.
- Tool result itself contained the same title and body assertion as the independent
  oracle. This distinguishes retrieval from prompt repetition.
- DSH persisted `EXAMPLE_DOMAIN_CONFIRMED` and completed normally.
- One progress sentence preceded the requested exact-only reply; minor response
  exactness deviation.
- Turn duration `11.7s`; first token `6.2s`.
- Browser warning/error diagnostics: `[]`; isolated Host output: none.

Result: **pass** for public Web access. Loopback failure remains a recorded limitation.
