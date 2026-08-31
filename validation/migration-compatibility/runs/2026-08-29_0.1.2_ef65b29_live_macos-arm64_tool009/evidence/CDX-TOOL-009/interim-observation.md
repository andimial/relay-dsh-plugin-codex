# CDX-TOOL-009 Invalid Timed Observation

- `interim.png`: turn still running; only the progress sentence was visible. Later
  rollout timing showed this sample preceded the first structured shell yield.
- `interim-after-first-yield.png`: despite its provisional filename, the turn had
  already completed and only `STREAM_DONE` was visible.
- Backend rollout ultimately contained one live session yield with
  `STREAM_FIRST_4102`, then a poll result with `STREAM_LAST_8604` and exit 0.
- Because no UI sample was synchronized inside that interval, this run cannot establish
  whether the first marker was user-visible before completion.

Disposition: invalid capture, not a product result; retry with a fifteen-second interval
and detection of the live `session_id` before browser capture.
