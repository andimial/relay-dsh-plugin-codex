# CDX-TXT-006 — Multi-turn context

## Traceability

- Primary requirement: `CDX-TXT-006`
- Secondary requirements: none
- Verification levels: `P`, `L`, `W`
- Priority: `P0`

## Objective

Prove that two user turns in one DSH Codex Session use the same Codex Thread and that
the second turn can recall a unique marker present only in the first user turn.

## Preconditions

- Earlier text cases are closed with reviewed results.
- Current plugin is linked into the isolated supported DSH profile.
- Use a fresh Codex Session under the sanitized fixture.

## Method

### Protocol lane

Run only the test named
`Codex threads keep their context across turns, switching, and resume`. Confirm its
single fake Codex Thread receives multiple turns and survives resume.

### Live DSH Web lane

1. Create a fresh Session and select `Codex` before the first message.
2. Send exactly:

   ```text
   Remember the token CDX_MEMORY_A_006_7C91 for the next turn and reply exactly ACK_CDX_006.
   ```

3. Wait for one terminal answer exactly equal to `ACK_CDX_006`.
4. In the same DSH Session, send exactly:

   ```text
   What exact token did I ask you to remember in the immediately preceding turn? Reply with the token only.
   ```

5. Wait for one terminal answer exactly equal to `CDX_MEMORY_A_006_7C91`.
6. Inspect sanitized persisted events and confirm both assistant replay states use the
   same Codex `threadId` and different `turnId` values.
7. Confirm two user messages/two terminal answers are visible in order, no duplicate
   final projection exists, and the composer is usable.

## Expected results

- Focused protocol test passes.
- First answer is exactly `ACK_CDX_006` once.
- Second answer is exactly `CDX_MEMORY_A_006_7C91` once even though the second prompt
  does not contain that token.
- Both live turns share one Codex Thread and have distinct turn IDs.
- The conversation is terminal and error-free after turn two.

## Evidence to retain

- Focused protocol output.
- Exact visible message/answer counts and completed screenshot.
- Sanitized replay-state thread/turn IDs from DSH session events.
- Browser/Host diagnostics and exact environment metadata.

## Result interpretation

- Pass only when recall, ordering, and same-thread identity all match.
- Fail when the token is forgotten/altered, a new Thread is used, content is
  duplicated, or either turn fails.
- Blocked only when infrastructure prevents completing either live turn.

## Review focus

- The second prompt must not repeat the marker.
- Visual recall without same-thread replay-state evidence is insufficient because a
  separate title or backend call could otherwise be confused with the business turn.
