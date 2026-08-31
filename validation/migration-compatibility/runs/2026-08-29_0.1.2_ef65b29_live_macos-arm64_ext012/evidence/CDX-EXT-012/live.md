# CDX-EXT-012 Live Evidence

- Canonical Skill and plugin validation passed.
- Canonical cachebuster/reinstall made the Skill available in the isolated installed
  cache.
- The running Host did not hot-refresh the new component; after a clean Host restart,
  a fresh Thread advertised, injected, and obeyed the exact namespaced Skill.
- DSH presented the exact marker with no tool fallback or extra text.

Result: **pass with restart-required limitation**.
