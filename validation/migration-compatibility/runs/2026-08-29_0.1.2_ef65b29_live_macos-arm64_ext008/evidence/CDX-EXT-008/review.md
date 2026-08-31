# CDX-EXT-008 Validation Review

## Reasonableness

- The dependency-free local endpoint removes internet/auth variability while exercising
  the real Streamable HTTP transport and loopback networking.
- Direct oracle, HTTP log, native Codex MCP event, and DSH persistence cover distinct
  layers and all carry the same unique values.
- The call ran from a Workspace with no project MCP config, so the configured global
  HTTP server provenance is unambiguous.

## Reliability

- Direct and product calls are separated by timestamps/ids; only one product tool call
  occurred.
- Codex made OAuth metadata probes after the no-auth endpoint check, then correctly
  connected anonymously. This extra traffic is normal observable client behavior, not
  a fallback.
- Two business initialize/list sequences reflect Host consumers, as in STDIO cases;
  only one business call occurred.
- Exact source, isolated config, and real user config hashes were stable.

## Verdict

**Pass, high confidence.** Streamable HTTP MCP execution works end to end through the
current Codex plugin.
