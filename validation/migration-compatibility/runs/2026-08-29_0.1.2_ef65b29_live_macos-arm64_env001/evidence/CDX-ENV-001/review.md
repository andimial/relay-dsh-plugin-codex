# CDX-ENV-001 Validation Review

## Reasonableness

- The executable is absent from the operator PATH and invoked only by bare name, so
  success depends on the temporary DSH Host environment.
- Its output marker is absent from the prompt and deterministic in the hashed fixture.
- One exact call excludes absolute-path substitution and search-command assistance.

## Reliability

- Executable mode/digest, precondition non-discovery, exact native tool input, exit-zero
  output, final, DSH archive, and UI agree.
- Restarting the Host is necessary because PATH is a process-start environment; the
  post-run restart and non-discovery prove cleanup.
- No Codex config change can explain the result because the path was supplied only to
  the isolated Host launch.

## Verdict

**Pass, high confidence.** The Relay Codex integration preserves the DSH Host PATH for
fresh Codex tool execution, allowing a user-provided executable to resolve by name.
