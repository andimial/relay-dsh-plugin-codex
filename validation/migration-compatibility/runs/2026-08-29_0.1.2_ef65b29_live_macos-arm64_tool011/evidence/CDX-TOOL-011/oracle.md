# CDX-TOOL-011 Independent Oracle

- Fixture SHA-256:
  `813092789697a30a04bb04103131c7100d09619490daa16948bb5db2fc9cab46`.
- Command: `node --test test-fixture/deterministic.test.mjs` from the selected Workspace.
- Independent exit code: `1`.
- Stable semantic output:

  ```text
  ✔ PASS_MARKER_2461
  ✖ FAIL_MARKER_9753
  tests 2
  pass 1
  fail 1
  cancelled 0
  skipped 0
  todo 0
  AssertionError [ERR_ASSERTION]
  actual: ACTUAL_1357
  expected: EXPECTED_8642
  ```

Timing and stack line/column values are intentionally excluded from the oracle.
