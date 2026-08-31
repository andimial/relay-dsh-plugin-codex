# Codex Run Results

| Requirement | Case | Result | Duration | Evidence | Notes |
| --- | --- | --- | --- | --- | --- |
| CDX-EXT-016 | `cases/CDX-EXT-016--dynamic-dsh-tool-refresh.md` | fail | 2 turns plus control | `evidence/CDX-EXT-016/` | Existing Session/Thread kept old catalog; fresh Session saw and executed exact tool |

## Failures

- Expected: later turn in Session `16b9bc77-d344-4854-93ca-6f4b90cfb3e9` and Thread
  `01a04c0d-7c07-7182-a671-9fa12797ab1e` sees `late_probe_1616`.
- Actual: two catalog checks found zero matches and the final response said the tool was
  unavailable. Fresh control Session `6230ca58-f4b7-4d0e-96a6-43be4fa99350` immediately
  advertised, invoked, and returned the exact fixture marker.

## Summary

- Passed: 0
- Failed: 1
- Blocked: 0
- Not run: 0
- Applicability boundary: tool-set change introduced by a valid isolated DSH plugin
  between turns, across a Host restart
