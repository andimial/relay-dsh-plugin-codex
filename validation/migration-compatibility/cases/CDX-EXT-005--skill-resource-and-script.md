# CDX-EXT-005 — Skill resource and script

## Traceability

- Primary requirement: `CDX-EXT-005`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that a project Skill can resolve and read a bundled reference, run a bundled
script from its own directory, and return the deterministic combined result.

## Preconditions

- `CDX-EXT-004` is closed.
- Project Skill `cdx-resource-script-2648` contains `SKILL.md`,
  `references/oracle.txt`, and `scripts/combine.mjs` with recorded digests.
- The complete expected output is not stored literally anywhere inside the Workspace.
- Fresh Standard Session uses `GPT-5.6-Sol Low`, `Workspace Write`.

## Method

1. Record three-file manifest/digests and run the script independently as an oracle.
2. Send exactly in a fresh positive-Workspace Session:

   ```text
   $cdx-resource-script-2648 Execute this Skill's bundled reference-and-script workflow and reply only with the script stdout.
   ```

3. Require host injection of the named Skill, native read of the exact bundled
   reference, and one shell execution of the exact bundled script from the Skill
   directory.
4. Require shell exit 0 and stdout
   `SCRIPT_COMBINED_REFERENCE_PART_2648_KLHW_RS73`.
5. Require exact terminal/persisted output, normal completion, and unchanged fixture
   digests/manifest.
6. Retain tool trace, Session events, screenshot, independent oracle, and self-review.

## Expected results

- Relative bundled paths resolve from the Skill directory.
- Reference bytes and script stdout remain intact through the plugin.
- Exact combined output reaches the owning DSH Session.

## Result interpretation

- Pass only when both reference read and actual script execution are evidenced.
- Fail for reimplementation, wrong cwd/path, missing resource, script failure, altered
  stdout, or lost result.
- Blocked only when Node/script execution cannot start independently of the plugin.

## Review focus

- Final output alone is insufficient because the model could synthesize it; require the
  exact read and process trace.
