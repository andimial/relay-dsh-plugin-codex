# CDX-TOOL-010 — Shell interruption

## Traceability

- Primary requirement: `CDX-TOOL-010`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that stopping a DSH Codex turn terminates its active long-running shell process so
a delayed filesystem marker is never created.

## Preconditions

- `CDX-TOOL-009` is closed.
- Parent directory `interrupt-output/` exists, but target
  `interrupt-output/should-not-exist.txt` is absent.
- Fresh Session uses sanitized Workspace, `GPT-5.6-Sol Low`, `Workspace Write`.

## Method

1. Record target absence and sentinel digest.
2. Create a fresh Session and send exactly:

   ```text
   Use the shell tool to run exactly this command: sleep 15; printf 'LATE_MARKER_5127\n' > interrupt-output/should-not-exist.txt
   Set the initial shell yield time to 1000 milliseconds. If it is still running, poll the same shell session until it completes. After completion, reply LATE_COMMAND_FINISHED only.
   ```

3. Detect the first structured result containing a live shell `session_id`, then click
   the visible DSH `停止生成` control while the target is still absent.
4. Capture immediate stopped UI/Session/rollout state.
5. Wait at least 17 seconds after stopping (longer than the original delay), then verify
   target remains absent, sentinel unchanged, and no late completion is appended.
6. Retain synchronized screenshots, timestamps, events, process result, diagnostics.

## Expected results

- Stop action ends the turn and active process before delayed write.
- Target remains absent after the safety window; sentinel remains unchanged.
- No `LATE_COMMAND_FINISHED` or late marker appears in DSH history.

## Result interpretation

- Pass only with synchronized active-session evidence and delayed absence verification.
- Fail if target appears, process completes normally, late content is appended, or stop
  does not end the active work.
- Blocked only if the stop control/capture infrastructure cannot be operated.

## Review focus

- Immediate absence alone is insufficient; require the post-delay check.
