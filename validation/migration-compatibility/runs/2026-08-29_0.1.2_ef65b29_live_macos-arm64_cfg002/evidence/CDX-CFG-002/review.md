# CDX-CFG-002 Validation Review

## Reasonableness

- The method isolates one project-layer setting with a positive project and a sibling
  control that differ in the presence of `.codex/config.toml`.
- Unique server, tool, input, result, and delivery markers prevent collision with user
  config, installed plugins, or DSH-contributed tools.
- The direct protocol oracle distinguishes product integration failure from a broken
  fixture.

## Reliability

- Each fresh rollout independently binds its exact cwd, so the negative result cannot
  be attributed to accidentally reusing the positive Workspace.
- The positive native MCP event, server log, structured result, DSH archive, and UI all
  agree on one exact call and result.
- The negative catalog result is reinforced by absence of nested/native MCP calls and
  a byte/line/mtime-stable server log; it tests actual non-loading, not assistant prose.
- Model, effort, access mode, approval policy, Host, and Codex version were held fixed.
- No config mutation or cleanup was required; all source fixtures retained their
  pre-run digests.

## Verdict

**Pass, high confidence.** Trusted project `.codex/config.toml` is consumed in its own
DSH Workspace and its MCP capability does not leak into the sibling Workspace.
