# CDX-TOOL-010 Live Evidence

- Target absence and unchanged parent sentinel were established before execution.
- Fresh Session visibly used `GPT-5.6-Sol Low` and `Workspace Write`.
- Exact native shell call yielded live `session_id: 84777` after one second with no
  target yet present.
- Synchronized `active-before-stop.png` shows the live turn and stop control.
- Clicking stop produced an aborted poll result, a Codex `turn_aborted` event, a DSH
  aborted `turn/end`, visible `已停止`, and an immediately unusable shell session id.
- Nevertheless, the target appeared about five seconds after the recorded abort, at the
  original delayed write time.
- After the 17-second safety window it contained exact `LATE_MARKER_5127\n`; retained
  artifact and Workspace target share SHA-256
  `fb493f623a45aae4a11c049de455f34ef4d459ed4786639764a4307771938f1e`.
- Sentinel remained byte- and time-identical; no terminal completion text appeared.
- `immediate-stopped.png` and `after-safety-window.png` show the DSH state remained
  stopped and usable despite the late filesystem side effect.
- Browser warning/error diagnostics: `[]`; isolated Host output: none.

Result: **fail**. Stop aborts the turn/poll but does not prevent the late child write.
