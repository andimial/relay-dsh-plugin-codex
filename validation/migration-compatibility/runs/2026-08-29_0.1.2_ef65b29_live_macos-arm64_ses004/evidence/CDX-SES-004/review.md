# CDX-SES-004 Validation Review

## Reasonableness

- Native cwd→Thread sets provide a deterministic oracle independent of the DSH UI.
- Two Workspaces with counts 24 and 1 demonstrate that summary filtering is scoped.
- The already-bound Thread creates a direct exclusion control in the plain Workspace.

## Reliability

- Unique native IDs, exact DSH counts, byte-identical link store, and two screenshots
  make summary-cardinality correctness high-confidence.
- However, membership identity cannot be checked by the user because no candidates are
  rendered. Exact totals cannot rule out an identity swap inside the hidden set.
- The requirement says eligible Threads are listed correctly; a bulk-only count is not
  a list and prevents choosing a specific source Session.

## Verdict

**Fail, high confidence.** Workspace filtering/counting appears correct, but DSH does
not list discovered Codex Threads or expose their IDs/titles and offers only bulk import.
Users cannot inspect or select the Thread they intend to migrate.
