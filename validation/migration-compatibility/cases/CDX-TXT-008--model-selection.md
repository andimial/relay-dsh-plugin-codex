# CDX-TXT-008 — Model selection

## Traceability

- Primary requirement: `CDX-TXT-008`
- Secondary requirements: none
- Verification levels: `P`, `L`, `W`
- Priority: `P0`

## Objective

Prove that selecting a non-default Codex model in DSH before the first message changes
the actual Codex App Server model used by the business turn.

## Preconditions

- Earlier text cases are closed with reviewed results.
- `GPT-5.6-Luna` appears as an available Codex model in the DSH model selector.
- Use a fresh Session in the isolated linked-plugin profile.

## Method

### Protocol lane

Run the focused adapter test named
`the Codex preset streams reasoning and answers into the native DSH conversation`.
Its deterministic request assertion must forward the selected `codex-test` model to
the runtime message.

### Live DSH Web lane

1. Create a fresh Session and select `Codex`.
2. Open the model selector and choose non-default `GPT-5.6-Luna` before the first
   message; retain the visible selection state.
3. Send exactly:

   ```text
   Respond with exactly CDX_MODEL_008_LUNA and nothing else.
   ```

4. Wait for one exact terminal answer and normal completion.
5. Inspect the sanitized DSH `request/header` and terminal assistant source. Require
   both `config.model` and `source.model` to equal `gpt-5.6-luna`.
6. Confirm the completed composer still displays `GPT-5.6-Luna`, no duplicate answer
   occurs, and browser/Host diagnostics are clean.

## Expected results

- Protocol selected-model forwarding passes.
- DSH visibly shows `GPT-5.6-Luna` before send and after completion.
- Live request header and assistant replay source both identify `gpt-5.6-luna`.
- Exactly one terminal answer equals `CDX_MODEL_008_LUNA`.

## Evidence to retain

- Focused protocol output.
- Selected-state and completed screenshots/DOM.
- Sanitized request header and assistant source model.
- Exact answer count, terminal/composer state, and diagnostics.

## Result interpretation

- Pass only when UI selection and both persisted execution identities match.
- Fail if the default or another model executes, metadata disagrees, or the turn fails.
- Blocked when the selected model is unavailable at execution time or infrastructure
  prevents the live turn.

## Review focus

- A dropdown label alone is insufficient; request and response provenance are the
  decisive observables.
- Select the model before the first business message to avoid testing a mid-Thread
  settings update instead of initial model selection.
