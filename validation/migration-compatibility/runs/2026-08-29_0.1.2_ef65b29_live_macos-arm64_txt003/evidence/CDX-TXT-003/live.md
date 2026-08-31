# CDX-TXT-003 Live Evidence

## Setup and interaction

- Created a fresh Session in the isolated linked-plugin DSH profile and selected
  `Codex` before sending.
- Sent the case-defined Markdown document request once, including a level-two
  heading, two unordered-list items, and a Python fence.
- The completed header displayed `Codex`; DSH reported `用时 7秒`, first token
  `6.3秒`, and aggregate `LLM 7.5s`.

## Machine-readable semantic checks

| Check | Observed |
| --- | --- |
| Heading role/name `CDX_MD_003` count | `1` |
| Target `ul` count | `1` |
| Target `ul > li` text in order | `alpha-003`, `beta-003` |
| `pre` count | `1` |
| Target `pre > code` count | `1` |
| Exact code-text match | `true` |
| Code line 1 leading spaces | `0` |
| Code line 2 leading spaces | `4` |
| Code line 3 leading spaces | `4` |
| `停止生成` count after completion | `0` |
| Reply composer visible/enabled | `true` / `true` |
| Non-empty, non-sent draft send enabled | `true` |
| Draft cleanup | empty text, send disabled |
| Browser warning/error diagnostics | `[]` |
| New DSH Host output after turn | none |

Exact `pre > code` text:

```text
def relay_marker():
    value = "CDX_CODE_003"
    return value
```

The accessibility DOM exposed a level-two heading, a semantic list with two list
items, a language label, and a semantic code block; the answer was not a single
literal fenced-text blob.

## Retained artifact

- `completed.png`: visually reviewed at original resolution. It shows a rendered
  heading, bullets, syntax-highlighted code panel, terminal actions, and ready
  composer.

Result: **pass**.
