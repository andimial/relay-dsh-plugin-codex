# CDX-EXT-014 Validation Review

## Reasonableness

- Current official documentation defines discovery, trust, event, matcher, input, and
  denial behavior; the fixture follows that exact contract.
- Direct handler and direct Codex controls distinguish fixture/upstream correctness from
  Relay/DSH integration behavior.
- Default and trust-bypass DSH branches isolate trust gating from plugin-Hook loading.
- Independent file existence/hash is the authority for whether the command executed.

## Reliability

- The installed Hook path/version and direct Hook log are exact, not inferred from model
  text.
- Both DSH rollouts preserve successful shell execution and contain no Hook result; the
  fixed handler log was checked absent before the direct control.
- The trust-bypass flag was verified on the actual App Server processes, so the second
  negative result cannot be explained by an unreviewed-hook skip.
- Direct Codex with the same home/cache immediately loads and blocks, sharply localizing
  the failure to the App Server integration path used by the current plugin.
- Cleanup is verified: test file absent, bypass removed, Host returned to normal args,
  real user config unchanged.

## Verdict

**Fail, high confidence.** The current Codex plugin's DSH App Server path does not load
the installed plugin Hook, even when trust is explicitly bypassed; the target command
executes. The same Hook works under direct Codex, so this is not a fixture limitation.
