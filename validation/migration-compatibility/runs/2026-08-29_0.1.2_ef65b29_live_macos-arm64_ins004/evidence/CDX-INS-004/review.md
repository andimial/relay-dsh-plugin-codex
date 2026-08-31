# CDX-INS-004 Validation Review

## Reasonableness

- The same directory, prompt, model, mode, and Host build are used for both branches;
  the added override file and required Host restart are the only intended changes.
- The prompt contains neither possible answer marker, so exact final behavior is
  attributable to startup instruction discovery rather than prompt disclosure.
- Native instruction text distinguishes parent inheritance from the same-scope file
  whose precedence is under test.

## Reliability

- Fresh Threads bind the identical directory and independently archive each branch.
- Base digest/native text/final/archive/UI agree before the override; after it, native
  text fully excludes the same-scope base identifiers and the exact final changes to
  the override marker.
- Both turns make zero tool calls, ruling out runtime file inspection as a substitute
  for native startup loading.
- The UI's generic `AGENTS.md` source label is contradicted by stronger native content
  evidence, and is therefore recorded without overstating source-name fidelity.

## Verdict

**Pass, high confidence, with a minor presentation defect.** `AGENTS.override.md`
replaces `AGENTS.md` at the same scope in a fresh DSH Codex Thread. DSH should display
the effective override filename accurately in its context-source row.
