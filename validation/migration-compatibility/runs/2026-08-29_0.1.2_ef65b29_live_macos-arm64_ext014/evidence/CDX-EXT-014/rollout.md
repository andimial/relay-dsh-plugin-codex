# Plugin Hook Rollout Evidence

- Default rollout:
  `rollout-2026-08-29T13-30-07-01a04bff-233f-7f32-91de-536448059a87.jsonl`.
  The exact `printf` completed with exit 0/output and terminal
  `DEFAULT_HOOK_SKIPPED_1414`; no Hook event/warning appears.
- Trust-bypass DSH rollout:
  `rollout-2026-08-29T13-32-11-01a04c01-0890-7392-b74b-794c578c20f3.jsonl`.
  The exact redirection command completed with exit 0, empty stdout, and terminal
  `PLUGIN_HOOK_NOT_OBSERVED_1414`; no Hook event/warning appears.
- Direct Codex control rollout:
  `rollout-2026-08-29T13-33-33-01a04c02-4882-7450-a630-33100ed2ffab.jsonl`.
  The same installed Hook blocked before shell execution with the exact reason and the
  terminal marker `DIRECT_PLUGIN_HOOK_OBSERVED_1414`.
