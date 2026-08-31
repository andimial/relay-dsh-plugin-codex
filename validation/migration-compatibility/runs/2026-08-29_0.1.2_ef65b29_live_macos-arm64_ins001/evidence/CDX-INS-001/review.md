# CDX-INS-001 Validation Review

## Reasonableness

- The prompt supplies only a trigger; the unique response marker is knowable only from
  the temporary global instruction.
- Native pre-turn input plus `world_state.agents_md` prove discovery/injection, while
  the exact answer proves behavior.
- A no-tool turn rules out reading the temporary file after the turn began.

## Reliability

- Fresh Thread/cwd binding, file digest, complete injected text, zero calls, native
  final event, DSH archive, and screenshot agree.
- No project or nested instruction file exists in the control Workspace; the only
  retained repository occurrence before execution is the case specification itself,
  which is outside the selected Workspace and was never read by the turn.
- Cleanup restores the exact absent baseline and normal Host.

## Verdict

**Pass, high confidence.** The DSH Codex plugin preserves global `AGENTS.md` discovery,
native injection, and instruction-following behavior in a fresh migration Session.
