# CDX-EXT-015 Native Rollout Evidence

- Source: `rollout-2026-08-29T13-40-29-01a04c08-a2e1-7b70-9217-34ebb84cf3be.jsonl`.
- Thread: `01a04c08-a2e1-7b70-9217-34ebb84cf3be`.
- The native `session_meta.payload.dynamic_tools` contains namespace `dsh`, described
  as tools contributed through the DSH plugin runtime, and includes function `read`
  with required string property `file_path` plus optional `offset` and `limit`.
- The turn made one unified custom call. Its exact JavaScript invoked only
  `tools.dsh__read({file_path:"dsh-tool/ext015-probe.txt", limit:2000, offset:1})`.
- The custom output resolves the expected absolute Workspace path and contains exactly
  the two numbered fixture lines followed by the two-line EOF summary.
- No shell, grep, search, MCP, retry, or second tool call appears in the turn.
- Final native assistant text is exactly `DSH_NAMESPACE_PROBE_1515_QKMR`.
- Rollout SHA-256:
  `94d8663859467bb7191f687916e7cdcd84ed47ea6654b0c3c0474bb1fa24db7c`.
