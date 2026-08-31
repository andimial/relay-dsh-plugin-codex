# CDX-CFG-005 Config and Effective Context

- Original/restored user-config SHA-256:
  `a88d20c9da8c21029a2aad164b5e078d970720a2c7b6228e86f925e93ed83361`.
- Opposing config SHA-256:
  `2712f1d76b682cf62cb07fd68d97d4bb4d0a5e4edb13faaab8624b5fe14a5120`.
- Opposing values: `model="gpt-5.4"`, `model_reasoning_effort="high"`,
  `sandbox_mode="read-only"`, `approval_policy="never"`.
- The pinned CLI parsed the config and emitted its normal MCP list; retained output
  SHA-256 `b64ab403edca2d6032a004ffa6df5eda829f3e22469676b426411ce47c9eb0b8`.
- Fresh Thread `01a04c3b-eb8e-75a1-9998-65dd89007ff9` binds the exact control cwd.
- Native `turn_context` effective values are model `gpt-5.6-sol`, effort `low`,
  `approval_policy:on-request`, and sandbox type `workspace-write`.
- DSH request header independently records provider/model/effort as
  `relay-codex`/`gpt-5.6-sol`/`low`; its injected policy says approval `ask`.
