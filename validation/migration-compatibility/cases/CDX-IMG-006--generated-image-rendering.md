# CDX-IMG-006 — Generated-image rendering

## Traceability

- Primary requirement: `CDX-IMG-006`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that a newly generated Codex image is converted into a standard DSH image block
whose browser image element loads with non-zero intrinsic dimensions and can open its
original-image viewer.

## Preconditions

- `CDX-IMG-005` is closed.
- Fresh DSH Session uses `GPT-5.6-Sol Low` in the sanitized Workspace.

## Method

1. Create a fresh Codex Session and send exactly:

   ```text
   Generate a new PNG image of one solid navy-blue circle centered on a pale yellow background. Use the image-generation capability and return the image artifact directly.
   ```

2. Wait for terminal completion and require one or more standard DSH image blocks;
   iterative corrections are allowed, but every emitted image block must load.
3. Inspect the rendered `<img>` through the browser: `complete=true`, non-zero
   `naturalWidth`/`naturalHeight`, and no broken-image state.
4. Click `点击查看原图`, require the full-image viewer to open, and retain screenshots
   before and after opening.
5. Retain sanitized DSH attachment metadata, exact Codex image-generation provenance,
   browser diagnostics, and terminal/composer checks.

## Expected results

- One or more generated image attachments appear as standard DSH image blocks.
- Every inline image fully loads with non-zero intrinsic dimensions.
- The original-image viewer opens and shows the same attachment.
- No broken placeholder, external-only URL, or rendering exception occurs.

## Result interpretation

- Pass only when all rendering and viewer observables pass.
- Fail when generation completes but DSH cannot render/open the attachment.
- Blocked only when image generation itself is externally unavailable, preventing the
  rendering path from being reached.

## Review focus

- Use a new image, Session, and Thread; do not reuse IMG-005 presentation evidence.
- Separate generation failure from rendering failure if the former blocks this case.
