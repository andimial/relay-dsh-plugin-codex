# CDX-CFG-006 Validation Review

## Reasonableness

- The config carries only an allowlisted variable name, while the Host owns the value;
  this tests reference forwarding rather than literal `env` injection.
- A purpose-built server returns one expected non-secret marker and cannot dump other
  environment data.
- Direct protocol validation separates forwarding failure from fixture failure.

## Reliability

- Config text absence proves the value was not embedded in TOML; configured/original
  digests prove both test and cleanup states.
- Host command, two process-start records, one native structured MCP result, exact DSH
  archive/final display, and screenshot all agree on the same value/source.
- The single call has no arguments, eliminating prompt-supplied value substitution.
- Cleanup removes the server and restarts without the variable.

## Verdict

**Pass, high confidence.** The current plugin preserves documented Codex `env_vars`
forwarding from the DSH Host environment to the configured local STDIO consumer.
