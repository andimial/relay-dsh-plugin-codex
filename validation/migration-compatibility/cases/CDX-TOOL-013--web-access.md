# CDX-TOOL-013 — Web access

## Traceability

- Primary requirement: `CDX-TOOL-013`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P1`

## Objective

Prove that Codex web access can read a deterministic HTTP source, or that an enforced
network policy denial is explicit and accurately presented.

## Preconditions

- `CDX-TOOL-012` is closed.
- A loopback HTTP server exposes sanitized fixture `oracle.txt` at
  `http://127.0.0.1:4399/oracle.txt`; an independent client verifies its exact digest and
  response body.
- Fresh Session uses sanitized Workspace, `GPT-5.6-Sol Low`, `Workspace Write`.

## Method

1. Record fixture digest, HTTP status/body oracle, and active Codex network policy.
2. Create a fresh Session and send exactly:

   ```text
   Use the web access tool, not shell, to open https://example.com/. Reply EXAMPLE_DOMAIN_CONFIRMED only if the tool result itself shows title Example Domain and says the domain is for documentation examples. Otherwise report the exact access error. Do not infer the result from this prompt.
   ```

3. Inspect the rollout for the actual web operation and exact result/error.
4. Accept either exact content retrieval corroborated by HTTP oracle, or a clear network
   policy denial presented to the user.
5. Reject shell/curl fallback, guessed success, or ambiguous failure.

## Expected results

- Read branch: tool returns fixture body and assistant returns exact marker; or
- Denial branch: tool/runtime explicitly identifies network-policy denial and assistant
  includes `POLICY_DENIED` without claiming content was read.
- Session remains healthy and fixture unchanged.

## Result interpretation

- Pass when either defined branch is fully evidenced.
- Fail for guessed content, silent/ambiguous error, wrong source, or shell substitution.
- Blocked only when the independent fixture HTTP server cannot be started.

## Review focus

- Marker is present in the prompt, so assistant repetition alone never proves retrieval.

Revision note: an initial loopback-source attempt is retained as a failed branch because
the tool returned ambiguous `invalid ref_id` while the assistant mislabeled that as an
explicit policy denial. The retry uses IANA's stable Example Domain page to separate
public Web capability from the loopback restriction. Both branches remain reported.
