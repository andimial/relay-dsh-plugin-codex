# CDX-INS-001 Instruction and Rollout

- Baseline contained neither global `AGENTS.md` nor `AGENTS.override.md`.
- Temporary global file SHA-256:
  `51585b3a45437d89b33a646366ce97220fe7519a2dd1e35fdd5585004fd6f5d8`.
- Prompt contains trigger `global instruction probe 7101` but not response marker
  `INS001_GLOBAL_OK_7101_ZMVP`.
- Rollout `rollout-2026-08-29T14-44-49-01a04c43-87df-7950-82cd-4eb4926c2d67.jsonl`,
  Thread `01a04c43-87df-7950-82cd-4eb4926c2d67`, binds the exact control cwd.
- A pre-turn `# AGENTS.md instructions` input and `world_state.agents_md.text` both
  contain the complete fixture text byte-for-byte.
- The turn contains zero tool calls and returns exact final
  `INS001_GLOBAL_OK_7101_ZMVP` once.
- Rollout SHA-256:
  `35c5643c01888c19ca531bb00fd01ee7296b0e0224f9cc1861d894d4d41c7592`.
