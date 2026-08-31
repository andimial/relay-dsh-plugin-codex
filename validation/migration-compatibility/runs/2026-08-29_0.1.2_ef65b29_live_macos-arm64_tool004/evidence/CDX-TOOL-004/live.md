# CDX-TOOL-004 Live Evidence

- Preflight proved the target was absent and established expected UTF-8 bytes
  `CREATE_MARKER_2468_BNQR\nsecond-line\n` with expected SHA-256
  `7eabc4961671815d45046610cfae038472ce122380a7d32997b9f31e6263c2d2`.
- A first prompt submission accidentally retained `DeepSeek-V4-Flash High`; it failed
  before model execution with `MISSING_CREDENTIAL`, created no target, and is explicitly
  excluded in `setup-error.md`.
- The counted attempt used a fresh Session and visibly confirmed
  `GPT-5.6-Sol Low` plus `Workspace Write` before submission.
- Exact rollout call:

  ```text
  dsh__write({file_path:"write-output/cdx_tool004_created.txt", content:"CREATE_MARKER_2468_BNQR\nsecond-line\n"})
  ```

- Tool output resolved the exact absolute Workspace path and reported `Created file`.
- No shell tool call occurred.
- Independent filesystem inspection found one regular file, `36` bytes, `2` lines,
  exact byte sequence ending in LF, and SHA-256
  `7eabc4961671815d45046610cfae038472ce122380a7d32997b9f31e6263c2d2`.
- Files modified during the counted attempt's minute contained only the exact target;
  no unrelated Workspace write was observed.
- Terminal answer was exactly `CREATED` once.
- Turn completed in `10.8s`; first token `10.6s`.
- `artifact.txt` preserves the exact created bytes and `completed.png` records the
  visible terminal result.
- Browser warning/error diagnostics: `[]`; isolated Host output: none.

Result: **pass**.

Status: in progress.
