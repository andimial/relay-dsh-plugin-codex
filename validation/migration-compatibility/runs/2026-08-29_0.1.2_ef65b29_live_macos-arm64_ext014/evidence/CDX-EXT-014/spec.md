# Official Hook Contract Evidence

- Current official Codex Hooks documentation was read on 2026-08-29 from
  `https://learn.chatgpt.com/docs/hooks.md`.
- It states that enabled plugins default-discover `hooks/hooks.json`, plugin Hook
  commands receive `PLUGIN_ROOT`/`PLUGIN_DATA`, and non-managed plugin Hooks require
  review/trust.
- It documents `PreToolUse` coverage for unified exec as matcher `Bash`, JSON event input
  on stdin, and denial through `hookSpecificOutput.permissionDecision = "deny"` with a
  reason.
- Current isolated `codex features list` reports `hooks` stable/enabled, while legacy
  feature key `plugin_hooks` is removed/false; plugin-bundled Hooks are now part of the
  canonical `hooks` framework.
