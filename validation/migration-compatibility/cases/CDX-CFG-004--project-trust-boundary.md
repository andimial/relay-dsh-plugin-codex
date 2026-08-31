# CDX-CFG-004 — Project Trust Boundary

## Traceability

- Primary requirement: `CDX-CFG-004`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove independently that Codex skips a project's `.codex/config.toml` while that exact
project is untrusted, then consumes it after the same project becomes trusted.

## Preconditions

- `CDX-CFG-003` is closed and isolated user config is restored.
- Dedicated Workspace `untrusted-project-workspace` contains only a sanitized README,
  unique project MCP server, and `.codex/config.toml`.
- The fixture passes direct JSON-RPC initialize/list/call before product testing.

## Method

1. Hash and directly validate the fixture; register the Workspace in isolated DSH.
2. Add exact user-config project entry with `trust_level = "untrusted"`, validate config,
   restart the isolated Host, and create a fresh Session in that Workspace.
3. Make one unified catalog query for server `relay_untrusted_4404` and tool
   `trust_probe_4404`; require exact `[]`, no nested/native call, and no server log.
4. Change only that entry to `trust_level = "trusted"`, restart, create another fresh
   Session in the same Workspace, and call the tool once with `CFG004_INPUT_4404_WJRX`.
5. Require exact native text/structured result and DSH delivery, then remove the trust
   entry, restore the original user-config digest, restart normally, and self-review.

## Expected results

- Untrusted branch: project tool is absent and server never starts.
- Trusted control: the same unchanged project config starts and executes once.

## Result interpretation

- Pass only when the negative and positive branches differ solely by trust level and
  all catalog/process/native/UI observables agree.
- Fail when the untrusted layer loads, or when the trusted control cannot load a valid
  unchanged fixture.
- Blocked only when isolated DSH cannot register or start the dedicated Workspace.

## Review focus

- Confirm exact cwd and config digests, no user/global definition for either identifier,
  and byte-identical project files across both branches.
