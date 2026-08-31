# CDX-EXT-012 Validation Review

## Reasonableness

- The Skill is generated and validated independently before product testing.
- Installed plugin cache provenance, not the editable source tree alone, is required in
  the rollout.
- Explicit invocation plus injected full Skill content tests namespace resolution and
  actual execution separately from mere installation.

## Reliability

- The authoritative rollout agrees on namespace, versioned installed path, complete
  content, unique marker, and zero fallback tools.
- DSH persistence and screenshot independently confirm the user-visible result.
- The first attempt is not hidden: a new Thread on the live Host lacked the component,
  while the same installed bytes passed immediately after Host restart. This clean A/B
  isolates component caching from fixture correctness.
- Because ordinary startup discovery is the atomic requirement, the authoritative pass
  is valid; the missing hot refresh remains a meaningful migration limitation and must
  be surfaced in the final matrix.
- Real user configuration remained unchanged.

## Verdict

**Pass, high confidence, restart required after plugin reinstall.** The installed
plugin's namespaced Skill runs correctly after Host startup, but the current Host does
not pick up newly installed plugin components in a fresh Thread without restart.
