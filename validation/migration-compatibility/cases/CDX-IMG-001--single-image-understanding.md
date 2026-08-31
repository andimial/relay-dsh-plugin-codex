# CDX-IMG-001 — Single-image understanding

## Traceability

- Primary requirement: `CDX-IMG-001`
- Secondary requirements: none
- Verification levels: `P`, `L`, `W`
- Priority: `P0`

## Objective

Prove that one synthetic local PNG attached to a DSH Codex message is forwarded as a
Codex image input and that the real model correctly interprets its deterministic
visual composition.

## Fixture

- PNG: `fixtures/image-understanding/single-shapes.png`
- SVG source: `fixtures/image-understanding/single-shapes.svg`
- Dimensions: `800 × 500`, RGBA PNG
- PNG SHA-256: `71e3ef8768ea6f1c04541bba803dff365ef41c8234c589958045eebd2f4e9d5d`
- Visual oracle: exactly three red circles in the upper row and exactly two blue
  triangles in the lower row; no textual labels are present.

## Preconditions

- Text cases are closed with reviewed results.
- Current plugin is linked into the isolated supported DSH profile.
- Use a fresh Codex Session under the sanitized fixture Workspace.

## Method

### Protocol lane

Run only the test named `user image messages are forwarded as Codex local image inputs`.
Confirm the adapter forwards user text and one exact local image path/fsPath/label.

### Live DSH Web lane

1. Create a fresh Session and select `Codex` before the first message.
2. Copy the exact PNG bytes to the browser clipboard and paste them into the DSH
   composer (the DSH 0.1.0-rc.8 UI exposes pasted images rather than a file input).
   Confirm one visible pending-image preview named `clipboard.png` before sending.
3. Send exactly:

   ```text
   Count only the red circles and blue triangles in the attached image. Reply exactly as RED_CIRCLES=n;BLUE_TRIANGLES=n with digits substituted, and nothing else.
   ```

4. Wait for one terminal assistant paragraph exactly equal to:

   ```text
   RED_CIRCLES=3;BLUE_TRIANGLES=2
   ```

5. Inspect sanitized persisted user/request data to confirm one image input belongs to
   the business message and is stored as the expected DSH `clipboard.png` attachment.
6. Confirm the conversation visibly preserves the attachment, the answer is unique,
   no tool call is used, and the composer is usable.

## Expected results

- Protocol local-image forwarding passes.
- One PNG attachment is visible before send and in the conversation after send; the
  preview/store label is `clipboard.png` while fixture identity is anchored by the
  original bytes' SHA-256.
- Real Codex returns the exact visual count once.
- Persisted message/request evidence contains exactly one corresponding image input.
- No browser/Host error or duplicate answer occurs.

## Evidence to retain

- Focused protocol output.
- Fixture dimensions/hash and original-resolution inspection.
- Pre-send attachment and completed screenshots/DOM.
- Sanitized persisted image-input metadata.
- Exact answer/terminal/composer and diagnostic checks.

## Result interpretation

- Pass only when forwarding, visible attachment, exact visual oracle, and terminal
  health all pass.
- Fail when the image is omitted/misrouted, counts are wrong, answer duplicates, or
  the turn fails after valid attachment.
- Blocked when browser upload, authentication, or model service prevents reaching the
  image turn.

## Review focus

- The PNG contains no text, so OCR cannot accidentally satisfy the count oracle.
- Do not accept a correct answer without persisted/visible proof that the image was
  actually attached to the business message.
