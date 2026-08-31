# CDX-TOOL-012 Sanitized Codex Rollout Evidence

Source Thread rollout:
`rollout-2026-08-29T11-51-31-01a04ba4-e02e-7672-9c45-264f4fab74e9.jsonl`.

```json
{"tool":"exec_command","arguments":{"cmd":"git -C git-fixture status --short && git -C git-fixture diff -- tracked.txt","workdir":"/Users/boboyang/work/Relay/integrations/codex/validation/migration-compatibility/fixtures/plain-text-workspace"}}
{"output":" M tracked.txt\n?? new.txt\ndiff --git a/tracked.txt b/tracked.txt\n@@ -1,2 +1,2 @@\n-BASE=ONE_3141\n+BASE=TWO_2718\n KEEP=UNCHANGED_5926\n"}
{"assistant":"GIT_STATUS MODIFIED_TRACKED UNTRACKED_NEW DIFF_ONE_TO_TWO"}
```

The generated wrapper emitted only `r.output`, so it did not retain the structured exit
field. Exact output and independent post-state checks remain available.
