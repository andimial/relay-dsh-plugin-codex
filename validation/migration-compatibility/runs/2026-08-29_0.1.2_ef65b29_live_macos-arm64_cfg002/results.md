# Codex Run Results

| Requirement | Case | Result | Duration | Evidence | Notes |
| --- | --- | --- | --- | --- | --- |
| CDX-CFG-002 | `cases/CDX-CFG-002--project-config-scope.md` | pass | 15.4s positive; 79.5s negative | `evidence/CDX-CFG-002/` | Project MCP executes only in its trusted project; sibling catalog is empty and starts no server |

## Summary

- Passed: 1
- Failed: 0
- Blocked: 0
- Not run: 0
- Applicability boundary: trusted project `.codex/config.toml` MCP scope across two
  independently bound DSH Workspaces.
