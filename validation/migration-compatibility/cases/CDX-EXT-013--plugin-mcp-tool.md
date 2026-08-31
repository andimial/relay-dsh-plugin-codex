# CDX-EXT-013 — Plugin MCP tool

## Traceability

- Primary requirement: `CDX-EXT-013`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that the installed fixture plugin contributes a bundled STDIO MCP server whose
tool executes inside a Codex-backed DSH Session and returns its result to the user.

## Preconditions

- `CDX-EXT-012` is closed.
- Fixture plugin is installed from local marketplace `relay-validation-1173`.
- Bundled server/tool/token/result names are unique to this requirement.
- Server is directly protocol-tested before plugin refresh.

## Method

1. Add bundled server `scripts/mcp-server.mjs`, companion `.mcp.json`, and manifest
   `mcpServers` reference to the existing fixture plugin.
2. Directly initialize/list/call the server; require exact tool schema and marker
   `PLUGIN_MCP_OK_1313_ZKPW` for token `PLUGIN_MCP_REQ_1313`.
3. Validate the complete plugin, read its configured marketplace name, apply one
   canonical cachebuster, validate again, and reinstall into the isolated Codex home.
4. Restart the isolated Host so the plugin component is present at startup; begin a
   fresh DSH Session using `GPT-5.6-Sol Low`, `Workspace Write`.
5. Invoke only exact bundled MCP tool `plugin_echo_1313` once with the exact token and
   request final marker `PLUGIN_MCP_DELIVERED_PLUGIN_MCP_OK_1313_ZKPW`.
6. Require one server business call, one native MCP completion with exact server/tool/
   arguments/result provenance, exact DSH terminal text, normal persistence, and no
   duplicate call.
7. Retain fixture, direct oracle, install, server log, rollout, Session, screenshot,
   digests, and self-review.

## Expected results

- The installed plugin starts its bundled MCP server from the installed cache.
- The exact result reaches Codex and the owning DSH Session once.

## Result interpretation

- Pass only when direct oracle and complete installed-plugin path agree.
- Fail for absent tool, wrong source/server, startup error, duplicated invocation, lost
  result, or incorrect user delivery.
- Blocked only when direct fixture execution cannot start independently of Relay.

## Review focus

- Prove installed-cache execution rather than accidental use of a global MCP server or
  editable source process.
