# Codex Run Results

| Requirement | Case | Result | Duration | Evidence | Notes |
| --- | --- | --- | --- | --- | --- |
| CDX-CFG-003 | `cases/CDX-CFG-003--config-precedence.md` | pass | 13.1s user; 13.6s project | `evidence/CDX-CFG-003/` | Same identity resolves to user source outside project and project source inside trusted project |

## Summary

- Passed: 1
- Failed: 0
- Blocked: 0
- Not run: 0
- Applicability boundary: exact MCP server-name collision between isolated user config
  and trusted project config.
