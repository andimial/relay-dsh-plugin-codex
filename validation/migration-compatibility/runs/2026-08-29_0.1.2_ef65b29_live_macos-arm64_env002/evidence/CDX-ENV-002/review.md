# CDX-ENV-002 Validation Review

## Reasonableness

- The DSH Workspace itself, not merely an argument, contains both Unicode and spaces.
- Independent `pwd`, source read, absolute patch, read-back, and byte comparison cover
  cwd binding plus input/output path quoting.
- A deterministic source and exact generated digest prevent generic-success scoring.

## Reliability

- Registration/config digests, native turn context, raw tool inputs/results, real
  filesystem bytes, archive, and UI all preserve the same characters and spacing.
- Final `cmp` runs in the exact native cwd and exits zero, while an external digest
  independently verifies the resulting bytes.
- Only the generated output is removed; the registered sanitized fixture remains
  reproducible.

## Verdict

**Pass, high confidence.** The Relay Codex integration preserves a non-ASCII/spaced DSH
Workspace path and supports correct native reads and writes to non-ASCII/spaced names.
