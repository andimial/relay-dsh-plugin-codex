# CDX-ENV-003 Observations

- Secret literal is intentionally omitted. Its SHA-256 is
  `a6d8b97f7de229f90d8ea4d837dc72605b5b8d986ff15404d947a58ef9f1a5f9`.
- Consumer SHA-256:
  `4909d30e561f5f38fc19ac049d99a4ea53477738c8e8bbd865ded3ced3420311`;
  absent-variable control exits `3` with its non-secret mismatch marker.
- Rollout `rollout-2026-08-29T15-20-20-01a04c64-0bfd-7bf3-98b5-f84ae2120d40.jsonl`,
  Thread `01a04c64-0bfd-7bf3-98b5-f84ae2120d40`, executes only the exact consumer path.
- Native result exits `0` with `ENV003_SECRET_CONSUMER_OK_8703_WJTZ`; the prompt,
  result, final, DSH archive, and screenshot contain no secret literal.
- Literal scans found zero DSH archive matches but two isolated regular-file matches,
  both under `codex-home/shell_snapshots/`; see `leak.md`.
- Rollout/archive/screenshot SHA-256: `8bce812d37f2695f58299294be7b99feabd3d4ecc44466d06e691ed87cda9fa5` /
  `5190472f06e1f081d0b00536c53b07a063003f135896c728d5b78a79aaeaa855` /
  `62f1b8d73c166722d311e42d36d99bfc9f5ce1f1ac646e59a78c29854b11bf9c`.
- After restarting without the variable, the consumer again exited `3`, while both
  leaked snapshot files still persisted. They were then deleted and the final literal
  scan returned zero files.
