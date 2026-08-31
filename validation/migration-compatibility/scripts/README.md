# Codex Validation Scripts

Scripts in this directory automate Codex-only setup, execution, redaction, evidence
collection, and report generation. Each script must:

- accept explicit fixture and output paths;
- avoid a user's real Codex configuration and credentials in captured output;
- print the exact versions and commit identifiers it used;
- write only inside the selected run directory or temporary fixture directory;
- return non-zero when an asserted observable fails.

## `compact-thread.mjs`

Resumes one existing Thread in the configured `CODEX_HOME` and invokes the supported
App Server `thread/compact/start` method. Output contains protocol identities, timing,
notification method counts, and server-request method names only; it never prints
Thread history or model content.
