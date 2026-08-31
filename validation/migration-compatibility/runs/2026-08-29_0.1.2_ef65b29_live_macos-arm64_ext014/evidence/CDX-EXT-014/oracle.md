# Plugin Hook Direct Oracle

- Direct handler input used canonical `PreToolUse`, `Bash`, exact marker, command input,
  session/turn/tool ids, cwd, model, and permission mode.
- Handler returned exact supported JSON denial:
  `permissionDecision: deny` and reason `PLUGIN_HOOK_BLOCKED_1414_VQMS`.
- Independent direct Codex CLI control then used the same isolated Codex home, installed
  plugin cache version, model, Workspace, and official
  `--dangerously-bypass-hook-trust` flag.
- Direct Codex loaded the installed Hook, reported
  `Command blocked by PreToolUse hook: PLUGIN_HOOK_BLOCKED_1414_VQMS`, and returned
  `DIRECT_PLUGIN_HOOK_OBSERVED_1414`.
- This control proves both the handler and current Codex runtime support the installed
  plugin Hook outside the Relay/DSH App Server integration path.
