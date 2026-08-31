# Codex Run Results

| Requirement | Case | Result | Duration | Evidence | Notes |
| --- | --- | --- | --- | --- | --- |
| CDX-INS-003 | `cases/CDX-INS-003--nested-agents-md.md` | pass | 8.7s nested; 7.2s root | `evidence/CDX-INS-003/` | Native chain includes root+nested only at nested cwd; parent root excludes nested rule |

## Summary

- Passed: 1
- Failed: 0
- Blocked: 0
- Not run: 0
- Applicability boundary: DSH Workspace cwd at a project subdirectory with nested
  `AGENTS.md`.
