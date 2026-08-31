# CDX-TOOL-009 Retry Validation Review

## Process review

1. **Timing oracle:** accepted. Structured timestamps establish a greater-than-13-second
   interval between first and last output.
2. **Synchronization:** accepted. Detection required a custom tool output containing the
   first marker plus live `session_id`, and absence of the last-marker output, before UI
   capture.
3. **Process identity/order:** accepted. One initial `exec_command`, then `write_stdin`
   on the same session; ordered markers and exit 0.
4. **User-visible criterion:** failed. During the synchronized live interval, DSH showed
   neither a tool row nor the first output marker; completion history also omitted both.
5. **Input/output distinction:** accepted. Marker strings inside the echoed user prompt
   are not output and were explicitly excluded.
6. **Persistence corroboration:** accepted. DSH Session log has no tool-output event and
   persists only progress text plus `STREAM_DONE`.
7. **Terminal health:** accepted. The turn ended normally with clean diagnostics, so the
   failure is presentation/forwarding rather than process execution.

## Reliability assessment

- The invalid eight-second run was not counted. The retry fixed its precise sampling
  weakness and directly observed the required interval.
- Rollout timestamps, live session identity, synchronized screenshot, DOM state, DSH
  event inventory, completion screenshot, and diagnostics independently converge.

Confidence: **high**.

Reviewed result: **fail**. The method is reasonable and reliably closes
`CDX-TOOL-009` before starting `CDX-TOOL-010`.
