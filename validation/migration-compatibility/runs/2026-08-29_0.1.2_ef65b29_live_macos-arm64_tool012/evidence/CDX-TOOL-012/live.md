# CDX-TOOL-012 Live Evidence

- Preflight fixed nested HEAD, index digest/mtime, three file digests, empty staged diff,
  exact status, and exact unstaged diff in `pre-state.md`.
- Fresh Session visibly used `GPT-5.6-Sol Low` and `Workspace Write`.
- One exact native shell call ran the combined status/diff command in the selected
  Workspace. Its wrapper forwarded exact output but discarded the structured exit field.
- Output exactly reported ` M tracked.txt`, `?? new.txt`, and only
  `BASE=ONE_3141` → `BASE=TWO_2718` with the keep line unchanged.
- DSH persisted the correct semantic interpretation.
- Independent postflight matched HEAD, index bytes and mtime, worktree hashes, file set,
  status, diff, and empty staged diff exactly to preflight.
- A progress sentence preceded the requested exact-only reply; minor response deviation.
- Turn completed normally in `12.3s`; first token `8.5s`.
- Browser warning/error diagnostics: `[]`; isolated Host output: none.

Result: **pass**, with discarded shell-exit metadata recorded.
