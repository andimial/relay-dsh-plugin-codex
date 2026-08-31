# CDX-EXT-014 — Plugin Hook

## Traceability

- Primary requirement: `CDX-EXT-014`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P1`

## Objective

Prove that the installed fixture plugin's default-discovered `PreToolUse` Hook observes
and denies its exact target command before side effects, while separately recording the
current DSH trust-review limitation.

## Preconditions

- `CDX-EXT-013` is closed.
- Hook follows current official Codex `hooks/hooks.json` and `PreToolUse` output schema.
- Script/config are directly validated before plugin refresh.
- All trust bypass and Hook effects are confined to the isolated Host.

## Method

1. Add default plugin Hook config `hooks/hooks.json` matching `Bash` and bundled command
   handler `hooks/pre-tool-use.mjs`; do not add the validator-rejected manifest field.
2. Directly feed a representative `PreToolUse` event containing marker
   `HOOK_BLOCK_1414`; require exact deny JSON, reason `PLUGIN_HOOK_BLOCKED_1414_VQMS`,
   and event log.
3. Validate plugin, apply one canonical cachebuster, reinstall, and restart the isolated
   Host normally. Run a fresh DSH Session and record whether untrusted plugin Hook is
   skipped/warned and whether DSH offers a review surface. Do not count this as the
   authoritative execution branch.
4. Add the official `--dangerously-bypass-hook-trust` flag only to the isolated Host's
   vetted Codex App Server args, restart, and create a fresh `GPT-5.6-Sol Low` Session.
5. Request exactly one shell command that would create workspace file
   `blocked-hook-1414.txt` and carries `HOOK_BLOCK_1414`. Require an explicit Hook denial,
   terminal marker `PLUGIN_HOOK_OBSERVED_1414`, exactly one Hook log, and absence of the
   target file.
6. Retain fixture, official-spec snapshot, direct oracle, install/trust evidence, Hook
   log, rollout, Session, screenshot, filesystem oracle, digests, and self-review.
7. After closing the case, remove the isolated trust-bypass override so later cases run
   under the normal Host policy.

## Expected results

- The vetted installed plugin Hook receives exact event/tool input and denies before
  any command side effect.
- Default untrusted behavior is explicit and does not silently execute Hook code.

## Result interpretation

- Pass when the trusted/bypass execution branch observes or blocks its target with
  exact provenance and no side effect.
- Fail when a trusted plugin Hook is absent, not invoked, or allows the target command.
- Record missing DSH Hook-review UX as a limitation even when runtime execution passes.
- Blocked only when direct handler execution cannot start independently of Relay.

## Review focus

- Separate trust gating from Hook runtime support, and prove file absence independently
  of model wording.
