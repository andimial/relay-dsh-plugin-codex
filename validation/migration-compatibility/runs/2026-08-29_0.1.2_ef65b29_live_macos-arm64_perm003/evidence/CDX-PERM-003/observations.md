# CDX-PERM-003 Observations

- Input SHA-256:
  `5e6788cc32642ffc9e43ea9e8bdce1c829bfc159025643727300b9debd4caafb`;
  target was absent before and after the turn.
- Rollout `rollout-2026-08-29T15-07-44-01a04c58-820e-70e1-93d7-832524a5150c.jsonl`,
  Thread `01a04c58-820e-70e1-93d7-832524a5150c`, records exact cwd,
  `approval_policy: on-request`, and `sandbox_policy: {type: read-only}`.
- First native `exec` succeeds and returns exact input `relay permission seed 8101\n`.
- Second native `exec` attempts the exact relative target and exits `1` with
  `operation not permitted`; no output file is created.
- Exact final: `PERM003_READ_OK_WRITE_DENIED_8303`; DSH header also shows Read Only.
- Rollout/archive/screenshot SHA-256: `9e972be2365c32cf5e206dadc4b9c7d7cfe731c7b6934299aa09a7891fa65303` /
  `694a2ec889b07ad0331bb7344629925248e0b2219626556f689f0329f2751353` /
  `c1f18b7d66f3b6be6685f9265546623f1fab53d8c6d062d2ebf2a55ce5b99cb6`.
