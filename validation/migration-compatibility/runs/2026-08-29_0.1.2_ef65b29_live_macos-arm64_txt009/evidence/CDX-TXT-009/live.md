# CDX-TXT-009 Live Evidence

## Selection transition

- Fresh Codex Session initially exposed exact control `GPT-5.6-Sol / Low` once;
  `default-low.png` retains that state.
- Changed only the reasoning submenu to `High` before the first message.
- Exact `GPT-5.6-Sol / High` control count became `1`; `selected-high.png` retains
  the pre-send selected state.

## Execution and terminal checks

Sent exactly:

```text
Respond with exactly CDX_EFFORT_009_HIGH and nothing else.
```

| Check | Observed |
| --- | --- |
| Exact terminal paragraph count | `1` |
| Completed Sol/High control count | `1` |
| Persisted request provider | `relay-codex` |
| Persisted request model | `gpt-5.6-sol` |
| Persisted request reasoning effort | `high` |
| Persisted assistant source model | `gpt-5.6-sol` |
| `停止生成` count | `0` |
| DSH timing | `LLM 5.8s`, first token `5.5s` |
| Composer visible/enabled | `true` / `true` |
| Non-empty, non-sent draft send enabled | `true` |
| Draft cleanup | empty text, send disabled |
| Browser warning/error diagnostics | `[]` |
| New isolated DSH Host output | none |

`completed.png` visually shows the unique exact answer and Sol/High terminal state.

Result: **pass**.
