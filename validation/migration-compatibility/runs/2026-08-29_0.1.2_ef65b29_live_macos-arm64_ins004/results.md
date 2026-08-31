# Codex Run Results

| Requirement | Case | Result | Duration | Evidence | Notes |
| --- | --- | --- | --- | --- | --- |
| CDX-INS-004 | `cases/CDX-INS-004--agents-override.md` | pass | 2.9s base; 2.4s override | `evidence/CDX-INS-004/` | Native A/B replaces same-scope base text with override text; UI source label is imprecise |

## Summary

- Passed: 1
- Failed: 0
- Blocked: 0
- Not run: 0
- Applicability boundary: fresh DSH Codex Threads started in the same registered
  directory before and after adding `AGENTS.override.md` and restarting the Host.
