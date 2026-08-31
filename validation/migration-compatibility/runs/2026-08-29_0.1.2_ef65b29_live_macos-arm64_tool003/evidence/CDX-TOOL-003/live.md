# CDX-TOOL-003 Live Evidence

- Fixture SHA-256:
  `55c6eb08589b9b1676e8f749ddbcdb810c84c3c29370f2747aadfde8f5e9cd96`;
  size `81` bytes.
- Workspace preflight found the marker in only the target file.
- Exact rollout call:

  ```text
  dsh__read({file_path:"read-fixture/exact-read.txt"})
  ```

- Tool output resolved the exact absolute Workspace path and returned four numbered
  lines; line 3 was `READ_MARKER_4096_HJLM`.
- No shell tool call occurred.
- Terminal answer was exactly `READ_MARKER_4096_HJLM` once.
- Turn completed in `8.6s`; first token `8.2s`.
- `completed.png` records the visible result.
- Browser warning/error diagnostics: `[]`; isolated Host output: none.

Result: **pass**.
