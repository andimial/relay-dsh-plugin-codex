# CDX-TXT-007 Live Evidence

## Active-turn stop

- Fresh DSH Session with visible `Codex`, `GPT-5.6-Sol`, `Low`.
- Requested start marker, tokens `S0001` through `S1000`, and a forbidden marker only
  after the final token.
- Qualifying active sample was found at sampling index `136`.
- Immediately before clicking stop (after screenshot capture/recheck):

| Field | Value |
| --- | --- |
| Elapsed | `7534 ms` sample; stop clicked at `7824 ms` |
| Partial assistant text length | `96` |
| Starts with `CDX_STOP_START_007` | `true` |
| Contains forbidden marker | `false` |
| `停止生成` count | `1` |
| Partial SHA-256 | `de3e233f12b195b1917ed02d061cbca1b9c94c5e326d8ecf97e2dffc2dc34080` |

`before-stop.png` visibly shows partial text, `Deep diving...`, and the active stop
button.

## Post-stop stability

The stopped assistant paragraph was:

```text
CDX_STOP_START_007 S0001 S0002 S0003 S0004 S0005 S0006 S0007 S0008 S0009 S0010 S0011 S0012 S0013
```

| Check | Immediate post-stop | After 5-second window |
| --- | --- | --- |
| Text length | `96` | `96` |
| SHA-256 | `de3e...4080` | `de3e...4080` |
| Contains forbidden marker | `false` | `false` |
| `停止生成` count | `0` | `0` |
| `已停止` count | `1` | `1` |

Additional checks:

- Assistant paragraphs containing forbidden marker: `0`.
- Persisted assistant events containing forbidden marker: `0`.
- Persisted turn end: `aborted` by `user`.
- Composer visible/enabled: `true` / `true`; a non-sent draft enabled send and was
  cleared successfully.
- Browser warning/error diagnostics: `[]`.
- New isolated DSH Host output: none.
- `after-stop.png` visibly shows the stable partial text, `已停止`, terminal actions,
  and a ready composer.

Result: **pass**.
