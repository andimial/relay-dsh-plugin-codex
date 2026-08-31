# CDX-TOOL-010 Validation Review

## Process review

1. **Late-write oracle:** accepted. Existing parent directory removes the false-positive
   risk of a missing-parent failure; target was absent and sentinel fixed before start.
2. **Active-process synchronization:** accepted. Structured live session id and target
   absence were observed before clicking the visible stop control.
3. **User-facing interruption:** accepted. UI displayed `已停止`; rollout and DSH log
   both record a user abort; composer recovered.
4. **Process-session cleanup:** accepted as an intermediate fact only. The session id
   became unknown, but this did not prove descendants were terminated.
5. **Delayed side-effect check:** failed. Waiting longer than the original delay exposed
   the exact late marker, with mtime five seconds after the abort timestamp.
6. **Attribution:** accepted. Target bytes equal the unique command marker and appeared
   at the command's scheduled time; sentinel stayed unchanged.
7. **Diagnostics:** accepted. No browser/Host error confounds the result.

## Reliability assessment

- Immediate UI, Codex abort events, DSH aborted turn, live session identity, independent
  post-delay filesystem time/content/digest, screenshots, and unchanged sentinel converge.
- The case specifically avoids treating disappearance of the process handle as proof of
  OS-process termination; the late artifact demonstrates why that distinction matters.

Confidence: **high**.

Reviewed result: **fail**. The method is reasonable and reliably closes
`CDX-TOOL-010` before starting `CDX-TOOL-011`.
