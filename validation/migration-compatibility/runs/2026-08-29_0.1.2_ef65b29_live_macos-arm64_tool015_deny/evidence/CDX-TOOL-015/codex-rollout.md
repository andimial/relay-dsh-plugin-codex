# CDX-TOOL-015 Deny Branch Sanitized Codex Rollout Evidence

Source Thread rollout:
`rollout-2026-08-29T12-05-14-01a04bb1-6c3e-7892-b0c1-5fb47686ffc9.jsonl`.

```json
{"tool":"exec_command","arguments":{"cmd":"printf 'APPROVAL_DENY_8613\\n' > '/Users/boboyang/work/Relay/integrations/codex/validation/migration-compatibility/fixtures/approval-external/deny-must-not-exist.txt'","sandbox_permissions":"require_escalated","justification":"Do you want to allow writing this requested file outside the current workspace?"}}
{"result":"Rejected(approval request failed)"}
{"assistant":"DENIED_NO_WRITE"}
```

The file stayed absent, but there was no user-driven denial event.
