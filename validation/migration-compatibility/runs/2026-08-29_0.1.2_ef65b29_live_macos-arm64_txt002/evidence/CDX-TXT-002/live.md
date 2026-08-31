# CDX-TXT-002 Live Evidence

## Setup

- Reused the running isolated DSH Web profile whose Codex plugin dependency resolves
  directly to the current local `0.1.2` / `ef65b29...` integration.
- Created a new Session under the sanitized `plain-text-workspace` fixture.
- Selected `Codex` before the first message; the completed header continued to show
  `Codex`, `GPT-5.6-Sol`, `Low`, and `Workspace Write`.

## Exact interaction and terminal state

Sent once:

```text
请只回复以下一行，逐字复制，不要加引号：中文迁移成功｜雪❄️｜火箭🚀｜𠮷｜CDX_U_8F32
```

The assistant terminal paragraph was exactly:

```text
中文迁移成功｜雪❄️｜火箭🚀｜𠮷｜CDX_U_8F32
```

DSH displayed `用时 6秒 · 首 token 6.3秒` and aggregate `LLM 6.9s`.

## Machine-readable checks

| Check | Observed |
| --- | --- |
| Exact user line count | `1` |
| Exact assistant `paragraph` count | `1` |
| Rendered string equals expected string | `true` |
| Rendered code points equal expected code points | `true` |
| Replacement-character count across user/answer | `0` |
| `停止生成` count after completion | `0` |
| Reply composer visible/enabled | `true` / `true` |
| Empty composer send enabled | `false` |
| Non-empty, non-sent draft send enabled | `true` |
| Draft cleanup | empty text, send disabled |
| Browser warning/error diagnostics | `[]` |
| New DSH Host output after turn | none |

Rendered answer code points:

```text
U+4E2D U+6587 U+8FC1 U+79FB U+6210 U+529F U+FF5C U+96EA U+2744
U+FE0F U+FF5C U+706B U+7BAD U+1F680 U+FF5C U+20BB7 U+FF5C U+0043
U+0044 U+0058 U+005F U+0055 U+005F U+0038 U+0046 U+0033 U+0032
```

This explicitly verifies the snowflake variation selector (`U+FE0F`), rocket
(`U+1F680`), supplementary-plane Han character (`U+20BB7`), and full-width
separators (`U+FF5C`).

## Retained artifact

- `completed.png`: clean completed DSH state, visually reviewed at original
  resolution.

Result: **pass**.
