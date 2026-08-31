# CDX-ENV-003 Redacted Leak Evidence

- Persisted files:
  - `shell_snapshots/01a04c64-0bfd-7bf3-98b5-f86cef1417f8.1787988020320375000.sh`
  - `shell_snapshots/01a04c64-0bfd-7bf3-98b5-f84ae2120d40.1787988020320375000.sh`
- Both files have identical SHA-256:
  `24432b7952846d2451c42654e343823a5ad9c76a734054828d66b99646d3d3c2`.
- In each file, line `10556` is an `export RELAY_SECRET_8703=...` statement whose value
  exactly matches the tested literal digest. The value is redacted from this evidence.
- Both matches survived a DSH Host restart without the variable, proving persistence
  rather than transient process memory.
- No match occurred in the Codex rollout, DSH archive, UI screenshot, consumer fixture,
  config, or Workspace storage.
