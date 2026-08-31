# CDX-TXT-006 Live Evidence

## Setup

- Created a fresh isolated DSH Session and selected visible `Codex` before turn one.
- DSH displayed `GPT-5.6-Sol`, `Low`, and `Workspace Write` for both turns.

## Turn one

Sent once:

```text
Remember the token CDX_MEMORY_A_006_7C91 for the next turn and reply exactly ACK_CDX_006.
```

Observed one terminal assistant paragraph exactly equal to `ACK_CDX_006`. DSH
displayed `用时 9秒`, first token `8.9秒`, aggregate `LLM 9.4s`.

## Turn two

Sent in the same Session:

```text
What exact token did I ask you to remember in the immediately preceding turn? Reply with the token only.
```

The second prompt's local exact string contains the memory marker: `false`.

Observed one terminal assistant paragraph exactly equal to
`CDX_MEMORY_A_006_7C91`. DSH displayed `用时 5秒`, first token `4.6秒`, and
conversation aggregate `2 轮 · 2 步 | LLM 14.9s`.

## Machine-readable checks

| Check | Observed |
| --- | --- |
| ACK terminal paragraph count | `1` |
| Recalled marker terminal paragraph count | `1` |
| Second prompt includes memory marker | `false` |
| Shared replay-state Thread ID | `true` |
| Distinct replay-state Turn IDs | `true` |
| `停止生成` count after turn two | `0` |
| Reply composer visible/enabled | `true` / `true` |
| Non-empty, non-sent draft send enabled | `true` |
| Draft cleanup | empty text, send disabled |
| Browser warning/error diagnostics | `[]` |
| New isolated DSH Host output | none |

## Retained artifacts

- `session-events.md`: filtered, sanitized replay-state evidence.
- `completed.png`: visually reviewed two-turn conversation in correct order with a
  ready composer.

Result: **pass**.
