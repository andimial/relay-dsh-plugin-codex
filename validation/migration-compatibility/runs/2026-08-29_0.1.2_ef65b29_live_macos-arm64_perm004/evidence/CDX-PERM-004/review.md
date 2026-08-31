# CDX-PERM-004 Validation Review

## Reasonableness

- A loopback server eliminates DNS, public Internet, rate-limit, and remote-service
  ambiguity while still exercising native socket policy.
- Health and count controls independently prove the endpoint stayed reachable and that
  the agent request did not arrive.
- One exact curl with no escalation or alternate clients prevents fallback noise.

## Reliability

- Native turn context says network disabled; native curl fails; the independently
  maintained server counter remains zero; final/archive/UI agree.
- A post-turn health check distinguishes sandbox enforcement from server shutdown.
- The discarded DeepSeek pre-model failure has no Codex rollout and cannot influence
  the successful fresh-Thread evidence.

## Verdict

**Pass, high confidence for the network-disabled policy.** Workspace Write maps to
native network-disabled enforcement and blocks even a reachable loopback endpoint.
The tested DSH UI offers no separate network-enabled control, so tasks requiring network
remain unsupported under this mode unless another access mode is deliberately selected.
