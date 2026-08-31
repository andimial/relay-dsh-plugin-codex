# CDX-TXT-009 — Reasoning effort selection

## Traceability

- Primary requirement: `CDX-TXT-009`
- Secondary requirements: none
- Verification levels: `P`, `L`, `W`
- Priority: `P0`

## Objective

Prove that a non-default reasoning effort selected in DSH is represented correctly by
the plugin and reaches the real Codex App Server request for the business turn.

## Preconditions

- Earlier text cases are closed with reviewed results.
- A fresh `GPT-5.6-Sol` Codex Session defaults to `Low` and lists `High` as supported.
- Current plugin is linked into the isolated supported DSH profile.

## Method

### Protocol lane

Run only these named tests:

- `Codex reasoning efforts use compact native selector labels`;
- `model and reasoning changes are synced through native thread settings updates`.

Require both to pass. They cover effort-option mapping and an effort update reaching
`thread/settings/update` before `turn/start`.

### Live DSH Web lane

1. Create a fresh Session and select `Codex`; retain the default
   `GPT-5.6-Sol / Low` state.
2. Change only reasoning effort to `High` before the first message and retain the
   exact selected state.
3. Send exactly:

   ```text
   Respond with exactly CDX_EFFORT_009_HIGH and nothing else.
   ```

4. Wait for one exact terminal answer.
5. Inspect sanitized persisted events. Require `request/header.config.model` to equal
   `gpt-5.6-sol` and `reasoningEffort` to equal `high`; require terminal assistant
   source model to remain `gpt-5.6-sol`.
6. Confirm the completed control still shows `High`, the answer is unique, and the
   Session is terminal/usable.

## Expected results

- Both focused protocol tests pass.
- UI changes from Sol/Low to Sol/High before sending.
- The real request records Sol/High, without an unintended model change.
- Exactly one terminal answer equals `CDX_EFFORT_009_HIGH`.

## Evidence to retain

- Focused protocol outputs.
- Before/after selected-state DOM/screenshots.
- Sanitized request configuration and assistant source.
- Exact answer, terminal/composer, and diagnostic checks.

## Result interpretation

- Pass only when option mapping, protocol synchronization, UI selection, and live
  request metadata all match.
- Fail if effort remains Low, another value executes, model changes unexpectedly, or
  the turn fails.
- Blocked only when the effort/model is unavailable or infrastructure prevents the turn.

## Review focus

- This case validates effort selection/forwarding, not whether the chosen backend
  emits non-empty reasoning summaries; `CDX-TXT-005` owns presentation content.
