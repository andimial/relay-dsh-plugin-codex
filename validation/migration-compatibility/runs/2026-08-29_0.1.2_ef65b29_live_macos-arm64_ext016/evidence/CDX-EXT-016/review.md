# CDX-EXT-016 Validation Review

## Reasonableness

- The method changes one atomic variable: availability of a single deterministic DSH
  tool between turns.
- Stable Session and Thread identities are required, preventing a fresh-thread success
  from being mislabeled as refresh.
- The valid fresh-Session control uses the same installed plugin, Host, Workspace,
  model, and policy and therefore isolates the continuity path.

## Reliability

- Baseline native metadata proves the exact absence; composed profile config and fresh
  native metadata prove the exact later presence at the Host level.
- The authoritative rollout contains two turn contexts under one Thread and explicit
  zero-match results, not merely model speculation.
- The control performs the real tool call and obtains the handler's unique marker, so
  fixture validity is independently established.
- DSH archives and visually inspected screenshots agree with both native rollouts.
- Cleanup restored the isolated profile and normal App Server process args.

## Interpretation of the extra lookup

- The second existing-Session lookup violated the one-call prompt after the first
  absence. It cannot create a false failure: both independent catalog checks returned
  zero, while the required tool invocation and result never occurred.

## Verdict

**Fail, high confidence.** The current product does not refresh a previously created
DSH Session/Thread with a DSH tool contributed after its initial turn, even across a
clean Host restart. The identical tool works immediately in a new Session.
