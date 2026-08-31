# CDX-TXT-005 Live Evidence

## Primary High-effort turn

- Fresh Session; visible `Codex`, `GPT-5.6-Sol`, `High` selected before sending.
- Final assistant `p` count for `CDX_REASON_FINAL_005_5017`: `1`.
- Terminal state: stop count `0`, `LLM 7.5s`, first token `7.2s`.
- Think disclosure count: `1`.
- After expansion, the disclosure button had `aria-expanded="true"`, but its content
  container had empty `innerText`. The nearest message container contained only
  `Think` and the separate final paragraph.
- Persisted session events recorded a reasoning block whose text was `""` followed
  by the correct final text block.

## Complex confirmation High-effort turn

- Second fresh Session; explicit `Codex`, `GPT-5.6-Sol`, `High`.
- Harder no-tools calculation/cross-check prompt used the distinct final marker
  `CDX_REASON_CONFIRM_005`.
- Final assistant paragraph count: `1`; stop count after completion: `0`;
  `LLM 9.9s`.
- Think disclosure count: `1`; after expansion its content container was again empty.
- Persisted events again recorded `reasoning.text: ""`, then the correct final text
  and normal `finish: stop`.

## Shared terminal and diagnostics checks

- Both final answers were correct, terminal, and non-duplicated.
- The confirmation composer was visible/enabled, accepted a non-sent draft, and was
  cleared successfully.
- Browser warning/error diagnostics: `[]`.
- New isolated DSH Host output: none.
- `collapsed.png` and `expanded.png` show the primary disclosure before/after
  expansion; `confirmation-expanded.png` shows the second expanded blank region.

Result: **fail**. The current live configuration exposes a reasoning control but no
reasoning content, so reasoning presentation is not usable even though final answer
presentation remains correct.
