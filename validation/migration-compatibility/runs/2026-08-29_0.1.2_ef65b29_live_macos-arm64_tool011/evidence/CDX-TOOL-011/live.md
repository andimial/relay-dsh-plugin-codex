# CDX-TOOL-011 Live Evidence

- Fixture SHA-256 before and after plugin execution:
  `813092789697a30a04bb04103131c7100d09619490daa16948bb5db2fc9cab46`.
- Independent oracle ran exact command and observed 2 tests, 1 pass, 1 fail, exit 1,
  with unique pass/fail names and assertion values retained in `oracle.md`.
- Fresh Session visibly used `GPT-5.6-Sol Low` and `Workspace Write`.
- Rollout contains exactly one native shell call with the exact command and workdir.
- Structured result reports exit 1 and raw TAP semantics exactly matching the oracle:
  `PASS_MARKER_2461`, `FAIL_MARKER_9753`, tests 2, pass 1, fail 1, and the unique
  actual/expected assertion values.
- DSH persisted `TESTS 1_PASS 1_FAIL EXIT_1`; its interpretation is correct.
- One progress sentence preceded the requested exact-only reply; recorded as a minor
  response-exactness deviation.
- Turn completed normally in `11.8s`; first token `7.1s`.
- Browser warning/error diagnostics: `[]`; isolated Host output: none.

Result: **pass**.
