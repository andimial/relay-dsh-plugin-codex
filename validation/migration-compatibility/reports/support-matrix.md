# Codex migration support matrix

Status date: 2026-08-29

## Verdict

| Classification | Count | Share | Meaning |
| --- | ---: | ---: | --- |
| Supported | 59 | 77.6% | The user task/capability completed through the tested product path |
| Partial | 6 | 7.9% | A useful branch works, but common tasks or fidelity still fail |
| Unsupported | 11 | 14.5% | The requested capability cannot currently complete or violates its safety observable |
| Total | 76 | 100% | Every atomic requirement has a case, run result and self-review |

`verified` in the requirement catalog means the verification result is complete. It does not necessarily mean
the user capability is supported; for example, explicit rejection of CSV input is a valid verified result but
CSV reading remains unsupported.

## Supported capabilities

| Area | Requirement IDs | User-visible capability |
| --- | --- | --- |
| Conversation | `CDX-TXT-001–004`, `006–010` | Text, Unicode, Markdown/code, answer streaming, context, stop, model/effort and title isolation |
| Images/artifacts | `CDX-IMG-004–007` | Invalid-image rejection, image generation, inline rendering and reload persistence |
| Built-in tools | `CDX-TOOL-001–008`, `011–014` | cwd, search/read/create/edit, shell success/failure, tests, Git, public Web and user questions |
| Extensions | `CDX-EXT-001–008`, `010–013`, `015` | Global/project Skills, Skill resources, STDIO/HTTP MCP, failure recovery, installed plugin Skill/MCP and DSH tool |
| Config/instructions | `CDX-CFG-001–006`, `CDX-INS-001–004` | User/project config, precedence/trust/env, global/project/nested/override instructions |
| Policy/environment/session | `CDX-PERM-001`, `003–004`; `CDX-ENV-001–002`; `CDX-SES-001–003`, `005–007` | Workspace/read-only/network policy, PATH/Unicode cwd, binding/reload/restart/import/continuation/compaction |

## Partial and unsupported capabilities

| Status | Requirement | Capability | Observed result and migration impact |
| --- | --- | --- | --- |
| Unsupported | `CDX-TXT-005` | Reasoning presentation | Live reasoning blocks are empty; users cannot inspect useful reasoning separately from final text. |
| Unsupported | `CDX-IMG-001` | Single-image understanding | DSH stores/displays the image, but it never reaches the Codex rollout. |
| Unsupported | `CDX-IMG-002` | Image OCR | Same transport gap; OCR task cannot complete. |
| Unsupported | `CDX-IMG-003` | Ordered multi-image input | UI order is correct, but no images enter Codex. |
| Unsupported | `CDX-IMG-008` | Image editing | Source image does not enter Codex/image tool context. |
| Unsupported | `CDX-FILE-001` | Text/source attachment | Composer has image-only intake and no general file upload. |
| Unsupported | `CDX-FILE-002` | Document/table attachment | CSV reading is unavailable; only explicit pre-model rejection works. |
| Partial | `CDX-TOOL-009` | Long shell streaming | Backend receives intermediate output, but DSH shows it only after completion. |
| Unsupported | `CDX-TOOL-010` | Shell interruption | Aborted shell child continues and creates a late marker; unsafe for destructive/long tasks. |
| Unsupported | `CDX-TOOL-015` | Tool approval | Requests fail closed, but no DSH allow/deny card exists. |
| Partial | `CDX-TOOL-016` | Subagent dispatch | Owner receives child result, but child file operations fail with dynamic-tool errors. |
| Partial | `CDX-EXT-009` | MCP result types | Text/JSON work; image bytes reach Codex but no DSH image block is delivered. |
| Unsupported | `CDX-EXT-014` | Plugin Hook | Hook works in direct Codex but is skipped through the DSH App Server path. |
| Partial | `CDX-EXT-016` | Dynamic DSH tool refresh | Fresh Sessions see the tool; an existing Session/Thread stays stale after Host restart. |
| Partial | `CDX-PERM-002` | Outside-Workspace access | Denial is enforced, but users cannot approve a legitimate outside-Workspace task. |
| Unsupported | `CDX-ENV-003` | Secret redaction | A sanitized secret persisted in native shell snapshots. |
| Partial | `CDX-SES-004` | Existing Thread discovery | Scoped counts are correct, but users cannot inspect IDs/titles or select an individual Thread. |

## Supported paths with retained limitations

- `CDX-IMG-005`: image generation works, but the observed output resolution differed from the request.
- `CDX-TOOL-013`: public Web works; loopback/local URL behavior remains unsupported or unclear.
- `CDX-EXT-012`: installed plugin Skill works after Host restart; an already-created Thread does not hot-refresh it.
- `CDX-SES-005`: import/ordering works, but imported presentation omits non-mutating native tool calls.
- `CDX-SES-007`: context continuation survives compaction, but DSH exposes no user compact action; out-of-band
  compaction re-keys internal DSH archives.

## Evidence and coverage

- Requirement catalog: `../../../docs/spec/migration-compatibility/requirements.md`
- Case directory: `../cases/`
- Run directory: `../runs/`
- Narrative evidence index: `latest.md`
- Coverage: 76 requirements, 76 cases, 81 recorded runs, 76 unique requirement results, no missing ID.
