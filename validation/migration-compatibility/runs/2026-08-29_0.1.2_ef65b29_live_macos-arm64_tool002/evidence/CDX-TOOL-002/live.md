# CDX-TOOL-002 Live Evidence

Fixture uniqueness preflight:

```text
nested/discovery/cdx_tool002_9qk7.txt
Line 2: SEARCH_ORACLE=FOUND_5821_ZXCV
```

- Fixture SHA-256:
  `8483248812ed852c304acb96f36a88148893767fcad46a8cd36251aeaa1cce1d`.
- Exact rollout call order:
  1. `dsh__glob({pattern:"cdx_tool002_*"})` returned the unique relative path.
  2. `dsh__grep({path:"nested/discovery/cdx_tool002_9qk7.txt", pattern:"SEARCH_ORACLE"})`
     returned one match at line 2 with the exact marker.
- No shell command was invoked.
- Terminal answer exactly:

  ```text
  nested/discovery/cdx_tool002_9qk7.txt|SEARCH_ORACLE=FOUND_5821_ZXCV
  ```

- Exact answer count: `1`; turn completed in `16.4s`, first token `15.1s`.
- `completed.png` records the visible result.
- Browser warning/error diagnostics: `[]`; isolated Host output: none.

Result: **pass**.
