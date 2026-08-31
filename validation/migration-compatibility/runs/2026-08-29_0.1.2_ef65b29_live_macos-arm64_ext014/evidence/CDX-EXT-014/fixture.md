# Plugin Hook Fixture Evidence

- Default-discovery config: `hooks/hooks.json`; manifest intentionally has no unsupported
  `hooks` field.
- Event/matcher: `PreToolUse` / `^Bash$`.
- Handler command resolves through official `$PLUGIN_ROOT` and runs bundled
  `hooks/pre-tool-use.mjs`.
- Handler logs exact input/provenance, checks marker `HOOK_BLOCK_1414`, and returns
  official deny shape with reason `PLUGIN_HOOK_BLOCKED_1414_VQMS`.
- Config SHA-256:
  `5ee667877ddfa8f346b890cdd8139a9cf6f0ffadbe6152f9d06902c496b3c9be`.
- Handler SHA-256:
  `486afb6ec60229e281a6ea577d101509c5af22aa4a9a2d292099d62b591f6073`.
- Complete plugin validator passed with the default Hook directory present.
