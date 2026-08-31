# CDX-TOOL-011 — Test execution

## Traceability

- Primary requirement: `CDX-TOOL-011`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that Codex can execute a real deterministic test suite and correctly interpret
its one-pass/one-fail result and non-zero exit.

## Preconditions

- `CDX-TOOL-010` is closed.
- `test-fixture/deterministic.test.mjs` matches its recorded digest and defines exactly
  one passing and one intentionally failing Node test.
- Fresh Session uses sanitized Workspace, `GPT-5.6-Sol Low`, `Workspace Write`.

## Method

1. Independently run the exact fixture command once as the oracle and retain its output,
   count summary, and exit status.
2. Create a fresh Session and send exactly:

   ```text
   Use the shell tool to run exactly: node --test test-fixture/deterministic.test.mjs
   Do not change any file. Report the observed totals and exit status by replying TESTS 1_PASS 1_FAIL EXIT_1 only.
   ```

3. Require one exact native shell call and structured exit 1.
4. Match its TAP output to both unique test names and one-pass/one-fail totals.
5. Verify the persisted assistant interpretation and unchanged fixture digest.

## Expected results

- Runner reports exactly 2 tests: 1 pass, 1 fail; exit code 1.
- Failure output identifies `FAIL_MARKER_9753`; pass output identifies
  `PASS_MARKER_2461`.
- Assistant interpretation agrees; fixture remains unchanged.

## Result interpretation

- Pass only when raw test output, structured exit, and interpretation all agree.
- Fail for wrong command/counts/status, false success, missing failure identity, mutation.
- Blocked only when the installed Node runtime cannot run the fixture independently of
  plugin behavior.

## Review focus

- Never accept the requested reply without verifying raw runner output.
