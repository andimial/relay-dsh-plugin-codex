# CDX-TXT-008 Live Evidence

## Selected state

- Created a fresh Session and selected `Codex`.
- Opened the Codex model group and selected non-default `GPT-5.6-Luna` before the
  first message.
- DSH displayed `GPT-5.6-Luna` with its default reasoning effort `Medium`.
- Machine locator count for the exact selected-state control: `1`.
- `selected.png` visually captures this pre-send state.

## Completed state

Sent exactly:

```text
Respond with exactly CDX_MODEL_008_LUNA and nothing else.
```

Observed:

| Check | Value |
| --- | --- |
| Exact terminal paragraph count | `1` |
| Completed model control | `GPT-5.6-Luna`, `Medium` |
| Model-control exact locator count | `1` |
| Persisted request model | `gpt-5.6-luna` |
| Persisted assistant source model | `gpt-5.6-luna` |
| Persisted provider | `relay-codex` |
| `停止生成` count | `0` |
| DSH timing | `LLM 5.7s`, first token `5.2s` |
| Composer visible/enabled | `true` / `true` |
| Non-empty, non-sent draft send enabled | `true` |
| Draft cleanup | empty text, send disabled |
| Browser warning/error diagnostics | `[]` |
| New isolated DSH Host output | none |

`completed.png` shows the unique exact answer and the unchanged Luna selection in a
terminal, ready-composer state.

Result: **pass**.
