# CDX-PERM-001 Observations

- Input SHA-256:
  `5e6788cc32642ffc9e43ea9e8bdce1c829bfc159025643727300b9debd4caafb`;
  isolated config SHA-256 before the turn:
  `6178ad38df6c4b8bdb2ae8a628aa8a2252ab03189335cdc023cf1321a43adfc4`.
- Rollout `rollout-2026-08-29T15-02-20-01a04c53-9183-7c40-b18e-7cecd4309d77.jsonl`,
  Thread `01a04c53-9183-7c40-b18e-7cecd4309d77`, records the exact cwd,
  `approval_policy: on-request`, and `sandbox_policy.type: workspace-write` with
  network disabled.
- Three native `exec` call/results read the input, create the output, then read it
  back. Results bind the exact two absolute Workspace paths and expose the exact
  one-line input and two-line output.
- Real output bytes were `PERM001_WRITE_OK_8101\nsource=relay permission seed 8101\n`;
  SHA-256 `804b57d17bf49d98a72b144a76f7c6a9329b341cba34ebe9bb4016ca04bd25fb`.
- Exact final: `PERM001_WORKSPACE_RW_CONFIRMED_8101`.
- Rollout/archive/screenshot SHA-256: `061612182beb00248506fbe00afddd636f5ff0a31e200938b2c074c3a9a774cc` /
  `acc03269ac2973f577177786deec34067f4bcbf06f231f9d0773985fffc292de` /
  `c54347f132ac76a3c5bf3382ff32b0aa7113c3f09a026cc0d55cd20ee4954410`.
- Generated output was removed after hashing; the deterministic source fixture remains.
