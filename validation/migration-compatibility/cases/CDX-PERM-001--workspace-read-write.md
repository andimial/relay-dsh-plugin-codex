# CDX-PERM-001 — Workspace read and write

## Traceability

- Primary requirement: `CDX-PERM-001`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that a DSH Session configured for Workspace Write admits the matching native
Codex sandbox/approval policy and can read then mutate only the selected Workspace.

## Preconditions

- Isolated Host is running the pinned Relay Codex plugin and CLI.
- `fixtures/plain-text-workspace/permission-probe-input.txt` has a recorded digest.
- `permission-probe-output.txt` is absent before the turn.

## Method

1. Record input/config digests and output absence.
2. Start a fresh plain-text-workspace Session; select `GPT-5.6-Sol Low` and
   `Workspace Write` with `on-request` approval.
3. Ask the agent to read the exact input, create the exact derived output using a
   native file tool, read it back, and report a fixed completion marker.
4. Require rollout turn context to record `workspace-write` and `on-request`, require
   native tool-call/result evidence, and compare output bytes to the oracle.
5. Retain rollout/archive/UI evidence, remove the generated output, prove cleanup,
   and self-review.

## Expected results

- Exact input is read and exact expected output is created inside the Workspace.
- Effective native policy matches DSH selection; no outside-Workspace write occurs.

## Result interpretation

- Pass only when policy evidence, tool evidence, and filesystem effect agree.
- Fail for policy mismatch, denied in-Workspace operation, or incorrect bytes.
- Blocked only when the isolated DSH Host cannot admit a fresh Codex turn.

## Review focus

- Do not count a prose claim as a write; verify the real file and native result.
- Separate basic Workspace access from outside-Workspace and read-only cases.
