# CDX-CFG-001 Validation Review

## Reasonableness

- The authoritative A/B changes only one isolated user config table and uses globally
  unique server, tool, token, and result markers.
- Baseline catalog absence plus independent protocol oracle prevents both a preexisting
  capability and a broken fixture from creating a false result.
- The exact native MCP event and process log test actual config consumption, not just
  the assistant's awareness of a file.

## Reliability

- Config digests prove the before/configured/after states, and the pinned CLI accepted
  TOML before restart.
- Server log, rollout MCP event, unified call, DSH archive, and screenshot agree on one
  call and exact values.
- The failed bare-name prompt is excluded because it never invoked a tool; the clean
  server-plus-tool retry matches the already validated MCP namespace resolution method.
- Host-owned candidate collisions were not reclassified as user-config failure and are
  preserved for the dedicated precedence case.
- Cleanup restored the byte-identical original isolated config and normal Host args.

## Verdict

**Pass, high confidence.** A user-level non-UI Codex `config.toml` setting is consumed
through the current DSH plugin and produces a deterministic end-to-end capability.
