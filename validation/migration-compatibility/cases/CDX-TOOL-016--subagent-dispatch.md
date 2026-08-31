# CDX-TOOL-016 — Subagent dispatch

## Traceability

- Primary requirement: `CDX-TOOL-016`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P1`

## Objective

Prove that the owning Codex turn can dispatch one child agent, receive its unique file
result, and present that result in the same DSH Session.

## Preconditions

- `CDX-TOOL-015` is closed.
- `subagent-fixture/child-oracle.txt` has a unique first-line marker and recorded digest.
- Fresh Standard Session uses `GPT-5.6-Sol Low`, `Workspace Write`.
- User prompt explicitly authorizes one child agent, satisfying the active delegation
  policy.

## Method

1. Record fixture digest and ensure marker does not occur elsewhere in the Workspace.
2. Create a fresh Session and send exactly:

   ```text
   Spawn exactly one child agent. The child must use the read tool, not shell, to read subagent-fixture/child-oracle.txt and return its first line only. The parent must not read the file directly. Wait for that child and then reply PARENT_RECEIVED_<child exact first line> only.
   ```

3. Require a real subagent spawn, one child task/Thread, child native read of the exact
   relative path, child final exact marker, and parent receipt/wait.
4. Require owning turn terminal `PARENT_RECEIVED_CHILD_ORACLE_6842_ZKPT` and normal DSH
   persistence.
5. Retain parent/child rollouts, Session events, screenshot, fixture digest, diagnostics.

## Expected results

- Exactly one child agent runs in the selected Workspace and reads exact source.
- Child result returns to parent; parent uses it without direct source read.
- Owning DSH Session preserves exact combined marker and remains usable.

## Result interpretation

- Pass only when parent/child identities, source read, result return, and owner delivery
  are all evidenced.
- Fail for no/fake child, parent direct read, wrong cwd/path/result, lost child result, or
  missing owner delivery.
- Blocked only when child-agent runtime cannot start for an environmental reason.

## Review focus

- Parent final text alone is insufficient; marker must be traced through child evidence.
