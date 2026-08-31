# Codex Migration Compatibility — Latest Status

Status date: 2026-08-29

## Follow-up: Plugin Hook trust, 2026-08-30

This remains the historical August 29 matrix, not a current-version rerun.
The `CDX-EXT-014` failure was subsequently localized to a missing Thread-level
trust override, not general plugin-Hook discovery failure. Commit `41275a3`
(included in `v0.1.3` and `v0.1.4`) propagates an explicitly supplied standalone
Hook trust-bypass flag to Thread start/fork/resume configuration; defaults remain
unchanged. See [trust propagation](../../../docs/reliability-spec.md#plugin-hook-trust-propagation)
and [acceptance case C7](../../../docs/reliability-acceptance.md).
The original observations below are retained, but the inference that a verified
process launch flag ruled out Hook trust gating is superseded by that diagnosis.

## Baseline

- Atomic requirements: 76
- P0 requirements: 57
- P1 requirements: 19
- Ready cases: 76
- Recorded runs: 81
- Verified requirements: 61
- Failed requirements: 15
- Blocked requirements: 0

All Codex text requirements except `CDX-TXT-005` have reviewed `pass` results.
`CDX-IMG-001` through `CDX-IMG-003` have reviewed `fail` results: across three
independent fixtures, Sessions, and Threads, DSH stored/displayed the exact image
attachments (including correct two-image order) but the actual Codex rollouts
contained no image input. `CDX-IMG-004` passed pre-model invalid-image rejection, and
`CDX-IMG-005` passed real image generation plus content-addressed artifact retention
(with a recorded requested-resolution mismatch), and `CDX-IMG-006` passed standard
inline rendering plus its original-image viewer; `CDX-IMG-007` passed content-addressed
image persistence and rehydration across a full browser reload. `CDX-TXT-005` also
remains a reviewed fail for empty live reasoning blocks. `CDX-IMG-008` independently
failed because the attached edit source did not enter Codex, and the edit tool saw
zero conversation images. `CDX-FILE-001` failed pre-model because the tested DSH
composer has image-only attachment intake and no general file upload control.
`CDX-FILE-002` passed only its explicit-rejection branch: CSV reading is unsupported,
but DSH clearly reports the supported image-only formats before a model Turn.
Historical preflight/blocked runs remain retained. All 76 requirements now have ready
cases. `CDX-TOOL-001` passed with a real `pwd` tool result exactly equal to the
selected DSH Workspace; `CDX-TOOL-002` passed ordered real glob/grep discovery; and
`CDX-TOOL-003` passed native file read with exact content. `CDX-TOOL-004` passed a
native in-Workspace file create with exact bytes and no shell fallback; its retained
wrong-model setup attempt failed before execution, was non-mutating, and is excluded.
`CDX-TOOL-005` passed an exact one-line native edit; Codex recovered from the native
edit tool's read-before-edit precondition without using shell or changing other bytes.
`CDX-TOOL-006` passed exact native edits across two files while preserving the complete
file set and decoy digest; one extra progress sentence is retained as a minor deviation.
`CDX-TOOL-007` passed one exact shell command with exact stdout, structured zero exit,
correct user-visible interpretation, and identical pre/post Workspace manifests.
`CDX-TOOL-008` passed an intentional shell failure: stderr content survived in the
tool's combined output, exit 23 remained structured, and DSH correctly presented it as
failed while the Session stayed healthy.
`CDX-TOOL-009` failed user-visible streaming: a synchronized retry proved the Codex
backend received ordered intermediate output more than 13 seconds before completion,
while DSH exposed neither a live tool output nor persisted streamed markers.
`CDX-TOOL-010` failed process interruption: DSH and Codex recorded a user abort and the
shell session id disappeared, yet the child process created its exact late marker about
five seconds after the abort.
`CDX-TOOL-011` passed a real deterministic test run: raw TAP and exit 1 matched an
independent oracle, and the assistant correctly reported one pass and one failure.
`CDX-TOOL-012` passed exact Git status/diff inspection while HEAD, index bytes/mtime,
worktree hashes, staged state, and file set remained unchanged.
`CDX-TOOL-013` passed native public Web retrieval against Example Domain. Its retained
loopback branch failed with ambiguous `invalid ref_id` (not an explicit policy denial),
so local URL access remains unsupported/unclear despite public Web support.
`CDX-TOOL-014` passed a real structured question pause in Standard mode through the
plugin-native DSH fallback after Codex reported its built-in Default-mode question tool
unavailable; the selected option returned to and completed the same turn.
`CDX-TOOL-015` failed both interactive approval branches: correct escalation requests
failed closed with no Web approval answerer/card. Automatic denial prevents writes, but
the user cannot allow or explicitly deny the action.
`CDX-TOOL-016` failed the end-to-end subagent task: the owner spawned one child and
received its result, but every child-native file operation failed with
`dynamic tool request failed`, so the unique file marker never returned to the owner.
`CDX-EXT-001` passed user-global Skill discovery: the pre-turn Codex catalog carried
the exact `$HOME/.agents/skills` source locator, DSH independently advertised the same
Skill, and the discovery-only turn made no invocation call.
`CDX-EXT-002` passed project Skill scoping with a positive/negative Workspace pair:
Codex advertised the exact repository source only inside the fixture project and did
not expose it in the sibling control Workspace.
`CDX-EXT-003` passed explicit `$name` invocation: Codex injected the complete project
Skill from its exact source path and returned the unique instruction marker without a
tool fallback.
`CDX-EXT-004` passed automatic invocation: an unnamed, unambiguous description trigger
made Codex select and read the exact project Skill, then return its unique marker.
`CDX-EXT-005` passed bundled Skill resource/script execution against an independent
oracle; one extra progress sentence is retained as a response-format limitation.
`CDX-EXT-006` passed an isolated user-global STDIO MCP round trip with direct protocol,
server-process, native Codex MCP-event, structured-result, and DSH persistence evidence.
`CDX-EXT-007` passed project MCP scoping: the trusted fixture executed its exact tool,
while an authoritative sibling retry enumerated zero matching tools and caused no
project-server process event.
`CDX-EXT-008` passed local Streamable HTTP MCP with direct protocol, HTTP request log,
native Codex text/structured result, and exact DSH delivery evidence.
`CDX-EXT-009` failed the required three-type product path: MCP text and structured JSON
passed, and PNG bytes reached Codex with exact digest, but no image block or attachment
reached the DSH Session or UI.
`CDX-EXT-010` passed explicit error handling and recovery: one native MCP `isError`
propagated its exact marker, one five-second server call was terminated by the configured
2.002-second timeout without accepting its logged late response, and both owning DSH
Sessions completed exact tool-free recovery turns.
`CDX-EXT-011` passed installed-plugin discovery: a canonical local fixture validated and
installed into the isolated Codex home, and independent operator and fresh DSH-task CLI
checks agreed on its exact id, marketplace, enabled status, version, and source path.
One extra progress sentence is retained as a minor presentation deviation.
`CDX-EXT-012` passed namespaced plugin Skill execution after a clean Host restart: the
catalog and injected `<skill>` block carried the exact installed-cache version/path and
the terminal marker was exact with no tool fallback. A fresh Thread created before Host
restart did not see the reinstalled component, so live plugin-component refresh is a
recorded limitation.
`CDX-EXT-013` passed a bundled plugin STDIO MCP round trip: direct protocol validation,
installed-cache server logs, and the native Codex event all agree on one call, exact
text/structured result, and exact fixture `plugin_id`; DSH delivered the terminal marker
without retry or extra prose.
`CDX-EXT-014` failed plugin Hook execution through the DSH App Server path. The exact
installed Hook blocks successfully under direct Codex, but DSH skipped it both normally
and with the official trust-bypass flag verified on the App Server process; the target
command executed and created its file. DSH also exposed no Hook review surface.
`CDX-EXT-015` passed one DSH-contributed tool end to end: native Thread metadata
advertised `read` inside the Codex `dsh` namespace, the turn made exactly one nested
`dsh__read` call with no fallback, its output matched the independently hashed fixture,
and the owning DSH Session displayed the exact requested marker.
`CDX-EXT-016` failed dynamic DSH-tool refresh for an existing conversation. The same
DSH Session and Codex Thread retained their original catalog after a valid fixture tool
was installed and the Host restarted; two native lookups found zero matches. A fresh
control Session on that identical Host immediately advertised and executed the exact
tool, localizing the gap to existing-Session/Thread refresh rather than the fixture.
`CDX-CFG-001` passed isolated user `config.toml` consumption with a unique global STDIO
MCP: the tool was absent before configuration, then the product started the configured
server, advertised and invoked its exact read-only tool, retained text/structured
results, and delivered the exact marker. Candidate network, personality, and native
`view_image` settings were overridden by Host/turn values and are retained as
precedence inputs for `CDX-CFG-005`, not counted against this user-config capability.
`CDX-CFG-002` passed trusted project-config scoping: the configured project advertised
and executed its exact STDIO MCP tool with native, process, structured-result, archive,
and UI agreement, while a fresh sibling Workspace enumerated zero matching tools and
left the project-server log byte/line/mtime-identical.
`CDX-CFG-003` passed an exact user/project MCP collision: the sibling Workspace used
the valid user definition and returned structured `source:user`, while the trusted
configured project used the project definition and returned structured `scope:project`.
Per-server call logs, exact cwd bindings, native events, DSH archives, and restored
user-config digest make the observed project-over-user precedence deterministic.
`CDX-CFG-004` passed the explicit trust boundary: the same project/config produced an
empty catalog and no server process while `untrusted`, then advertised and executed its
unique MCP tool after only `trust_level` changed to `trusted`. Project digests stayed
fixed, both cwd bindings match, and user config was restored byte-identically.
`CDX-CFG-005` passed DSH-owned setting precedence. With opposing user defaults
`gpt-5.4/high/read-only/never`, a fresh UI-selected Session admitted native values
`gpt-5.6-sol/low/workspace-write/on-request`, and a real exact in-Workspace patch
succeeded. DSH header, Codex turn context, artifact digest, archive, UI, and cleanup all
agree; one extra progress sentence is a retained presentation deviation.
`CDX-CFG-006` passed documented MCP `env_vars` forwarding: the sanitized value was
absent from config and present only in the Host environment, then appeared in the exact
server-start log, native text/structured result, DSH archive, and UI. The no-argument
call prevents prompt substitution, and cleanup restarted the Host without the variable.
`CDX-INS-001` passed global `AGENTS.md`: a fresh rollout natively injected the complete
isolated global file in both pre-turn input and `world_state.agents_md`; a prompt that
omitted the answer marker returned it exactly with zero tool calls. Archive/UI agree and
cleanup restored the absent global-instruction baseline.
`CDX-INS-002` passed project instruction scoping with identical positive/negative
prompts: native `agents_md` contains the exact project root/text and yields its hidden
marker only in the owning Workspace, while the trusted sibling records `{}` and returns
the explicit no-instruction fallback. Both turns are fresh, exact-cwd, and tool-free.
`CDX-INS-003` passed nested scope: the nested Workspace Thread binds the subdirectory
and natively concatenates root then nested instructions, yielding the hidden nested
marker; an identical parent-root Thread contains only the root rule and returns the
fallback. Both are tool-free and DSH renders the corresponding source path set.
`CDX-INS-004` passed same-scope override precedence: an identical-cwd A/B changes from
the base marker to the override marker, while native instruction text replaces every
same-scope base identifier and both turns remain tool-free. DSH's context row labels
the effective override as `AGENTS.md`; this minor source-label defect is retained.
`CDX-PERM-001` passed Workspace read/write enforcement: the selected DSH mode admitted
native `workspace-write/on-request` policy, three real native file operations produced
and re-read exact derived bytes, and filesystem/hash/archive/UI evidence agree. The
compact DSH message view omitted visible tool rows, retained as a presentation gap.
`CDX-PERM-002` passed its enforced-denial branch: an exact sibling-path write under
native `workspace-write/on-request` was rejected and the target stayed absent. Codex's
approval request returned `approval request failed` without a DSH prompt, so security
is preserved but user-approved outside-Workspace tasks remain unsupported.
`CDX-PERM-003` passed Read Only enforcement: a native read returned exact fixture
bytes, native context recorded `read-only`, an exact in-Workspace write failed with
`operation not permitted`, and the target remained absent. DSH header, archive, and UI
agree with the native evidence.
`CDX-PERM-004` passed disabled-network enforcement: a healthy countable loopback server
received zero probes, native context recorded `network_access: false`, and the exact
curl failed. A post-turn health control rules out endpoint downtime; enabled-network UI
coverage is unavailable under the tested Workspace Write mode.
`CDX-ENV-001` passed Host PATH inheritance: an executable absent from the operator PATH
was invoked once by bare name in a fresh Thread and returned its hidden fixture marker.
Native input/result, archive, UI, and post-restart cleanup agree.
`CDX-ENV-002` passed Unicode/spaced paths: a dedicated DSH Workspace bound the exact
Chinese-and-space cwd, and native pwd/read/patch/read-back/cmp operations preserved both
cwd and filenames with exact bytes. Archive, UI, digest, and cleanup agree.
`CDX-ENV-003` failed secret redaction: a digest-only consumer proved the Host secret was
available and visible transcripts were clean, but exact literal scans found it persisted
in two Codex shell snapshots, surviving a Host restart. Redacted line/hash evidence is
retained; the two sanitized leaked files were deleted after capture.
`CDX-SES-001` passed one-to-one binding: an absent isolated link store and a 53-rollout
baseline gained exactly one native mapping and one rollout whose DSH Session ID, Thread
ID, cwd, policy, archive, and UI all agree.
`CDX-SES-002` passed browser-reload continuation: the selected route and first turn
restored automatically, the second turn appended to the same rollout and DSH archive,
the rollout set gained zero files, and the sole link mapping stayed byte-identical.
`CDX-SES-003` passed Host-restart continuation: a confirmed port outage separated turns,
then the same selected Session and two-turn history rehydrated and the third turn
appended to the original rollout with zero new mapping or rollout files.
`CDX-SES-004` failed user-inspectable discovery: native metadata and two Workspace UIs
prove exact scoped counts and bound exclusion, but the dialog renders no Thread IDs,
titles, list, or individual controls—only counts and `全部导入`. Users cannot inspect or
select the intended source Thread.
`CDX-SES-005` passed deterministic single-candidate import: one committed imported
mapping targets the exact Unicode Workspace Thread and DSH presents source user,
progress, material write, and final in order. Non-mutating native tool calls are omitted
from imported presentation and retained as a fidelity limitation.
`CDX-SES-006` passed imported continuation: a new no-tool turn appends to the exact
pre-import source rollout, the rollout set gains zero files, mapping identity/config stay
fixed, and the imported archive/UI append the second turn in order.
`CDX-SES-007` passed native same-Thread compaction continuity: the supported App Server
method records a real context-window replacement, a later marker-free DSH prompt returns
the exact hidden pre-compaction marker, no replacement rollout appears, and a second Host
restart restores the four-turn UI. The current DSH menu has no compact action, and
out-of-band compaction reconciles/re-keys internal DSH Session archives; both limitations
are retained.

## Next tracking action

Codex validation is complete. Use `support-matrix.md` for the final support/partial/unsupported classification and
the repository-level `docs/spec/plugin-migration-validation-final.md` for the cross-plugin migration decision.
