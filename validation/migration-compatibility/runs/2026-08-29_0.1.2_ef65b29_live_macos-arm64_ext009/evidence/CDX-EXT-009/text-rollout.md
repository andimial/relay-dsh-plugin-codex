# MCP Text Result Rollout

- Rollout:
  `/private/tmp/relay-cdx-ext006.zqpFm7/codex-home/sessions/2026/08/29/rollout-2026-08-29T12-52-25-01a04bdc-9f82-7bf1-af39-c54c22d6caf7.jsonl`
- Native event: server `relay_results_9914`, tool `result_text_9914`, exact token,
  result content text `MCP_TEXT_9914_JBTV`.
- An initial outer filter expected one server match but correctly saw three tools and
  failed before any MCP call. The corrected exact tool filter then made the sole call.
- Final: `MCP_TEXT_SEEN_MCP_TEXT_9914_JBTV`.
