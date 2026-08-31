# CDX-IMG-004 Session and Rollout Absence Check

Exact attempted prompt:

```text
Describe the attached image.
```

Recorded checks:

```text
DSH_PROMPT_HITS=0
PLUGIN_CODEX_ROLLOUT_HITS=0
DSH_HEALTH_DRAFT_HITS=0
```

The global Codex directory had one prompt text match in
`rollout-2026-08-29T09-08-36-01a04b0f-b969-7e53-a7b4-039eb1ea47b4.jsonl`.
That is the known operator/controller Thread running this validation and is excluded;
it is not a DSH plugin Thread. No other rollout matched.
