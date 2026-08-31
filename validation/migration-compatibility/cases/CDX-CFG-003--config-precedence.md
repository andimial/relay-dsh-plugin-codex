# CDX-CFG-003 — User and Project Config Precedence

## Traceability

- Primary requirement: `CDX-CFG-003`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove independently which layer wins when user `config.toml` and trusted project
`.codex/config.toml` define the same MCP server and tool identity.

## Preconditions

- `CDX-CFG-002` is closed and its positive/negative Workspaces remain trusted.
- User fixture and project fixture both define server `relay_project_7731`, tool
  `project_echo_7731`, and accept token `PROJECT_INPUT_7731_HZKP`, but return distinct
  text and structured `source` markers.
- Original isolated user config digest and direct protocol oracles are retained.

## Method

1. Hash both servers and validate their distinct direct results with the same call.
2. Add the colliding user MCP table, validate the pinned CLI config, and restart the
   isolated Host.
3. In a fresh sibling control Session, call the identity once and require the user-layer
   result `CFG003_USER_WINS_4303_NQTX` with structured source `user`.
4. In a fresh trusted project Session, make the same call and require the project-layer
   result `STDIO_PROJECT_OK_7731_HZKP` with structured scope `project`.
5. Require each server log to show only its expected branch, restore the original user
   config byte-for-byte, restart normally, and self-review.

## Expected results

- The sibling control uses the user-level definition.
- The configured project uses the project-level definition, proving project precedence
  for an exact MCP server collision.

## Result interpretation

- Pass only when both exact native results, logs, DSH deliveries, and cwd bindings agree.
- Fail when the project uses the user result, the sibling has no user result, or both
  server definitions start in either branch.
- Blocked only when a fresh otherwise-normal Session cannot start after valid config.

## Review focus

- Exclude catalog/name ambiguity by using one identical identity and native structured
  source markers; prove config restoration after the run.
