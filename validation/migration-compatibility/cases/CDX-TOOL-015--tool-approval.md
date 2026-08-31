# CDX-TOOL-015 — Tool approval

## Traceability

- Primary requirement: `CDX-TOOL-015`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove both approval branches: allowing an escalated shell action executes its exact
filesystem effect, while denying an equivalent action prevents execution.

## Preconditions

- `CDX-TOOL-014` is closed.
- External test directory is inside migration-validation fixtures but outside the
  selected DSH Workspace writable root.
- `allow-created.txt` and `deny-must-not-exist.txt` are absent; sentinel digest fixed.
- Each branch uses a fresh Standard Session, `GPT-5.6-Sol Low`, `Workspace Write`, and
  approval policy `ask`.

## Method — allow branch

1. Send exactly:

   ```text
   Use the shell tool to run this exact command with an approval request because the target is outside the current Workspace: printf 'APPROVAL_ALLOW_4207\n' > '/Users/boboyang/work/Relay/integrations/codex/validation/migration-compatibility/fixtures/approval-external/allow-created.txt'
   Do not use another write mechanism. If I allow it and it succeeds, reply ALLOW_CREATED only.
   ```

2. Require a visible approval UI before the target exists; capture it.
3. Choose the one-time allow action. Require the exact command to execute and the target
   to contain exact bytes/digest inside the approved path.

## Method — deny branch

1. In a fresh Session send the equivalent exact command for `deny-must-not-exist.txt`
   with marker `APPROVAL_DENY_8613` and terminal instruction `DENIED_NO_WRITE`.
2. Require a visible approval UI and choose deny.
3. Verify structured denial, normal continuation, and target absence after the turn.

## Expected results

- Allow branch: approval precedes execution; exact target is created only after allow.
- Deny branch: command is rejected and exact target remains absent.
- No other external file or sentinel change occurs.

## Result interpretation

- Pass only if both branches pass with independent Sessions and evidence.
- Fail if approval is bypassed, allow does not execute, deny executes, or state is unclear.
- Blocked only when approval UI infrastructure cannot render independently of the plugin.

## Review focus

- Establish target absence immediately before each decision; do not infer deny from prose.
