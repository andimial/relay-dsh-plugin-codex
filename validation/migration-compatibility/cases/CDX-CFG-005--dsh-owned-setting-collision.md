# CDX-CFG-005 — DSH-Owned Setting Collision

## Traceability

- Primary requirement: `CDX-CFG-005`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove and document the effective precedence when user `config.toml` conflicts with DSH
Session choices for model, reasoning effort, sandbox, and approval policy.

## Preconditions

- `CDX-CFG-004` is closed and isolated user config is restored.
- Sibling control Workspace has no project config and a clean marker-file baseline.
- DSH UI can explicitly select `GPT-5.6-Sol Low` and `Workspace Write`; its standard
  Session policy is `ask`/Codex `on-request`.

## Method

1. Add opposing valid user values: model `gpt-5.4`, effort `high`, sandbox `read-only`,
   and approval `never`; validate with the pinned CLI config parser and restart.
2. In a fresh control-Workspace Session explicitly select `GPT-5.6-Sol Low` and
   `Workspace Write`, then make one unified `apply_patch` call that creates an exact
   in-Workspace marker and return an exact terminal marker.
3. Inspect native rollout `turn_context`, request/session headers, call/result, file
   digest, DSH archive, and UI for effective model, effort, sandbox, and approval.
4. Delete only the proof marker, remove the four temporary user values, require the
   original config digest, restart normally, and self-review.

## Expected results

- Effective values are model `gpt-5.6-sol`, effort `low`, sandbox `workspace-write`,
  and approval `on-request`/DSH `ask`.
- The write succeeds despite user `read-only`, and no user-level opposing value becomes
  the effective turn value.

## Result interpretation

- Pass when all four native effective values match DSH and the real write succeeds.
- Fail when any opposing user value wins or the DSH-selected policy cannot execute the
  safe in-Workspace write.
- Blocked only when an otherwise valid opposing config prevents Session creation.

## Review focus

- Distinguish config parsing from effective turn precedence; bind the conclusion to the
  fresh Thread's native context rather than assistant prose.
