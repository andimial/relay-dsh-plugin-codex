# CDX-CFG-001 — User config.toml

## Traceability

- Primary requirement: `CDX-CFG-001`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that a supported non-UI setting in the isolated user's Codex `config.toml` reaches
a Codex Thread created through the DSH plugin and changes its native execution policy.

## Preconditions

- `CDX-EXT-016` is closed and the isolated Host/profile is clean.
- Official current configuration reference documents user-level `mcp_servers.<id>`
  tables and their command, args, environment, timeout, required, and approval fields.
- Isolated user config initially has no server/tool identifier from the CFG-001 fixture.

## Method

1. Hash the isolated `config.toml` and verify the target key/table is absent.
2. Create a fresh `GPT-5.6-Sol Low`, `Workspace Write` Session and make one unified
   catalog query for exact tool `user_config_echo_1001`; require an empty array.
3. Add user-level STDIO MCP table `mcp_servers.relay_cfg001_1001` only to the isolated
   config, pointing at the sanitized fixture, validate TOML, and restart the Host.
4. Create a second fresh Session in the same Workspace/model/mode and require exactly
   one call to `user_config_echo_1001` with token `USER_CONFIG_INPUT_1001`.
5. Require native MCP event, exact text `USER_CONFIG_OK_1001_RVKM`, structured source,
   server log, and exact DSH final response.
6. Remove the isolated table, validate the original config digest, restart the Host,
   and retain config/spec, two rollouts/Sessions, screenshots, cleanup, and review.

## Expected results

- The only intended config difference introduces one read-only global MCP server/tool.
- The baseline excludes the unique tool; the configured run advertises and executes it
  while preserving the same visible model, Workspace, sandbox mode, and approval policy.

## Result interpretation

- Pass when the A/B policy values and isolated config state agree exactly.
- Fail when the user setting is ignored, rejected, or overwritten before Thread use.
- Blocked only when the documented setting is unsupported by the pinned Codex version.

## Review focus

- Require unique server/tool provenance and independent process log, not model wording.
