# CDX-IMG-007 — Generated-image persistence after reload

## Traceability

- Primary requirement: `CDX-IMG-007`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that a newly generated, content-addressed DSH image attachment remains visible
and loadable after a full browser reload of the same Session.

## Preconditions

- `CDX-IMG-006` is closed.
- Fresh DSH Session uses `GPT-5.6-Sol Low` in the sanitized Workspace.

## Method

1. Create a fresh Codex Session and send exactly:

   ```text
   Generate a new PNG image of one solid orange triangle centered on a light-gray background. Use the image-generation capability and return the image artifact directly.
   ```

2. Wait for terminal completion and select the last generated image block.
3. Record Session/Thread IDs, attachment ID, file name, byte count, and pre-reload
   browser natural dimensions; retain a screenshot.
4. Perform a full browser reload on the same tab and wait for the DSH Session to
   restore.
5. Require the same selected Session, same image file name/count, complete image, and
   identical non-zero natural dimensions; retain a post-reload screenshot.
6. Re-open the image viewer after reload and verify it loads, then close it.
7. Confirm reload created no additional user message, Turn, or image attachment.

## Expected results

- The same content-addressed generated image is visible before and after reload.
- Inline and post-reload viewer images load without a broken state.
- Reload does not duplicate the turn or artifact.

## Result interpretation

- Pass only when attachment identity, rendering, and non-duplication all hold.
- Fail when the image disappears, breaks, changes identity/count, or reload duplicates
  conversation state.
- Blocked only when image generation fails before a persistence candidate exists or
  browser/Host infrastructure prevents reload.

## Review focus

- Use a new Session and generated attachment; do not reuse IMG-006.
- Compare machine-readable pre/post state, not screenshots alone.
