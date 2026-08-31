# CDX-EXT-013 Validation Review

## Reasonableness

- Direct protocol testing separates server correctness from plugin loading.
- Canonical plugin validation, refresh, reinstall, and restart match the installed
  component lifecycle already established by the preceding requirement.
- Server-path, native-event, outer-tool, Session, and visual evidence span every product
  boundary needed for user task completion.

## Reliability

- The unique token/result appear in exactly one product business call.
- Server cwd/source prove the process came from the versioned installed cache, not a
  global MCP or editable source process.
- Native `plugin_id` is direct attribution to the intended plugin/marketplace; exact
  text and structured results agree with the direct oracle.
- DSH persistence and screenshot confirm user delivery, while no retry or extra prose
  weakens the terminal assertion.
- Real user configuration remained unchanged.

## Verdict

**Pass, high confidence.** The installed fixture plugin's bundled MCP tool executes
once from its installed cache and returns intact text/structured results through Codex
to the owning DSH Session.
