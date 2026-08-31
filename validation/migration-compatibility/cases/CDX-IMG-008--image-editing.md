# CDX-IMG-008 — Image editing

## Traceability

- Primary requirement: `CDX-IMG-008`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P1`

## Objective

Prove that Codex can edit a user-attached source image by changing one requested
property while preserving undisclosed foreground content exactly enough to remain
recognizable and readable.

## Fixture

- Source PNG: `fixtures/image-edit/source.png`.
- Source: white background, blue hexagon, internal white marker `KEEP_73`.
- Dimensions: `900 × 600`, RGBA.
- SHA-256:
  `3d72ef5b29409cfe1120c22e7dab2eac9868577a466dd5b3310b71f18d03c71b`.

## Preconditions

- `CDX-IMG-007` is closed.
- Fresh DSH Session uses `GPT-5.6-Sol Low` in the sanitized Workspace.

## Method

1. Create a fresh Codex Session and paste the exact source PNG once.
2. Confirm one pending preview, then send exactly:

   ```text
   Edit the attached source image. Change only its background from white to solid pale yellow. Preserve every foreground shape, color, position, and text exactly. Return the edited PNG artifact directly.
   ```

3. Require a new generated image block, not the unchanged source attachment or URL.
4. Inspect the exact Codex rollout to confirm the source image reached the editing
   call, and retain both source/output attachment identities.
5. Verify output decodes as PNG, background changes to pale yellow, and the undisclosed
   blue hexagon plus `KEEP_73` marker remain visible.
6. Retain source-preview/completed screenshots, output bytes, events, rollout, and
   diagnostics.

## Expected results

- Codex receives the source image and produces a distinct valid PNG.
- Only the background property changes materially.
- The blue hexagon and `KEEP_73` marker remain present and readable.

## Result interpretation

- Pass only when source transport, edited artifact, requested change, and protected
  content preservation all pass.
- Fail if the source is absent, no artifact is returned, background is unchanged, or
  protected content is lost/altered.
- Blocked only for external infrastructure failure unrelated to plugin behavior.

## Review focus

- Do not disclose `KEEP_73` in the live prompt.
- Do not infer failure from earlier input cases; inspect this new Thread directly.
