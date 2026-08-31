# CDX-CFG-004 Untrusted Branch

- User config explicitly set the exact Workspace to `trust_level = "untrusted"`;
  configured digest `dcd1b79ffea79f44a70ae8e378c269e2a78dc782f192962721c000d1cce15f2b`.
- Pinned CLI run from the project cwd omitted `relay_untrusted_4404`.
- Rollout `rollout-2026-08-29T14-30-09-01a04c36-1a5b-7f80-a280-c1b9e5d85fbc.jsonl`,
  Thread `01a04c36-1a5b-7f80-a280-c1b9e5d85fbc`, binds the exact fixture cwd.
- One unified catalog query for both unique identifiers returned exact `[]`; there was
  no nested/native MCP call and the final answer is exactly `[]`.
- Product server log did not exist after the complete branch.
- Rollout SHA-256:
  `0816b90ad525d6c54612650c70f6d0b8c0ed2bc45f4be7ef48b32019ad6482a4`.
