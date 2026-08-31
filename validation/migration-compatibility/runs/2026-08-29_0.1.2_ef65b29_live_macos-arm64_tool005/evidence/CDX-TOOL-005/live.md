# CDX-TOOL-005 Live Evidence

- Pre-edit fixture: regular file, `74` bytes, `4` lines, SHA-256
  `a4026a74d44dfb542c68731f1f3813fe6da3dfaecb4b7ef8df9763cda81a6fb2`.
- The old marker occurred exactly once in the Workspace.
- Precomputed acceptable post-edit size/digest: `73` bytes and
  `c428b48ff5d956982a6133a6becc65286aa96fc0e8cb7f17351f498e2b6e6d25`.
- The fresh Session visibly confirmed `GPT-5.6-Sol Low` and `Workspace Write`.
- First native `dsh__edit` call used the exact path and strings but was rejected before
  mutation because the tool requires the file to be read first.
- Codex recovered using native `dsh__read`, then repeated the same native `dsh__edit`;
  the second edit succeeded. No shell call occurred.
- Independent post-edit inspection found `73` bytes, `4` lines, final LF, and exactly
  the precomputed SHA-256.
- Unified diff contains only line 2:

  ```diff
  -TARGET_VALUE=BEFORE_8642
  +TARGET_VALUE=AFTER_7319
  ```

- Only the target fixture was modified during the counted timestamp window.
- Terminal answer was exactly `EDITED` once; DSH ended normally.
- Turn duration `18.0s`; first token `17.2s`.
- `pre-edit.txt`, `post-edit.txt`, and `exact.diff` preserve the independent oracle;
  `completed.png` records the visible result.
- Browser warning/error diagnostics: `[]`; isolated Host output: none.

Result: **pass**, with a recorded read-before-edit recovery constraint.
