# CDX-EXT-001 Live Evidence

- A fresh Standard Session used `GPT-5.6-Sol Low`, `Workspace Write`, and the exact
  fixture Workspace.
- The Codex developer catalog contained `trim-video-waiting` with source locator
  `/Users/boboyang/.agents/skills/trim-video-waiting/SKILL.md` before the user message.
- DSH's separate `skill-catalog` injection also advertised `trim-video-waiting`.
- The assistant copied the catalog names, including exact `trim-video-waiting`, without
  any Skill/tool call. The persisted message preserves one name per line.
- DSH Web displayed the response and completed normally in 11.2 seconds.
- The source Skill digest remained
  `df24474c7e2b4701c61901774be3e12c5b1bc5e93587e8926070ad7217679e05`.

Result: **pass**. A real user-global Skill is discovered by the Codex-backed DSH turn
without repository-local installation or manual filesystem lookup.
