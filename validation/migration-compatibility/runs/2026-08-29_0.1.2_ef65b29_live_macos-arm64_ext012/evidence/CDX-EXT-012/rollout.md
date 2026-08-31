# Plugin Skill Rollout Evidence

- Source: `rollout-2026-08-29T13-18-59-01a04bf4-f4af-7d31-a465-45df0dfc595a.jsonl`.
- Pre-turn catalog advertised exact namespaced identity
  `relay-migration-fixture-1173:relay-skill-1212`.
- Catalog source was the exact installed cache version:
  `/private/tmp/relay-cdx-ext006.zqpFm7/codex-home/plugins/cache/relay-validation-1173/relay-migration-fixture-1173/0.1.0+codex.20260829051641/skills/relay-skill-1212/SKILL.md`.
- Explicit `$relay-migration-fixture-1173:relay-skill-1212` invocation injected a
  `<skill>` block with the same name/path, complete frontmatter/body, exact marker
  instruction, and no missing or substituted content.
- Final answer was exactly `PLUGIN_SKILL_OK_1212_QVNZ`.
- Custom tool calls: zero. Native MCP completions: zero. No fallback produced the marker.
- Retained `attempt-1-no-hot-refresh.png` belongs to the pre-restart Thread; that rollout
  lacks the plugin Skill catalog entry and is excluded from the startup-capability
  verdict while remaining product evidence for the refresh limitation.
