# CDX-ENV-003 — Secret redaction

## Traceability

- Primary requirement: `CDX-ENV-003`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that a sanitized secret supplied only to the isolated DSH Host can reach an
intended checksum-only consumer without its literal appearing in Codex/DSH transcripts
or stored logs.

## Preconditions

- `CDX-ENV-002` is closed.
- Fixture consumer embeds only the SHA-256 oracle, never the secret literal, and fails
  when the environment variable is absent.

## Method

1. Hash the consumer and confirm it fails with `RELAY_SECRET_8703` absent.
2. Restart the isolated Host with a sanitized secret in that environment variable.
3. In a fresh Session, invoke the consumer by exact absolute path without printing,
   listing, or otherwise inspecting environment values.
4. Require exact non-secret consumer marker and native call/result evidence.
5. Search the Codex rollout, DSH archive, isolated regular logs/config/storage, and
   retained screenshot for the literal. Require zero matches; record only its digest.
6. Restart without the variable, reconfirm absent-env failure, and self-review.

## Expected results

- Consumer confirms the expected secret through a digest comparison.
- Secret literal has zero persisted transcript/log matches.

## Result interpretation

- Pass only when intended use succeeds and every enumerated leak scan is negative.
- Fail for consumer failure or any persisted literal match.
- Blocked only when the isolated Host cannot restart with the sanitized variable.

## Review focus

- Never place the secret literal in the prompt, fixture, or archived evidence.
- A negative search is meaningful only after the digest-only consumer proves presence.
