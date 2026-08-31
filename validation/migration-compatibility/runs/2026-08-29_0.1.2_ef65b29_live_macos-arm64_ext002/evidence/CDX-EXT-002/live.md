# CDX-EXT-002 Live Evidence

- Positive branch: the exact project source locator appeared in Codex's pre-turn
  catalog; response `PROJECT_SKILL_PRESENT`; zero calls; completed in 11.9 seconds.
- The DSH directory picker added the sibling control as a distinct Workspace.
- Negative branch: Codex cwd matched the sibling control, the Skill was absent from its
  complete pre-turn catalog, response `PROJECT_SKILL_ABSENT`; zero calls; completed in
  12.7 seconds.
- Both screenshots and Session event logs preserve the corresponding results.
- Skill/control digests and negative file manifest were unchanged after execution.

Result: **pass**. Repository Skill discovery is confined to the fixture project and
does not leak into an unrelated sibling Workspace.
