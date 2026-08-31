# CDX-TOOL-009 Retry Live Evidence

- Fresh Session visibly used `GPT-5.6-Sol Low` and `Workspace Write`.
- Exact command used a fifteen-second separation and `yield_time_ms: 1000`.
- Rollout returned `STREAM_FIRST_4102\n` with live `session_id: 88699`, then returned
  `STREAM_LAST_8604\n` with exit 0 from a poll of the same session.
- A detector synchronized browser capture after the first structured output was on disk
  and before the second existed. The two tool outputs were separated by more than 13
  seconds, so the capture window is reliable.
- At that exact moment, DSH visibly showed a running turn and one assistant progress
  sentence, but no tool row/output and no new first marker. The user's prompt contains
  both marker strings and is excluded as input echo.
- Completion UI persisted only the progress sentence and `STREAM_DONE`; no streamed
  marker appeared in the assistant history.
- DSH Session events likewise contain no tool-output event and neither marker in the
  model response.
- Turn completed normally in `31.6s`; first token `9.5s`.
- `interim-synchronized.png` and `completed.png` preserve both UI states.
- Browser warning/error diagnostics: `[]`; isolated Host output: none.

Result: **fail**. Backend output streams, but intermediate output is not user-visible.
