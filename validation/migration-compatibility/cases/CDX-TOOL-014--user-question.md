# CDX-TOOL-014 — User question

## Traceability

- Primary requirement: `CDX-TOOL-014`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that a Codex turn can pause on a structured user question, visibly collect one
selected option, and resume the same turn with that exact value.

## Preconditions

- `CDX-TOOL-013` is closed.
- Fresh Session uses sanitized Workspace, `GPT-5.6-Sol Low`, `Standard` mode, and
  `Workspace Write`.
- DSH exposes no Codex `Plan` collaboration-mode selector; its available Session modes
  are Standard, PTC, Minimal, Create, and Codex preset. The user-facing Standard mode is
  the migration path under test. Ordinary assistant prose is not an acceptable
  substitute for structured user input.

## Method

1. Create a fresh Standard-mode Session and send exactly:

   ```text
   Before doing anything else, use the structured user-input question tool to ask: "Choose the deployment color." Offer exactly two options: BLUE_7319 (recommended) and AMBER_2846. Do not choose for me. After I answer, reply SELECTED_<answer> only.
   ```

2. Require a structured question tool call and a visible paused question UI before any
   terminal answer.
3. Capture paused state, select `BLUE_7319`, submit through the question UI, and require
   the same turn to resume.
4. Verify tool result carries the selected value and DSH persists terminal
   `SELECTED_BLUE_7319`.
5. Retain paused/answered/completed screenshots, rollout/Session events, diagnostics.

## Expected results

- Turn pauses with exactly the requested question and two options.
- User selection is visibly submitted and returned as structured tool output.
- Same turn continues with exact selected value; no inferred/default answer.

## Result interpretation

- Pass only for a real structured pause/answer/resume path.
- Fail for ordinary prose question, auto-selection, unavailable/unrendered question,
  wrong value, or a new unrelated turn.
- Blocked only when Plan mode itself cannot be selected due external UI infrastructure.

## Review focus

- Prove the answer came from the UI/tool result, not from the option named recommended.
