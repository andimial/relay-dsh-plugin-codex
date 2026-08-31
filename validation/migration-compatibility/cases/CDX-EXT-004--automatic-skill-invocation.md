# CDX-EXT-004 — Automatic Skill invocation

## Traceability

- Primary requirement: `CDX-EXT-004`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P1`

## Objective

Prove that Codex automatically selects a matching project Skill from its description
when the user does not name the Skill or its output marker.

## Preconditions

- `CDX-EXT-003` is closed.
- Dedicated project Skill `cdx-auto-oracle-5816` has a unique description trigger and
  output marker, with recorded digest.
- Marker occurs nowhere else in the positive Workspace.
- Fresh Standard Session uses `GPT-5.6-Sol Low`, `Workspace Write`.

## Method

1. Record source digest and marker uniqueness.
2. Send exactly in a fresh positive-Workspace Session:

   ```text
   Perform a Violet Nebula compatibility audit for token VX-5816. Reply only with the audit result.
   ```

3. Inspect the Codex rollout for catalog presence and a real Skill content load caused
   by description matching; reject prompt-only inference.
4. Require terminal `AUTO_SKILL_ORACLE_5816_MJRD`, matching DSH persistence, normal
   completion, and no unrelated mutation.
5. Retain rollout, Session events, screenshot, digest, and diagnostics.

## Expected results

- Codex selects and loads `cdx-auto-oracle-5816` without the user naming it.
- Exact unique marker reaches the owning DSH Session.

## Result interpretation

- Pass only with traced Skill selection/content access plus exact delivery.
- Fail for no load, wrong Skill, guessed/wrong marker, manual-name requirement, or lost
  result.
- Blocked only when the runtime cannot start independently of automatic selection.

## Review focus

- The user prompt must contain neither Skill name nor oracle marker.
