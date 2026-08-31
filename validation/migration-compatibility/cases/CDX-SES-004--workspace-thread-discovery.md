# CDX-SES-004 — Workspace Thread discovery

## Traceability

- Primary requirement: `CDX-SES-004`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that DSH's Codex import discovery presents eligible existing Threads for the
selected Workspace, excludes already-bound and other-Workspace Threads, and has no
duplicate IDs.

## Preconditions

- `CDX-SES-003` is closed.
- CODEX_HOME contains multiple completed Threads from plain-text, project-control,
  Unicode/spaced, nested, and override Workspaces.
- Dedicated link store identifies one already-bound plain-text Thread.

## Method

1. Enumerate native rollout metadata into exact cwd → Thread-ID sets and identify the
   already-bound Thread.
2. With the plain-text Workspace selected, open the DSH `导入 Codex 会话` discovery UI
   without importing anything.
3. Capture every displayed candidate ID/title/cwd and compare against native metadata.
4. Require no already-bound ID, no other-Workspace ID, no duplicate ID, and at least
   one known eligible plain-text candidate.
5. Close without mutation, retain screenshot/evidence, and self-review.

## Expected results

- Candidate set is Workspace-scoped, unique, and excludes the current native binding.

## Result interpretation

- Pass only when positive and negative membership checks all agree.
- Fail for cross-Workspace leakage, duplicates, missing known candidate, or bound entry.
- Blocked only when discovery UI cannot be opened for the selected Workspace.

## Review focus

- Compare immutable Thread IDs, not similar generated titles.
- Do not import during this discovery-only requirement.
