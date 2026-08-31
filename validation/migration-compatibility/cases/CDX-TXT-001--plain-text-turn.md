# CDX-TXT-001 — Plain text turn

## Traceability

- Primary requirement: `CDX-TXT-001`
- Secondary requirements: none
- Verification levels: `P`, `L`, `W`
- Priority: `P0`

## Objective

Prove that the current Codex plugin accepts one direct plain-text DSH user message,
starts a real Codex App Server turn, and renders exactly one terminal assistant
answer in the native DSH conversation.

## Preconditions

- Plugin source is built from the commit recorded by the run.
- Official DSH is the version and commit recorded by the run.
- The current OS user has valid Codex authentication.
- The run uses an isolated DSH profile and a sanitized Workspace.
- The protocol lane uses the deterministic adapter fixture in
  `test/dsh-adapter.test.mjs`.

## Method

### Protocol lane

1. Run:

   ```bash
   node --test \
     --test-name-pattern="the Codex preset streams reasoning and answers into the native DSH conversation" \
     test/dsh-adapter.test.mjs
   ```

2. Confirm that the focused adapter test passes and that no other test failure is
   reported.

### Live DSH Web lane

1. Build the current plugin.
2. Install it into a new isolated official DSH Web profile.
3. Start DSH Web on loopback and connect a sanitized Workspace.
4. Create a new Session and choose the `Codex` mode before the first message.
5. Send exactly:

   ```text
   Respond with exactly CDX_TXT_001_OK_8F31 and nothing else.
   ```

6. Wait for the turn to reach its terminal state.
7. Inspect the visible conversation and retain a screenshot and a machine-readable
   text/DOM excerpt.
8. Inspect Host output for App Server or browser runtime errors associated with the
   turn.

## Expected results

- The direct user message is visible once.
- Exactly one terminal assistant answer contains `CDX_TXT_001_OK_8F31`.
- The answer is not duplicated by partial/final projection.
- The turn reaches normal completion and the composer becomes usable again.
- No tool call is required for this case.
- No App Server, DSH Host, or browser runtime error explains or replaces the answer.

## Evidence to retain

- Focused protocol test output summary.
- Visible conversation text or DOM excerpt.
- Completed DSH Web screenshot.
- Relevant sanitized Host/browser diagnostics.
- Exact plugin, Codex, DSH, OS, and browser versions.

## Result interpretation

- Pass when every expected result is present in both lanes.
- Fail when the request is rejected, the answer is missing or duplicated, the wrong
  backend answers, or the turn does not complete.
- Blocked when authentication, DSH startup, or browser infrastructure prevents the
  live lane from reaching the Codex turn.

