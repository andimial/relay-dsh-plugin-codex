# Codex Run Results

| Requirement | Case | Result | Duration | Evidence | Notes |
| --- | --- | --- | --- | --- | --- |
| CDX-SES-007 | `cases/CDX-SES-007--long-context-compaction-continuation.md` | pass | 9.91s native compaction; 6.4s recall | `evidence/CDX-SES-007/` | Same Thread records compaction and exactly recalls the hidden marker; internal DSH Session re-key retained as a limitation |

## Summary

- Passed: 1
- Failed: 0
- Blocked: 0
- Not run: 0
- Applicability boundary: native App Server compaction is supported; the tested DSH
  product surface does not expose a user-triggerable compact command.
