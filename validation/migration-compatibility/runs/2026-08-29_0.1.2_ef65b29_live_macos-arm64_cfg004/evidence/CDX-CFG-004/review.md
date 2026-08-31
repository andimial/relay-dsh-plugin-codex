# CDX-CFG-004 Validation Review

## Reasonableness

- A negative-only absence test would be ambiguous, so the unchanged project config is
  exercised again after changing only its explicit trust value.
- Unique identifiers, a direct protocol oracle, and pinned CLI prechecks rule out a
  broken fixture or name collision.
- Server nonexistence is stronger than assistant denial: the untrusted layer never
  started, while trusted loading produced a real native call.

## Reliability

- Both fresh Threads bind the identical cwd, model, effort, access and approval modes.
- Project file digests are identical before/after both branches; only user trust bytes
  differ, with both configured digests retained.
- Negative unified output, absence of nested/native events, and absent process log
  agree. Positive CLI listing, process log, native result, DSH archive, and UI agree.
- Cleanup restored the exact original user config and restarted the normal Host.

## Verdict

**Pass, high confidence.** Codex skips project `.codex/config.toml` for an explicitly
untrusted DSH Workspace and loads the unchanged layer after that project is trusted.
