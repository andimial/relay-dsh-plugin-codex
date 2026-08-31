# Codex Run Results

| Requirement | Case | Result | Duration | Evidence | Notes |
| --- | --- | --- | --- | --- | --- |
| CDX-ENV-003 | `cases/CDX-ENV-003--secret-redaction.md` | fail | 8.0s native turn | `evidence/CDX-ENV-003/` | Consumer succeeds, but literal is persisted in two Codex shell snapshots |

## Summary

- Passed: 0
- Failed: 1
- Blocked: 0
- Not run: 0
- Applicability boundary: a sanitized Host environment secret consumed without any
  explicit environment-inspection request.
