# CDX-EXT-007 — Project MCP

## Traceability

- Primary requirement: `CDX-EXT-007`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that an MCP configured in a trusted project's `.codex/config.toml` executes inside
that project and is absent from an unrelated sibling Workspace.

## Preconditions

- `CDX-EXT-006` is closed.
- Positive fixture contains `.codex/config.toml` defining required STDIO server
  `relay_project_7731`; isolated global config trusts the positive project.
- Sibling control contains no `.codex/config.toml` and no project server fixture.
- Direct server protocol oracle and all digests are recorded.
- Both branches use fresh Standard Sessions on the isolated Host, `GPT-5.6-Sol Low`,
  `Workspace Write`.

## Method

1. Record direct initialize/list/call oracle, config/server digests, and control manifest.
2. Positive branch sends exactly:

   ```text
   Call only the relay_project_7731 MCP tool project_echo_7731 with token PROJECT_INPUT_7731_HZKP. Reply with the exact returned text only.
   ```

3. Require server initialization/list/call log, one exact Codex native MCP event, text
   `STDIO_PROJECT_OK_7731_HZKP`, structured scope `project`, and exact DSH delivery.
4. Add/select the sibling control Workspace and, in a fresh Session, send exactly:

   ```text
   Use the exec tool exactly once to compute ALL_TOOLS.filter(x => x.name.includes("relay_project_7731") || x.name.includes("project_echo_7731")).map(x => x.name). If the resulting array is empty, reply PROJECT_MCP_ABSENT only; otherwise reply PROJECT_MCP_LEAKED_<comma-separated names>. Do not call any matching MCP tool.
   ```

5. Require the negative rollout's actual tool-set inspection to find zero matches,
   terminal/persisted `PROJECT_MCP_ABSENT`, and no project-server start/call caused by
   the negative branch.
6. Verify source/config/control digests and real user config remain unchanged.

## Expected results

- Positive trusted project discovers and calls its MCP.
- Sibling Workspace does not expose or start that project MCP.
- Global MCP may remain present but is not a substitute for project provenance.

## Result interpretation

- Pass only when both positive execution and negative absence are proven.
- Fail for missing positive tool, cross-project leakage, wrong provenance/result, or
  fallback.
- Blocked only when Workspace switching cannot operate independently of MCP behavior.

## Review focus

- The negative answer must be backed by actual available-tool inspection, not model
  recollection.
