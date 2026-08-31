# CDX-TOOL-005 Sanitized Codex Rollout Evidence

Source Thread rollout:
`rollout-2026-08-29T11-26-36-01a04b8e-0fd5-7b63-b5e6-220924310df3.jsonl`.

```json
{"tool":"dsh__edit","arguments":{"file_path":"edit-fixture/targeted-edit.txt","old_string":"TARGET_VALUE=BEFORE_8642","new_string":"TARGET_VALUE=AFTER_7319"},"result":"Error: edit requires reading the file first"}
{"tool":"dsh__read","arguments":{"file_path":"edit-fixture/targeted-edit.txt"},"result":{"path":"/Users/boboyang/work/Relay/integrations/codex/validation/migration-compatibility/fixtures/plain-text-workspace/edit-fixture/targeted-edit.txt","content":["1: HEADER_KEEP_1357","2: TARGET_VALUE=BEFORE_8642","3: MIDDLE_KEEP_9753","4: TAIL_KEEP_2468"],"total_lines":4}}
{"tool":"dsh__edit","arguments":{"file_path":"edit-fixture/targeted-edit.txt","old_string":"TARGET_VALUE=BEFORE_8642","new_string":"TARGET_VALUE=AFTER_7319"},"result":"updated successfully"}
{"assistant":"EDITED"}
```

No shell call occurred. The initial edit was a non-mutating tool-contract rejection;
the second edit was the one successful mutation.
