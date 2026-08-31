# CDX-EXT-011 Validation Review

## Reasonableness

- Canonical scaffold/validation proves the fixture is a legitimate Codex plugin rather
  than an arbitrary directory.
- The independent operator CLI establishes installed state before the DSH task.
- The DSH task runs in a fresh Session and reads the active isolated Codex installation,
  providing an end-to-end check through the current plugin execution path.

## Reliability

- Both discovery paths agree on all identity fields: plugin id, marketplace, enabled
  status, version, and source path.
- The DSH rollout preserves the exact command, raw stdout, zero exit, and terminal
  marker. Zero MCP events confirm that later plugin-component requirements were not
  accidentally exercised early.
- The first DSH attempt is correctly excluded because native output proves command-not-
  found before discovery; the authoritative retry changes only executable resolution.
- Screenshot inspection confirms the user-visible terminal result and selected model.
- Real user config digest equality confirms isolation.

## Verdict

**Pass, high confidence.** The installed fixture plugin is discoverable from both the
isolated Codex CLI and a fresh Codex-backed DSH task. The extra progress sentence is a
minor response-format limitation, not a discovery failure.
