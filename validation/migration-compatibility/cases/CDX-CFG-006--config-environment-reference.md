# CDX-CFG-006 — Config Environment Reference

## Traceability

- Primary requirement: `CDX-CFG-006`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P1`

## Objective

Prove independently that a user-configured MCP `env_vars` reference forwards one exact
sanitized Host environment value to its STDIO server consumer through the DSH plugin.

## Preconditions

- `CDX-CFG-005` is closed and isolated config/fixture state is restored.
- Dedicated server exposes no general environment dump and returns only the single
  expected non-secret marker.
- Official config reference identifies `mcp_servers.<id>.env_vars` as the STDIO
  environment-variable allowlist.

## Method

1. Hash the server and validate it directly with only
   `RELAY_CFG006_ENV_REF=CFG006_ENV_VALUE_6606_KRPT` plus a fixture log path.
2. Add user MCP server `relay_cfg006_env_6606` with literal log path in `env` and only
   `RELAY_CFG006_ENV_REF` in `env_vars`; validate config.
3. Restart the isolated Host with the one sanitized variable, create a fresh control
   Session, and call `env_reference_echo_6606` once without arguments.
4. Require process-start log, native text/structured result, exact DSH delivery, and no
   unrelated environment data in retained evidence.
5. Remove the MCP table, restart without the variable, require original config digest,
   and self-review.

## Expected results

- The server process and native result contain exactly `CFG006_ENV_VALUE_6606_KRPT`.
- The structured source is `env_vars`; no secret or unrelated environment is exposed.

## Result interpretation

- Pass when direct, process, native, archive, and UI evidence agree on the exact value.
- Fail when the variable is absent, replaced, leaked broadly, or supplied through a
  literal config value instead of the reference.
- Blocked only when otherwise valid `env_vars` config prevents Session creation.

## Review focus

- Confirm the value appears nowhere in `config.toml`, the Host launch owns it, and the
  configured server receives it only through the documented allowlist.
