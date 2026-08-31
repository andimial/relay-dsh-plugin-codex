# CDX-FILE-002 — Table attachment or explicit rejection

## Traceability

- Primary requirement: `CDX-FILE-002`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P1`

## Objective

Prove that a user can submit a CSV table attachment for marker readback, or receives an
explicit rejection that clearly states this attachment type is unsupported.

## Fixture

- CSV: `fixtures/file-table/table.csv`.
- Undisclosed oracle cell: `TABLE_MARKER_8642_ZMNP`.
- SHA-256:
  `e279104e881e08a34702e41f0f6a6b20a233d4ded46db4b96c686c880890535a`.
- Byte count: `50`.

## Preconditions

- `CDX-FILE-001` is closed.
- Fresh DSH Session uses `GPT-5.6-Sol Low`.
- Fixture lies outside the selected sanitized Workspace.

## Method

1. Create a fresh Codex Session and inspect the attachment/file-input surface.
2. Put the exact CSV bytes on the browser clipboard with MIME `text/csv`, focus the
   composer, and paste once.
3. Inspect pending attachment state and any explicit rejection alert.
4. If accepted, send exactly:

   ```text
   Read the attached table and reply with the exact value in the oracle row only. Preserve character case and underscores.
   ```

5. If no attachment can be submitted, require an explicit user-visible unsupported
   message for a non-failing result.
6. Retain screenshot, DOM counts, DSH/rollout absence or content evidence, and
   diagnostics.

## Expected results

- Either the exact table attachment reaches Codex and the marker is returned, or DSH
  explicitly rejects `text/csv` as unsupported.
- Silent omission, plain-text substitution, or absence of an attachment path fails.

## Result interpretation

- Pass for supported exact readback or explicit pre-model rejection.
- Fail for silent/no attachment behavior or incorrect content handling.
- Blocked only when the browser clipboard itself cannot carry the MIME payload and no
  ordinary DSH file control can be inspected.

## Review focus

- Distinguish explicit product rejection from the absence of a product feature.
- Do not expose the marker through plain-text paste or Workspace access.
