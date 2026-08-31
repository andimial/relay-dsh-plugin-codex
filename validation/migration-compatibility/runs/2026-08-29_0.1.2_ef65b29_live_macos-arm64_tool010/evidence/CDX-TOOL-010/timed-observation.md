# CDX-TOOL-010 Timed Observation

- Preflight: target absent; sentinel SHA-256
  `4d66a532357b33a0473c2ab6f14533b1fefae6c279cf350af5c41b77377713df`.
- Shell live-yield timestamp: `2026-08-29T03:45:08.204Z`; `session_id: 84777`;
  target absent.
- The visible `停止生成` control was clicked while the process was live.
- Poll cancellation result: `aborted by user after 4.5s` at
  `2026-08-29T03:45:17.310Z`.
- Codex `turn_aborted` timestamp: `2026-08-29T03:45:17.325Z`, reason `interrupted`.
- DSH immediately displayed `已停止`, restored the composer, and persisted an aborted
  turn.
- Querying shell `session_id: 84777` immediately afterward returned `Unknown process id`.
- Target later appeared with filesystem mtime `2026-08-29 11:45:22 +0800`, about five
  seconds after the abort event and at the original command's scheduled 15-second point.
- After the 17-second safety window, target was a 17-byte regular file containing exact
  bytes `LATE_MARKER_5127\n`, SHA-256
  `fb493f623a45aae4a11c049de455f34ef4d459ed4786639764a4307771938f1e`.
- Sentinel digest and mtime remained unchanged.

The evidence distinguishes UI/turn cancellation from child-process termination: the
former succeeded, while the delayed child write still occurred.
