# CDX-TXT-007 — Stop generation

## Traceability

- Primary requirement: `CDX-TXT-007`
- Secondary requirements: none
- Verification levels: `P`, `L`, `W`
- Priority: `P0`

## Objective

Prove that DSH's stop control interrupts the active Codex turn, returns the Session to
an interactive terminal state, and prevents a deliberately delayed terminal marker
from appearing after cancellation.

## Preconditions

- Earlier text cases are closed with reviewed results.
- Current plugin is linked into the isolated supported DSH profile.
- Use a fresh Codex Session under the sanitized fixture.

## Method

### Protocol lane

Run only the test named
`dynamic tool replies, question answers, permission replies, and interruption use App Server protocol`.
Confirm its interruption assertion sends `turn/interrupt` with the active Thread and
Turn IDs.

### Live DSH Web lane

1. Create a fresh Session and select `Codex` before sending.
2. Request one long response that starts with `CDX_STOP_START_007`, emits tokens
   `S0001` through `S1000`, and only then appends `CDX_STOP_FORBIDDEN_007`.
3. Sample assistant `p` elements until a start-prefixed partial paragraph is visible,
   the forbidden marker is absent, and `停止生成` is present.
4. Record the partial text length/hash and immediately click `停止生成`.
5. Wait until the stop control disappears and the composer is usable, then continue
   observing for at least five seconds.
6. Confirm no assistant paragraph, visible conversation text, or sanitized persisted
   assistant event contains `CDX_STOP_FORBIDDEN_007`.
7. Confirm the persisted turn has a non-success interruption/cancellation terminal
   state and no late assistant final marker.
8. Retain before/after screenshots and browser/Host diagnostics.

## Expected results

- Protocol test proves `turn/interrupt` forwarding.
- Stop is clicked while partial text is visible and the forbidden marker is absent.
- Generation stops, the composer becomes usable, and no forbidden marker arrives
  during the post-stop observation window or in persisted events.
- The partial response is not duplicated and no infrastructure error replaces the
  cancellation state.

## Evidence to retain

- Focused protocol output.
- Pre-click partial condition, text length/hash, and screenshot.
- Post-stop DOM counts, observation duration, screenshot, and composer state.
- Sanitized persisted turn/assistant events.
- Browser/Host diagnostics and exact environment metadata.

## Result interpretation

- Pass only when interruption forwarding, active-turn stop, terminal recovery, and
  forbidden-marker absence all pass.
- Fail if the marker appears, the turn keeps running, the composer stays unusable, or
  the wrong turn is interrupted.
- Blocked only when infrastructure prevents starting or observing the turn.

## Review focus

- The user prompt contains the forbidden marker, so global page text cannot prove
  absence. Scope absence checks to assistant paragraphs and assistant event payloads.
- A stop click without proof that the turn was active is insufficient.
