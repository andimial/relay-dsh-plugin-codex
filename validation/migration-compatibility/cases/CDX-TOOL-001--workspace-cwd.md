# CDX-TOOL-001 — Workspace cwd

## Traceability

- Primary requirement: `CDX-TOOL-001`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that a real Codex shell tool runs with cwd equal to the selected DSH Workspace.

## Preconditions

- `CDX-FILE-002` is closed.
- Selected Workspace is exactly
  `/Users/boboyang/work/Relay/integrations/codex/validation/migration-compatibility/fixtures/plain-text-workspace`.
- Fresh Session uses `GPT-5.6-Sol Low` and `Workspace Write`.

## Method

1. Create a fresh Codex Session in the selected Workspace.
2. Send exactly:

   ```text
   Use the shell tool to run pwd exactly once. Reply with the stdout path only and nothing else.
   ```

3. Require a real shell/command tool call whose command is `pwd`.
4. Require zero exit, stdout exactly equal to the selected Workspace path, and one
   terminal answer with that same path.
5. Retain DSH tool presentation, exact Codex rollout call/result, screenshot, and
   diagnostics.

## Expected results

- One real `pwd` command runs successfully.
- Tool stdout and terminal answer exactly equal the selected Workspace cwd.
- No alternate cwd or inferred-only answer is accepted.

## Result interpretation

- Pass only when the real tool result proves cwd identity.
- Fail for wrong cwd, no tool execution, non-zero exit, or mismatched answer.
- Blocked only when tool infrastructure cannot start independently of plugin behavior.

## Review focus

- Confirm the tool event/result, not just assistant prose.
- Verify the Session header Workspace and command cwd agree.
