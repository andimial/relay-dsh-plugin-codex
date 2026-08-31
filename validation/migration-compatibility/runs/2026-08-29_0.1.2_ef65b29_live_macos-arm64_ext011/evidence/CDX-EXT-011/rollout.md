# DSH-Backed Codex Rollout Evidence

- Source: `rollout-2026-08-29T13-13-14-01a04bef-af26-72f1-91cf-32e44d4ebd8f.jsonl`.
- Exactly one `exec_command` ran the pinned Codex binary with `plugin list` and exited
  zero in 0.2 seconds.
- Its raw output contained the exact marketplace heading and the same installed,
  enabled, version, and source-path row as the independent operator oracle.
- Native MCP completion count was zero; no plugin Skill, MCP tool, or Hook was invoked.
- Final answer was exactly `PLUGIN_DISCOVERED_1173`.
- One user-visible progress sentence preceded the tool call despite the requested final
  marker-only format; this does not affect the discovery result and is recorded as a
  minor presentation deviation.
- Retained `attempt-1-invalid-path.png` corresponds to a precondition failure:
  unqualified `codex` was absent from task `PATH` and exited 127. It did not inspect or
  alter plugin state and is excluded from the result.
