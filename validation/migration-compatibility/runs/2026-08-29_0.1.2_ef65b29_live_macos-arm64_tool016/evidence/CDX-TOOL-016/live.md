# CDX-TOOL-016 Live Evidence

- A fresh Standard Session used `GPT-5.6-Sol Low`, `Workspace Write`, in the exact
  fixture Workspace.
- Pre-run fixture first line: `CHILD_ORACLE_6842_ZKPT`; SHA-256:
  `6306f2e2548c221b54d4231640de3fe81055252658d7b808d3088625aa2ac9ba`.
- The parent spawned exactly one child identity and waited for it.
- The child ran from the correct Workspace and did not use shell, but all seven native
  read attempts and one native grep attempt failed with
  `dynamic tool request failed`.
- The parent retried the same child three times, then completed with
  `PARENT_RECEIVED_dynamic tool request failed` instead of the required oracle.
- DSH persisted the same failure result and completed the turn normally.
- The fixture digest was unchanged after the run. Browser console logs were empty.

Result: **fail**. Subagent dispatch and return transport exist, but the dispatched
child could not use the required native file capability, so the user task was not
completed.
