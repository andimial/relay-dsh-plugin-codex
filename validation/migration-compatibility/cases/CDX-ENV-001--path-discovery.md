# CDX-ENV-001 — PATH and executable discovery

## Traceability

- Primary requirement: `CDX-ENV-001`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that a sanitized executable made available only through the DSH Host's inherited
PATH can be discovered and invoked by name in a fresh Codex Thread.

## Preconditions

- `CDX-PERM-004` is closed.
- `fixtures/path-bin/relay-path-probe-8501` is executable and its directory is absent
  from the ordinary operator PATH.

## Method

1. Hash the executable and prove ordinary `command -v` cannot find it.
2. Restart only the isolated DSH Host with the fixture directory prepended to PATH.
3. Start a fresh plain-text-workspace Codex Session and ask for one native exec of
   `relay-path-probe-8501` by bare name, without absolute path or search fallback.
4. Require exact fixture output, native call/result, archive/UI evidence, and no prompt
   disclosure of the output marker.
5. Restart the Host without the fixture PATH, prove operator non-discovery, and review.

## Expected results

- Bare executable name resolves and returns its exact hidden marker only while the
  isolated Host carries the PATH prefix.

## Result interpretation

- Pass only when native execution by bare name succeeds and cleanup restores absence.
- Fail for command-not-found, absolute-path substitution, or wrong output.
- Blocked only when the isolated Host cannot restart with the sanitized PATH prefix.

## Review focus

- Do not expose the executable's response marker in the user prompt.
- Distinguish Host PATH inheritance from Codex config or current-shell discovery.
