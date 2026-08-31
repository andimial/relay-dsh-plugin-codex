# CDX-CFG-003 Validation Review

## Reasonableness

- Using an exact server/tool/token collision tests precedence directly; the conclusion
  does not depend on different names being independently merged.
- The sibling project establishes the configured user definition is valid and usable,
  while the trusted project establishes the project definition replaces it there.
- Distinct native structured markers and independent server logs identify the winning
  source without relying on assistant interpretation.

## Reliability

- Fresh Threads bind exact and different cwd values while model, effort, permissions,
  Host, config bytes, and prompt shape remain fixed.
- Each branch contains one native successful call, one exact DSH delivery, one matching
  server-log call, and zero calls in the losing server's log segment.
- Both fixtures passed direct protocol oracles before product execution.
- The excluded blank Session produced no Thread or call and cannot affect either result.
- Targeted cleanup restored the exact original config digest and normal Host process.

## Verdict

**Pass, high confidence.** For an exact MCP-server collision, trusted project
`.codex/config.toml` overrides user `config.toml` inside that project, while the user
definition remains effective in a trusted sibling without the project definition.
