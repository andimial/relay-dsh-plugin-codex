# CDX-SES-001 Validation Review

## Reasonableness

- A fresh link-store path makes mapping cardinality unambiguous and avoids historical
  Session noise.
- Sorted before/after rollout sets prove creation count independently from modification
  timestamps.
- The no-tool turn prevents child tool or subagent Threads from confusing cardinality.

## Reliability

- One rollout basename, Thread metadata, DSH archive ID, link-store key/value, cwd,
  exact final, and UI all agree.
- The link entry records `bindingMode: native` and the same effective settings observed
  in native turn context.
- Title generation stays inside the DSH archive and creates no extra Codex rollout.

## Verdict

**Pass, high confidence.** One new DSH Codex Session creates and durably binds exactly
one Codex Thread with matching Workspace and execution configuration.
