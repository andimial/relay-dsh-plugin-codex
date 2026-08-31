# CDX-TXT-001 Live Evidence

## Setup and backend identity

- Started DSH Web from a new isolated home at
  `/private/tmp/relay-cdx-validation-20260829-txt001` on loopback port `4391`.
- The isolated profile declares
  `relay-dsh-plugin-codex: link:/Users/boboyang/work/Relay/integrations/codex`.
- Module resolution and `realpath` both resolve the installed plugin to the current
  local integration, whose version/commit are `0.1.2` /
  `ef65b29dd52c92278a2717f19d2a8f056cefdfaa`.
- Selected the sanitized `plain-text-workspace` fixture in DSH Web.
- Before sending the first message, selected the visible `Codex` preset. The
  conversation header then displayed `Codex`, model `GPT-5.6-Sol`, effort `Low`,
  and access mode `Workspace Write`.

## Exact interaction

Sent once:

```text
Respond with exactly CDX_TXT_001_OK_8F31 and nothing else.
```

The running state displayed `停止生成`. The completed state displayed:

```text
Respond with exactly CDX_TXT_001_OK_8F31 and nothing else.
CDX_TXT_001_OK_8F31
用时 7秒 · 首 token 6.7秒
1 轮 · 1 步 | LLM 7.3s
```

## Machine-readable checks

| Check | Observed |
| --- | --- |
| Exact user prompt count | `1` |
| Exact terminal marker count | `1` |
| Reply composer visible/enabled | `true` / `true` |
| `停止生成` count after completion | `0` |
| Empty composer send enabled | `false` |
| Non-empty draft send enabled | `true` |
| Draft successfully cleared | empty text, send disabled |
| Browser warning/error diagnostics | `[]` |
| New DSH Host output after turn | none |

The DOM placed the answer in one terminal `paragraph`, with no duplicate partial or
final projection. No tool row occurred, as expected for this case.

## Retained artifacts

- `completed-clean.png`: visually reviewed clean terminal DSH state.
- The exact DOM excerpt and numeric locator checks were captured during the run and
  summarized above.

Result: **pass**.
