# Plugin MCP Rollout Evidence

- Source: `rollout-2026-08-29T13-23-14-01a04bf8-d5c7-77c1-9a14-d1cc82fe27eb.jsonl`.
- One native `mcp_tool_call_end` recorded server `relay_plugin_1313`, tool
  `plugin_echo_1313`, exact token, 3.524 ms duration, and `Ok` text plus structured
  content.
- Crucially, the native event records `plugin_id` exactly as
  `relay-migration-fixture-1173@relay-validation-1173`.
- Outer tool output preserved exact marker `PLUGIN_MCP_OK_1313_ZKPW`.
- Final answer was exactly
  `PLUGIN_MCP_DELIVERED_PLUGIN_MCP_OK_1313_ZKPW` with no retry or extra prose.
