# Codex Migration Compatibility Validation

This directory executes and records the Codex-only requirements in
`docs/spec/migration-compatibility/`.

## Layout

```text
cases/       One primary Markdown case per atomic CDX requirement.
fixtures/    Sanitized deterministic input projects, images, Skills, MCP, and plugins.
scripts/     Codex-only runners and evidence collectors.
runs/        Append-only execution records, results, and raw evidence.
reports/     Derived current coverage and gap summaries.
templates/   Codex-owned case, run, and result templates.
```

## Workflow

1. Select a `ready` `CDX-*` requirement.
2. Create or update its primary case from `templates/case.md`.
3. Add a sanitized fixture and record its digest when required.
4. Create a new run directory from `templates/run.md`.
5. Execute the exact case without editing historical runs.
6. Record every case result in `results.md` from `templates/result.md`.
7. Store evidence below that run and update a derived report.

Run directory names use:

```text
YYYY-MM-DD_<plugin-version>_<short-sha>_<platform>
```

If two runs would collide, append `_02`, `_03`, and so on.

