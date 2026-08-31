# CDX-PERM-001 Validation Review

## Reasonableness

- The test requires both read and write in one fresh native Thread and checks the
  selected policy separately from the filesystem consequence.
- The output is derived from a deterministic input and compared byte-for-byte, so a
  generic success response cannot satisfy the oracle.
- Outside-Workspace and read-only behavior remain isolated for their own cases.

## Reliability

- Native turn context, tool call/results, actual output digest, final marker, DSH
  archive, and UI all identify the same Thread and operation.
- The write path is an exact child of the recorded cwd, while native policy lists that
  cwd as the writable root and disables network.
- Post-run cleanup proves the generated file did not become an uncontrolled fixture
  dependency.
- Missing compact UI tool rows reduce presentation observability but not the stronger
  native and filesystem evidence.

## Verdict

**Pass, high confidence.** The plugin preserves selected Workspace Write policy and
supports real read/create/read-back work inside the DSH Workspace. Compact UI tool-step
visibility is weaker than the native rollout and should be improved independently.
