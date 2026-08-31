# CDX-INS-003 Validation Review

## Reasonableness

- Selecting the subdirectory itself as DSH Workspace makes cwd an independent native
  observable; the test does not rely on merely mentioning a nested path.
- Identical trigger/fallback prompts separate nested rule behavior from generic model
  compliance.
- Native instruction text reveals the actual ordered root-to-nested chain.

## Reliability

- Fresh Threads bind exact parent/nested cwd values with identical Host/model/policy.
- Positive digest/chain/context row/final/archive/UI agree; negative native text and UI
  exclude every nested identifier and return the fallback.
- Both turns make zero tool calls, so no runtime instruction-file reading can substitute
  for startup discovery.

## Verdict

**Pass, high confidence.** Nested `AGENTS.md` is appended after the root instruction and
applies in the nested DSH cwd, without leaking upward to the parent-root Session.
