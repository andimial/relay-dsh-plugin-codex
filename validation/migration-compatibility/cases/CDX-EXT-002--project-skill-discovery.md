# CDX-EXT-002 — Project Skill discovery

## Traceability

- Primary requirement: `CDX-EXT-002`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that a repository Skill is advertised inside its fixture Workspace and not
advertised in an unrelated sibling Workspace.

## Preconditions

- `CDX-EXT-001` is closed.
- Project Skill
  `.agents/skills/cdx-project-oracle-7349/SKILL.md` exists only under
  `plain-text-workspace` with a recorded digest.
- Sibling `project-scope-control-workspace` contains no `.agents/skills` directory.
- Both branches use fresh Standard Sessions with `GPT-5.6-Sol Low`, `Workspace Write`.

## Method

1. Record fixture and control manifests plus the project Skill digest.
2. In `plain-text-workspace`, send exactly:

   ```text
   Do not load or invoke any skill. Check only the exact Available skills catalog supplied before this message. If cdx-project-oracle-7349 is present, reply PROJECT_SKILL_PRESENT only; otherwise reply PROJECT_SKILL_ABSENT only.
   ```

3. Require the pre-turn Codex catalog to contain the exact Skill name and project source
   locator, terminal `PROJECT_SKILL_PRESENT`, zero invocation calls, and normal DSH
   persistence.
4. In a fresh Session whose Workspace is `project-scope-control-workspace`, send the
   same prompt.
5. Require the pre-turn Codex catalog not to contain the name, terminal
   `PROJECT_SKILL_ABSENT`, zero invocation calls, and normal persistence.
6. Retain both rollouts, Session events, screenshots, fixture manifests, and diagnostics.

## Expected results

- Positive Workspace discovers the project Skill before invocation.
- Unrelated sibling Workspace does not discover it.
- Neither branch loads or invokes the Skill.

## Result interpretation

- Pass only when both positive and negative branches satisfy exact scope expectations.
- Fail for missing positive discovery, cross-project leakage, wrong source, or inferred
  answer without catalog evidence.
- Blocked only when the control Workspace cannot be selected for an environmental
  reason independent of the plugin.

## Review focus

- Positive discovery alone is insufficient; cross-project absence is mandatory.
