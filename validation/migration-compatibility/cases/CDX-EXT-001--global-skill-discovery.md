# CDX-EXT-001 — Global Skill discovery

## Traceability

- Primary requirement: `CDX-EXT-001`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that a user-scoped Skill installed outside the fixture repository is advertised
to a Codex-backed DSH Session before any Skill invocation.

## Preconditions

- `CDX-TOOL-016` is closed.
- User Skill `/Users/boboyang/.agents/skills/trim-video-waiting/SKILL.md` exists with
  frontmatter name `trim-video-waiting` and a recorded digest.
- The fixture Workspace contains no Skill with that name.
- Fresh Standard Session uses `GPT-5.6-Sol Low`, `Workspace Write`.

## Method

1. Record the source path, frontmatter name, digest, and absence of a same-named Skill
   under the fixture Workspace.
2. Create a fresh Session and send exactly:

   ```text
   Do not load or invoke any skill. From the available_skills catalog already supplied to this turn, copy every exact skill name, one per line, with no bullets and no other text. If the catalog is empty, reply EMPTY.
   ```

3. Inspect the Codex rollout/request and DSH Session events to prove the pre-turn Skill
   catalog itself includes `trim-video-waiting`; do not accept model recollection alone.
4. Require terminal UI text to list the same exact name and normal persistence.
5. Retain rollout, Session evidence, screenshot, source digest, and browser diagnostics.

## Expected results

- The user-scoped Skill is present in the supplied catalog before invocation.
- Codex copies `trim-video-waiting` exactly without calling the Skill.
- DSH displays and persists the result in the same Session.

## Result interpretation

- Pass only when the runtime-supplied catalog and visible/persisted result agree.
- Fail when the user Skill exists but is absent, renamed, or only inferred by the model.
- Blocked only when a fresh Session cannot start independently of Skill discovery.

## Review focus

- The proof must distinguish user-global discovery from repository-local discovery and
  from direct filesystem reading of `SKILL.md`.
