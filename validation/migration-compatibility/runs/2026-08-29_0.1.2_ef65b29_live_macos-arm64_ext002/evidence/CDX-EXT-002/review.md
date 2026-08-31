# CDX-EXT-002 Validation Review

## Reasonableness

- The method uses a unique Skill name and source path, then exercises both in-scope and
  out-of-scope Workspaces through the real DSH UI.
- Each Codex rollout supplies authoritative cwd and full pre-turn catalog evidence;
  terminal tokens alone are not treated as proof.
- Zero tool calls isolate discovery from invocation.

## Reliability

- Positive and negative branches used fresh Sessions, the same model/settings/prompt,
  and sibling directories under the same fixture parent. Workspace scope is the only
  intentional variable.
- The negative Workspace had a one-file manifest and no `.agents/skills`, and the
  project Skill's name occurs only under the positive Workspace.
- DSH's separate Skill catalog omitted the project Skill even in the positive branch.
  This is a catalog-source difference, not a task failure, because the actual Codex
  request contains the correct project Skill and responds from it. It may matter for a
  future DSH-owned Skill picker and is retained explicitly.
- No files changed during either model turn.

## Verdict

**Pass, high confidence.** Project Skill discovery works in the correct Codex-backed
DSH Workspace and remains absent in the unrelated Workspace.
