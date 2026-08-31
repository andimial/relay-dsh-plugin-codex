# CDX-INS-001 — Global AGENTS.md

## Traceability

- Primary requirement: `CDX-INS-001`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove independently that the DSH Codex plugin discovers, injects, and follows a unique
global `$CODEX_HOME/AGENTS.md` instruction in a fresh Thread.

## Preconditions

- `CDX-CFG-006` is closed and isolated config/Host are restored.
- Isolated Codex home contains no `AGENTS.md` or `AGENTS.override.md` baseline.
- Trigger and response markers are globally unique and sanitized.

## Method

1. Confirm absence, create global `AGENTS.md` whose only probe rule maps trigger phrase
   `global instruction probe 7101` to response `INS001_GLOBAL_OK_7101_ZMVP`, and hash it.
2. Restart the isolated Host and create a fresh control-Workspace Session.
3. Prompt only `Return the migration validation result for global instruction probe
   7101. Follow all applicable instructions.`; do not include the response marker.
4. Require rollout instruction injection with exact source/content, no tool call, and
   exact DSH terminal answer.
5. Delete the temporary global file, restart normally, require absence, and self-review.

## Expected results

- The response marker appears exactly once even though it is absent from the prompt.
- Native rollout evidence identifies the global instruction content/source.

## Result interpretation

- Pass when injection, behavior, no-tool execution, archive, and UI agree.
- Fail when the instruction is absent, ignored, duplicated, or only recovered by a tool.
- Blocked only when the temporary valid instruction prevents fresh Session creation.

## Review focus

- Ensure no project/nested instruction contains the response marker and no prior Thread
  is reused.
