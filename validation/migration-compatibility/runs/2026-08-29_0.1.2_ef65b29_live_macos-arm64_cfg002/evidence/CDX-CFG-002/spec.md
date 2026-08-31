# CDX-CFG-002 Specification Evidence

- Primary requirement: `CDX-CFG-002`, priority `P0`, verification levels `L` and `W`.
- Case: `cases/CDX-CFG-002--project-config-scope.md`.
- Pass requires both branches: exact project MCP execution in the configured project
  and exact catalog absence with no server activity in the sibling project.
- The two branches use fresh DSH Sessions and Codex Threads with identical model,
  effort, access mode, approval policy, and isolated Host.
