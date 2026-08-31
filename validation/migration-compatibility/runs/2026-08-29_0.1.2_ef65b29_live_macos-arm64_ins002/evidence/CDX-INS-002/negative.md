# CDX-INS-002 Sibling Negative

- Control root has no `AGENTS.md` or global instruction; prompt/model/mode are identical.
- Rollout `rollout-2026-08-29T14-48-25-01a04c46-d2c2-71a0-af93-1fec56f88205.jsonl`,
  Thread `01a04c46-d2c2-71a0-af93-1fec56f88205`, binds the sibling control cwd.
- Native `world_state.agents_md` is exactly `{}`; DSH renders no project instruction row.
- Zero tool calls; exact fallback final `INS002_NO_PROJECT_INSTRUCTION_7202`, with no
  project response marker.
- Rollout/archive SHA-256: `58ffc5c1cebc70000d9ef3147069dc69b44d5a409c13f8df84d00140b4f30445` /
  `1dc26a52ae054ce92d247a0683638f25b8f1b09e683187701acd0057ecea12d0`.
- `sibling-negative.png` SHA-256:
  `8e1e8f4dfe3f8e7455900c485e96426339f36085da0b70178f06f911e53a1bd6`.
