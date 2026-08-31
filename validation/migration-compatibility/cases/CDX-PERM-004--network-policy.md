# CDX-PERM-004 — Network policy

## Traceability

- Primary requirement: `CDX-PERM-004`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P1`

## Objective

Prove that the native network policy admitted by a Workspace Write DSH Session is
actually enforced, using a deterministic reachable loopback server rather than public
Internet availability.

## Preconditions

- `CDX-PERM-003` is closed.
- Sanitized countable HTTP fixture server is running on `127.0.0.1:4394` and a control
  request from the operator succeeds.

## Method

1. Hash/start the fixture server; require `/count` to return `0` and `/health` to
   return its fixed marker.
2. Start a fresh plain-text-workspace Session with Workspace Write and send one exact
   no-escalation request to `/probe?token=8404`.
3. Require native turn context to state network disabled and retain the native tool
   result.
4. Query `/count` from outside the sandbox. A denied attempt must leave it `0`; an
   allowed-policy test would require exact response and count `1`.
5. Retain archive/UI/server evidence, stop the server, and self-review.

## Expected results

- Current Workspace Write policy records network disabled.
- Probe is denied before reaching the reachable fixture server; count remains `0`.

## Result interpretation

- Pass only when native policy, tool result, and independent server count agree.
- Fail if a disabled-policy request reaches the server or if UI/native policy diverge.
- Blocked only when the control client cannot reach the local fixture server.

## Review focus

- Prove server reachability independently before interpreting a failed agent request.
- Keep the network endpoint local, deterministic, and free of customer data.
