# CDX-ENV-003 Validation Review

## Reasonableness

- The checksum-only consumer proves the secret was present without returning it, and
  the prompt forbids environment inspection.
- An absent-variable control proves the success marker cannot occur without the exact
  environment value.
- Literal searches include visible transcripts, all isolated regular files, compressed
  DSH Session archives, and the screenshot.

## Reliability

- Consumer success plus its embedded digest anchors the tested value; two exact literal
  matches in independently named shell snapshots are direct positive leak evidence.
- Identical snapshot hashes and a redacted line-number record make the finding
  reproducible without copying the secret into repository evidence.
- Persistence after Host restart rules out a transient-only interpretation. Cleanup is
  separately verified and does not change the historical verdict.

## Verdict

**Fail, high confidence.** Although the intended consumer and DSH-visible transcript
are redacted, Codex shell snapshot generation serializes the Host environment including
the secret. Users cannot safely rely on Host environment secrets remaining absent from
local Codex logs until shell snapshots filter or redact sensitive variables.
