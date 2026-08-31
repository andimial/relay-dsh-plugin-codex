# CDX-EXT-012 — Plugin Skill

## Traceability

- Primary requirement: `CDX-EXT-012`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that a Skill bundled in the installed fixture plugin is discovered under the
plugin namespace, loaded from the installed cache, and obeyed in a Codex-backed DSH
Session.

## Preconditions

- `CDX-EXT-011` is closed and fixture plugin
  `relay-migration-fixture-1173@relay-validation-1173` is installed in the isolated
  Codex home.
- The new Skill has a unique name and instruction marker.
- Plugin update uses canonical validation, one cachebuster, reinstall, and a fresh DSH
  Session.

## Method

1. Initialize plugin Skill `relay-skill-1212` with the canonical skill-creator script.
2. Replace scaffold content with a short instruction requiring exact marker
   `PLUGIN_SKILL_OK_1212_QVNZ`; validate the Skill and complete plugin.
3. Read the configured marketplace name, update the plugin version with one canonical
   cachebuster, and reinstall from `relay-validation-1173` into the isolated Codex home.
4. Require isolated `codex plugin list` to show the updated installed version.
5. Start a fresh isolated-Host DSH Session with `GPT-5.6-Sol Low` and explicitly invoke
   `$relay-migration-fixture-1173:relay-skill-1212`, requesting the Skill's exact marker.
6. Require native pre-turn catalog evidence for the namespaced Skill and installed-cache
   source, loaded Skill content containing the exact instruction, exact terminal marker,
   normal DSH persistence, and no unrelated tool fallback.
7. Retain fixture/validation/install output, rollout, Session, screenshot, digests, and
   self-review.

## Expected results

- The installed plugin contributes the namespaced Skill in a fresh Codex Thread.
- Explicit invocation loads the intended installed Skill and returns the exact marker.

## Result interpretation

- Pass only when namespace, installed source, loaded content, and behavior all agree.
- Fail when the Skill is absent, resolves to another source, is not loaded, or its
  instruction is not followed.
- Blocked only when canonical plugin refresh cannot complete independently of Relay.

## Review focus

- Do not count the prompt's marker alone as proof; require catalog and loaded-Skill
  provenance from the rollout.
