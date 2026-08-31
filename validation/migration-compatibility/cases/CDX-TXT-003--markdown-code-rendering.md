# CDX-TXT-003 — Markdown and code-block rendering

## Traceability

- Primary requirement: `CDX-TXT-003`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that a real Codex terminal answer is rendered by native DSH as readable
Markdown with distinct heading, list, and fenced-code structures while preserving
the code block's line breaks and four-space indentation.

## Preconditions

- `CDX-TXT-001` and `CDX-TXT-002` have reviewed passes.
- The current plugin remains linked into the isolated supported DSH profile.
- Use a fresh Codex Session under the sanitized plain-text fixture.

## Method

1. Create a fresh Session and select `Codex` before sending.
2. Send the following request exactly (the four indented lines inside the requested
   document are part of the oracle):

   ````text
   Return exactly this Markdown document and nothing else:
   ## CDX_MD_003
   - alpha-003
   - beta-003

   ```python
   def relay_marker():
       value = "CDX_CODE_003"
       return value
   ```
   ````

3. Wait for terminal completion.
4. Inspect semantic DOM structure and exact rendered text:
   - one level-two heading `CDX_MD_003`;
   - one unordered list containing exactly `alpha-003`, `beta-003` in order;
   - one `pre` code block whose text is the exact three-line Python function.
5. Confirm code indentation is four spaces on lines two and three, the response is
   not displayed as one literal outer fence, and no duplicate terminal block exists.
6. Retain a completed screenshot, DOM-derived structure/text, and sanitized
   browser/Host diagnostics.

## Expected results

- Heading, list, and code render as three distinct semantic structures.
- List order is preserved.
- The code block text equals:

  ```text
  def relay_marker():
      value = "CDX_CODE_003"
      return value
  ```

- No extra prose, duplicated content, still-running control, or tool call appears.
- The reply composer is usable after completion.

## Evidence to retain

- DOM tag/count and exact text checks for `h2`, `ul > li`, and `pre`.
- Whitespace/code-line inspection.
- Completed DSH Web screenshot.
- Relevant sanitized browser and Host diagnostics.
- Exact environment metadata.

## Result interpretation

- Pass only when all semantic and whitespace observables match.
- Fail when Markdown is shown only as literal syntax, any required structure is
  missing/duplicated, code indentation changes, or the turn fails to complete.
- Blocked only when infrastructure prevents reaching a terminal Codex answer.

## Review focus

- Use semantic DOM and exact code text as decisive evidence; screenshot appearance
  alone is insufficient for whitespace.
- The current repository has no focused Markdown protocol test, so do not cite an
  unrelated test as protocol evidence.
