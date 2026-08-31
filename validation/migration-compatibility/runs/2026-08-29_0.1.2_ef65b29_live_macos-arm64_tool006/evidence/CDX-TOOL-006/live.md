# CDX-TOOL-006 Live Evidence

- Pre-state contained exactly three files and `173` bytes. Their exact content and
  SHA-256 values are retained in `pre/` and `pre-manifest.md`.
- Each requested old marker occurred exactly once in the Workspace.
- Expected post-state hashes were calculated before model execution.
- Fresh Session visibly used `GPT-5.6-Sol Low` and `Workspace Write`.
- Codex issued one combined native call that read `alpha.txt` and `beta.txt` in
  parallel, then one combined native call that edited both exact paths in parallel.
- No shell call occurred and the rollout did not access `decoy.txt`.
- Independent full-directory inspection proved:
  - `alpha.txt` matched expected SHA-256
    `68d08171221c7ed167d4fc743abfcb3d51b48f70c28026fbdd12cc9da0266085`;
  - `beta.txt` matched expected SHA-256
    `5eae38c27fd06be1ec3d3db1dd813c0497a34d7dabab09e1882aad6f50d2ace3`;
  - `decoy.txt` remained at SHA-256
    `092f52103f762cbc9e2de7ffbd86d3cac5c006d12d0cb68b242a81d7895b8c45`;
  - file set, total bytes, line counts, and final newlines were unchanged.
- The combined diff contains exactly the two requested line replacements.
- DSH persisted the progress sentence and `MULTI_EDITED`; the response therefore did
  not obey the auxiliary “reply only” instruction literally.
- Turn completed normally in `14.6s`; first token `7.1s`.
- Browser warning/error diagnostics: `[]`; isolated Host output: none.

Result: **pass** for multi-file edit capability, with a response-exactness deviation.
