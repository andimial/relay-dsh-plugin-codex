# CDX-EXT-003 — Manual Skill invocation

## Traceability

- Primary requirement: `CDX-EXT-003`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that a user can explicitly invoke a discovered project Skill from the DSH
composer and receive the Skill's unique output in the owning Session.

## Preconditions

- `CDX-EXT-002` is closed.
- Project Skill `cdx-project-oracle-7349` exists only in the positive fixture Workspace;
  its instruction-only oracle is recorded but omitted from the user prompt.
- Fresh Standard Session uses `GPT-5.6-Sol Low`, `Workspace Write`.

## Method

1. Record the Skill source digest and prove its output marker occurs nowhere else inside
   the Workspace.
2. In a fresh positive-Workspace Session, send exactly:

   ```text
   $cdx-project-oracle-7349 Reply with the exact marker required by this Skill and no other text.
   ```

3. Inspect the Codex rollout for the exact invocation text, Skill source/content load,
   and absence of unrelated tool calls or shell fallback.
4. Require terminal `PROJECT_SKILL_ORACLE_7349_QVNX` and matching DSH persistence.
5. Retain rollout, Session events, screenshot, source digest, and diagnostics.

## Expected results

- Codex resolves the named project Skill and follows its instruction.
- The unique marker returns exactly to the same DSH Session.
- The turn completes normally without unrelated mutation.

## Result interpretation

- Pass only when source/content use is traced and exact marker is delivered.
- Fail for unknown Skill, guessed/wrong marker, direct prompt echo, missing source use, or
  lost DSH delivery.
- Blocked only when a fresh Session cannot start independently of Skill invocation.

## Review focus

- Exact final text is insufficient unless the rollout proves access to the Skill source
  or host-injected Skill content.
