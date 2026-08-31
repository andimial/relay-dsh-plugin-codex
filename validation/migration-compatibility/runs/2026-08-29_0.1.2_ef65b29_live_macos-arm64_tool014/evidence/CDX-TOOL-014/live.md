# CDX-TOOL-014 Live Evidence

- DSH mode menu was inspected before execution: no Codex Plan collaboration mode is
  selectable; Standard is the relevant migration surface.
- Fresh Session visibly used Standard mode, `GPT-5.6-Sol Low`, and `Workspace Write`.
- Built-in `request_user_input` returned `unavailable in Default mode` without pausing.
- Codex recovered by calling plugin-native `dsh__ask_user_question` with exact question,
  two exact options, single-select, and correct recommendation label.
- DSH changed Session state to `等待回答`, displayed a real accessible question region,
  and did not produce a terminal answer before user input.
- `paused.png` captures both unselected options. `answered.png` captures only
  `BLUE_7319` checked and the submit control enabled.
- Submitting returned structured selected value `BLUE_7319 (Recommended)` to the same
  tool call. Codex then produced exact `SELECTED_BLUE_7319` in the same turn/thread.
- `completed.png` captures the terminal result and restored composer.
- Total tool call wall time while waiting for the user: `19.8s`; DSH turn `34.9s`.
- Browser warning/error diagnostics: `[]`; isolated Host output: none.

Result: **pass**, via the plugin's Default-mode question-tool fallback.
