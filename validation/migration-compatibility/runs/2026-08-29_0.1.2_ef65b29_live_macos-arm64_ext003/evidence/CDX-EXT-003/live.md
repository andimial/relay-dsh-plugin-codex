# CDX-EXT-003 Live Evidence

- Fresh Standard Session: positive project Workspace, `GPT-5.6-Sol Low`,
  `Workspace Write`.
- User sent the exact `$cdx-project-oracle-7349` invocation; the user prompt omitted
  the oracle value.
- Codex appended full `<skill>` content with the exact project path and oracle.
- No tool/function call occurred.
- Terminal, persisted, and visible result: `PROJECT_SKILL_ORACLE_7349_QVNX`.
- DSH completed normally in 8.7 seconds.
- Post-run Skill digest remained
  `7df1c6a768555d2518da1bba3c8b19b48df616f02c3ef6fc9ad286bffd381150`;
  the marker still occurs only in that Skill inside the Workspace.

Result: **pass**. Explicit project Skill invocation resolves, injects its contents, and
returns its unique result through the owning DSH Session.
