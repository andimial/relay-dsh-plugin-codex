# CDX-EXT-007 Live Evidence

- Direct project-server initialize/list/call oracle passed.
- Positive trusted Workspace: exact project MCP call, text/structured result, server
  log, DSH display/persistence, normal 14.4-second completion.
- Sibling Workspace was added through DSH's directory picker and visibly selected.
- First negative branch returned the right token without authoritative enumeration and
  was excluded.
- Fresh negative retry used exactly one `exec` to filter real `ALL_TOOLS`; output was
  empty, MCP event count zero, result `PROJECT_MCP_ABSENT`, 9.1-second completion.
- Project server log received no negative-branch event.
- Project/server/control/real-user-config digests remained unchanged. Isolated global
  config added normal trust state for the sibling Workspace and is not used as a fixed
  fixture digest.

Result: **pass**. Trusted project MCP execution works and the server/tool does not leak
into an unrelated Workspace.
