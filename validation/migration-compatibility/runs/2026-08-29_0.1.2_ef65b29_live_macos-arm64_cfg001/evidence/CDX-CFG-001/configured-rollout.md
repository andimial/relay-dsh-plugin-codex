# CDX-CFG-001 Configured Rollout Evidence

- Rollout:
  `rollout-2026-08-29T14-07-46-01a04c21-9d2b-71f3-b649-fd7d12ea7113.jsonl`.
- Thread: `01a04c21-9d2b-71f3-b649-fd7d12ea7113`.
- One unified call uniquely matched both server and tool identity, then invoked the
  nested MCP function once with exact token.
- Native `mcp_tool_call_end` records:
  - server `relay_cfg001_1001`;
  - tool `user_config_echo_1001`;
  - exact arguments and `read_only_hint:true`;
  - 3.1115 ms duration;
  - `Ok` text `USER_CONFIG_OK_1001_RVKM` and exact structured content.
- Final answer is exactly
  `USER_CONFIG_DELIVERED_USER_CONFIG_OK_1001_RVKM`.
- Rollout SHA-256:
  `824ba4aaa0e4dd6b1645e435ed2c3432f1e3617c5c30cbe6d6d8cc62b2d18508`.
