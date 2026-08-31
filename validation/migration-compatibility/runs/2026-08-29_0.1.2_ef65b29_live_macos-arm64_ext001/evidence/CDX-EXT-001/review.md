# CDX-EXT-001 Validation Review

## Reasonableness

- The selected Skill is physically located in the official user-global
  `$HOME/.agents/skills` scope and absent from the fixture Workspace.
- The method inspects the pre-turn Codex catalog and DSH context injection, rather than
  trusting only the model's copied answer.
- Invocation was intentionally excluded and the zero-call rollout proves this case
  measures discovery alone.

## Reliability

- Four independent facts agree: source frontmatter, stable source digest, Codex source
  locator, and DSH `skill-catalog` name.
- The assistant copied all catalog names rather than only the selected oracle; this adds
  noise but does not weaken exact discovery evidence.
- Browser `innerText` visually collapsed newline-separated names into a flowing line,
  while the persisted DSH event and Codex rollout preserve actual newline characters.
  Persistence is the authoritative formatting evidence.
- The source is a real pre-existing user Skill rather than a newly staged fixture. This
  directly tests migration of an existing user extension, although it does not test
  installation; installation is outside this atomic requirement.

## Verdict

**Pass, high confidence.** User-global Skill discovery works through the current Codex
plugin and is visible before invocation.
