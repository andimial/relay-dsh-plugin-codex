# CDX-EXT-011 — Installed Codex plugin discovery

## Traceability

- Primary requirement: `CDX-EXT-011`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that a valid, marketplace-backed local fixture plugin can be installed into the
isolated Codex home and discovered from a Codex-backed DSH Session.

## Preconditions

- `CDX-EXT-010` is closed.
- All marketplace and install state is confined to the existing isolated Codex home.
- Fixture plugin name and marker are unique to this requirement.
- The real user Codex configuration digest is recorded before and after the run.

## Method

1. Scaffold minimal plugin `relay-migration-fixture-1173` and marketplace
   `relay-validation-1173` under the repository fixture tree using the canonical
   plugin-creator scripts.
2. Validate the manifest and marketplace, record their exact paths and SHA-256 digests.
3. Add the local marketplace and install the plugin with the isolated `CODEX_HOME`.
4. Require isolated `codex plugin list` to show exactly one installed row for
   `relay-migration-fixture-1173@relay-validation-1173` with the expected version and
   source path.
5. In a fresh isolated-Host DSH Session using `GPT-5.6-Sol Low`, ask Codex to run its
   own `codex plugin list`, make no plugin component call, and return exact marker
   `PLUGIN_DISCOVERED_1173` only when the installed row is present.
6. Retain CLI output, native rollout/tool evidence, DSH Session evidence, screenshot,
   digests, and self-review.

## Expected results

- The isolated Codex installation records the fixture as installed from the intended
  marketplace and path.
- A Codex-backed DSH task sees the same installed plugin state and returns the exact
  marker.
- Real user config remains byte-identical.

## Result interpretation

- Pass only when both independent CLI and DSH-task discovery paths agree.
- Fail when installation succeeds but the active Codex-backed DSH environment cannot
  discover it, or when identity/path/version differs.
- Blocked only when canonical fixture installation cannot run independently of Relay.

## Review focus

- Do not infer discovery merely from files existing on disk; require installed state
  from the isolated CLI and from a fresh DSH task.
