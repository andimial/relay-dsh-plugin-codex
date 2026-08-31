# CDX-TOOL-009 — Long-running shell streaming

## Traceability

- Primary requirement: `CDX-TOOL-009`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P1`

## Objective

Prove that intermediate stdout from an ongoing shell process becomes user-visible before
the process emits its terminal stdout and exits.

## Preconditions

- `CDX-TOOL-008` is closed.
- Fresh Session uses sanitized Workspace, `GPT-5.6-Sol Low`, `Workspace Write`.
- Browser and DSH Session event capture can be sampled during the live turn.

## Method

1. Create a fresh Session and send exactly:

   ```text
   Use the shell tool to run exactly this command: printf 'STREAM_FIRST_4102\n'; sleep 15; printf 'STREAM_LAST_8604\n'
   Set the initial shell yield time to 1000 milliseconds. If it is still running, poll the same shell session until it completes; do not run another command. After completion, reply STREAM_DONE only.
   ```

2. Detect the first structured tool yield with a live shell `session_id`, then immediately
   capture the DSH UI and Session events before fifteen seconds elapse. Require
   `STREAM_FIRST_4102` to be visible/persisted while
   `STREAM_LAST_8604` is absent and the turn/process remains running.
3. After completion, require the same shell session to yield `STREAM_LAST_8604`, exit 0,
   and a terminal answer containing `STREAM_DONE`.
4. Inspect rollout ordering and retain interim/final screenshots, Session events, and
   diagnostics.

## Expected results

- First marker is user-visible before process completion and before the last marker.
- Both markers preserve order; process exits 0; no second shell command is started.
- DSH Session remains usable after completion.

## Result interpretation

- Pass only with time-ordered pre-completion evidence of the first marker.
- Fail if output appears only after completion, markers/order are lost, or polling starts
  a different process.
- Blocked only if timing capture infrastructure fails independently of product behavior.

## Review focus

- A final tool result containing both markers is insufficient proof of streaming.

Revision note: the first execution used an eight-second wait, but browser sampling fell
on the two sides of the first-yield interval. It is retained as an invalid capture. The
wait was extended to fifteen seconds so the retry can synchronize on the structured
first yield without changing the capability under test.
