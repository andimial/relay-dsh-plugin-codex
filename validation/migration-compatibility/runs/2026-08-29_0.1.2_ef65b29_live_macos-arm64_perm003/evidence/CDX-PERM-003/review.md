# CDX-PERM-003 Validation Review

## Reasonableness

- One turn proves the Session is usable for reading before testing mutation denial.
- The attempted target is inside the exact Workspace, so rejection is attributable to
  Read Only rather than the outside-Workspace boundary tested previously.
- An actual command and missing target make the check stronger than response prose.

## Reliability

- DSH selector, native turn context, successful read result, failed write result,
  filesystem absence, exact final, archive, and screenshot agree.
- The write command exits nonzero with an OS-level permission error, and no escalation
  or fallback was attempted.
- The deterministic input digest and exact returned bytes protect against a vacuous
  read-success claim.

## Verdict

**Pass, high confidence.** DSH Read Only maps to native Codex `read-only`, preserves
normal Workspace reads, and prevents real in-Workspace mutation.
