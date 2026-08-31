# Codex Fixtures

Fixtures must be deterministic, sanitized, small, and owned by this plugin. Expected
fixture families include:

- text and Unicode markers;
- known images and corrupt-image negative controls;
- a tiny Git project with one intentional test failure;
- global/project/nested Codex configuration layers;
- `AGENTS.md` and `AGENTS.override.md` layers;
- global and project Skills;
- STDIO and HTTP echo MCP servers;
- a local Codex plugin containing a Skill, MCP server, and Hook.

Every case records the fixture path and digest. Never copy a user's actual Codex home
configuration into this directory.

