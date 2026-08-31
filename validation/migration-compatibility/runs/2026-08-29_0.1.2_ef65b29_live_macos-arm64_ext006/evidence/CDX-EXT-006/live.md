# CDX-EXT-006 Live Evidence

- Direct protocol oracle passed initialize, list, and exact call.
- Isolated `CODEX_HOME` global config exposed the fixture server as enabled; real user
  config remained byte-identical.
- Isolated DSH Host ran current linked plugin on port 4392 and used the exact fixture
  Workspace/model/settings.
- Server process logs prove initialization, discovery, and exact call input.
- Codex native MCP event proves exact configured server/tool provenance, read-only hint,
  text result, and structured result.
- DSH displayed/persisted exact `STDIO_GLOBAL_OK_8426_XRQM` and completed normally.
- Fixture server digest remained unchanged.

Result: **pass**. A user-global STDIO MCP can start, advertise, execute, and deliver its
result end to end through the current Codex plugin.
