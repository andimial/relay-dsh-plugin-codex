# CDX-TXT-005 — Reasoning presentation

## Traceability

- Primary requirement: `CDX-TXT-005`
- Secondary requirements: none
- Verification levels: `P`, `L`, `W`
- Priority: `P1`

## Objective

Prove that Codex reasoning deltas and final text deltas remain distinct through the
adapter and appear in DSH Web as a separate reasoning disclosure plus one
non-duplicated terminal answer.

## Preconditions

- `CDX-TXT-001` through `CDX-TXT-004` have reviewed passes.
- Current plugin is linked into the isolated supported DSH profile.
- Use a fresh Codex Session under the sanitized fixture.
- Select the `High` reasoning effort before sending so the test intentionally asks
  the backend to produce reasoning presentation. A completed turn that emits no
  reasoning event under `Low` is an allowed `not-applicable` preflight, not evidence
  for or against reasoning rendering.

## Method

### Protocol lane

Run the focused adapter test named
`the Codex preset streams reasoning and answers into the native DSH conversation`.
Confirm it separately yields `reasoning-delta: Checked the workspace.` and
`text-delta: done`.

### Live DSH Web lane

1. Create a fresh Session, select `Codex`, and select reasoning effort `High` before
   the first message.
2. Send exactly:

   ```text
   Compute 173 × 29 internally. In the final answer output exactly CDX_REASON_FINAL_005_5017 and nothing else.
   ```

3. Wait for terminal completion.
4. Confirm exactly one terminal assistant paragraph equals
   `CDX_REASON_FINAL_005_5017`.
5. Confirm a separate visible reasoning disclosure/control is present, expand it,
   and record its non-empty accessible text/DOM structure.
6. Confirm the reasoning disclosure and terminal paragraph are distinct elements,
   the final paragraph is not duplicated, the turn is terminal, and the composer is
   usable.
7. Retain collapsed/expanded evidence as useful, plus browser/Host diagnostics.
8. If the High-effort primary turn produces a reasoning block with empty text, do not
   immediately attribute the absence to presentation. Run one confirmation attempt
   in a second fresh High-effort Codex Session using this materially harder,
   no-tools prompt:

   ```text
   Without using tools, internally derive the exact value of (123456789 × 987654321) + (17^8 - 19^6) and cross-check it two different ways. In the final answer output exactly CDX_REASON_CONFIRM_005 and nothing else.
   ```

   Inspect both the Web disclosure and sanitized DSH session events. Fail for empty
   reasoning presentation only when both High-effort turns contain an empty reasoning
   block while their final text completes correctly.

## Expected results

- Protocol reasoning and text deltas remain separate.
- DSH Web exposes a dedicated reasoning disclosure (`Think` or localized equivalent)
  separate from the terminal answer.
- The disclosure has non-empty content when expanded.
- Exactly one assistant terminal paragraph contains the exact final marker.
- No second terminal projection, error, or ongoing generation remains.

## Evidence to retain

- Focused protocol output and asserted channel values.
- DOM identity/count/text for reasoning disclosure and terminal paragraph.
- Expanded reasoning and completed-state screenshot(s).
- Sanitized browser/Host diagnostics and exact environment metadata.

## Result interpretation

- Pass only when both protocol separation and visible Web separation pass.
- Fail if reasoning is absent, merged into the final paragraph, or the final answer is
  duplicated; also fail if the turn does not complete.
- Blocked only when infrastructure prevents the live turn or UI inspection.

## Review focus

- Do not judge or expose hidden chain-of-thought. Validate only the product-provided
  reasoning summary/disclosure presentation.
- Do not treat a button label alone as proof of non-empty reasoning; expand and
  inspect its accessible content.
