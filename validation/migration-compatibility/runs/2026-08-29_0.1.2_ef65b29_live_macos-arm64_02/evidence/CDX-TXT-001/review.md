# CDX-TXT-001 Validation Review

## Process review

1. **Correct implementation under test:** accepted. The isolated DSH dependency,
   package resolution, and filesystem realpath all point to the current local Codex
   plugin commit; this is not evidence from an unknown globally installed copy.
2. **Correct backend:** accepted. `Codex` was visibly selected before the first
   message and remained visible in the completed conversation header. The focused
   protocol test independently covers the plugin adapter path.
3. **Unambiguous oracle:** accepted. A random case-specific marker with an
   exact-output instruction makes success machine-countable and avoids subjective
   answer grading.
4. **Completion and de-duplication:** accepted. Exact prompt and answer counts were
   both one, the stop control disappeared, timing metadata appeared, and the reply
   composer accepted a non-sent draft after completion.
5. **Error inspection:** accepted. Browser warning/error logs were empty and the
   isolated DSH Host emitted no error output for the turn.
6. **Visual corroboration:** accepted. `completed-clean.png` was inspected at its
   original resolution and shows the Codex header, one user message, one exact
   assistant answer, and a ready composer.

## Reliability assessment

- Protocol evidence alone would be insufficient, but it is combined with a real
  authenticated Codex App Server turn through isolated official DSH Web.
- DOM counts supply machine-readable evidence; the screenshot supplies an
  independent visual check; Host/browser diagnostics reduce the chance that a
  hidden error was mistaken for success.
- The non-sent composer probe briefly remained after an empty `fill` operation. It
  was cleared with explicit selection/backspace and rechecked before the clean
  screenshot. This concerns the test cleanup, not the sent turn or product result.
- Scope is one macOS arm64 environment, DSH `0.1.0-rc.8`, one model/effort selection,
  and one live attempt. It proves this atomic baseline, not broad reliability across
  all environments or later text cases.

Confidence: **high for the scoped atomic capability**.

Reviewed result: **pass**. The process is reasonable and the evidence is reliable
enough to close `CDX-TXT-001` before starting `CDX-TXT-002`.
