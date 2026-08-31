# CDX-EXT-016 Install and Cleanup Evidence

- Before baseline, the isolated profile, preset, and first rollout contained no fixture
  package/tool identifier.
- The fixture link was added only to the isolated profile dependencies and ordered DSH
  bundle list; offline `pnpm` installed its exact source symlink.
- `dsh --profile web --dump-config` showed row
  `relay-validation-late-tool-1616` from bundle
  `relay-dsh-validation-late-tool-1616` after the Codex host row.
- The isolated Host restarted cleanly at `http://127.0.0.1:4392/`.
- After evidence capture, both profile entries were removed, offline installation was
  reconciled, the Host restarted, and a new dump-config plus profile search contained
  no fixture identifier.
- Restored App Server args are the normal
  `-c features.code_mode_host=true app-server --analytics-default-enabled`.
- No real user Codex configuration or plugin cache was changed.
