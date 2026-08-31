# CDX-CFG-002 — Project .codex/config.toml Scope

## Traceability

- Primary requirement: `CDX-CFG-002`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove independently that one setting from a trusted fixture project's
`.codex/config.toml` applies inside that project and does not leak into a sibling DSH
Workspace.

## Preconditions

- `CDX-CFG-001` is closed and isolated user config is restored.
- Positive `plain-text-workspace` is trusted and declares project STDIO MCP server
  `relay_project_7731`; sibling `project-scope-control-workspace` has no project config.
- Direct server oracle and source/config/control digests are available.

## Method

1. Hash positive project config/server and negative control tree; validate direct
   initialize/list/call oracle.
2. In a fresh positive `GPT-5.6-Sol Low`, `Workspace Write` Session, uniquely resolve
   server `relay_project_7731` plus tool `project_echo_7731` and call it once with token
   `PROJECT_INPUT_7731_HZKP`.
3. Require native MCP event, exact text/structured result, project-server log, and exact
   DSH delivery.
4. In a fresh sibling control Session with the same model/mode, make one unified
   `ALL_TOOLS` query for both project identifiers; require exact `[]` and no nested call.
5. Require the negative branch not to start or call the project server, retain both
   Sessions/screenshots/rollouts, and self-review.

## Expected results

- The positive project advertises and executes its configured tool once.
- The sibling project exposes zero matching entries and causes no server event.

## Result interpretation

- Pass only when exact positive execution and exact negative absence both hold.
- Fail when the setting is ignored in the target project or leaks into the sibling.
- Blocked only when either Workspace cannot start an otherwise normal Codex Session.

## Review focus

- Bind both branches to their exact cwd and distinguish project MCP from user-global or
  plugin MCP tools.
