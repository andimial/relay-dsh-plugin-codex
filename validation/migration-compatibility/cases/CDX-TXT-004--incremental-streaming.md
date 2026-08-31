# CDX-TXT-004 — Incremental streaming

## Traceability

- Primary requirement: `CDX-TXT-004`
- Secondary requirements: none
- Verification levels: `P`, `L`, `W`
- Priority: `P0`

## Objective

Prove that the current Codex adapter emits text deltas and that native DSH Web makes
assistant text visible before the same turn reaches terminal completion.

## Preconditions

- `CDX-TXT-001` through `CDX-TXT-003` have reviewed passes.
- Current plugin is linked into the isolated supported DSH profile.
- Use a fresh Codex Session under the sanitized fixture.

## Method

### Protocol lane

Run the focused adapter test:

```bash
node --test \
  --test-name-pattern="the Codex preset streams reasoning and answers into the native DSH conversation" \
  test/dsh-adapter.test.mjs
```

Confirm it receives a native `text-delta` chunk and terminates without failure.

### Live DSH Web lane

1. Create a fresh Session and select `Codex` before sending.
2. Request one long plain-text response that begins with `CDX_STREAM_START_004`,
   contains tokens `T0001` through `T0300` in order, and ends with
   `CDX_STREAM_END_004`.
3. Immediately after sending, sample visible assistant paragraph text and the
   `停止生成` control at short intervals.
4. Accept a pre-terminal observation only when all are true in the same sample:
   - an assistant paragraph starts with `CDX_STREAM_START_004`;
   - it does not yet contain `CDX_STREAM_END_004`;
   - `停止生成` is still present.
5. Save a screenshot at that exact observation.
6. Then wait for the same assistant response to include `CDX_STREAM_END_004`, for
   `停止生成` to disappear, and for terminal timing/actions to appear.
7. Verify one final response contains both boundary markers and save a clean terminal
   screenshot plus browser/Host diagnostics.

## Expected results

- Protocol lane emits a native text delta.
- At least one machine-recorded visible pre-terminal sample satisfies all three
  streaming conditions above.
- The final response contains start/end markers once, is materially longer than the
  partial sample, and reaches normal completion.
- No duplicate terminal response or browser/Host error occurs.

## Evidence to retain

- Focused protocol test output.
- Pre-terminal timestamp, text length, marker/control state, and screenshot.
- Final timestamp, text length, marker/control state, and screenshot.
- Sanitized browser/Host diagnostics and exact environment metadata.

## Result interpretation

- Pass only when both protocol and pre-terminal visible streaming are proven.
- Fail when text appears only after completion, streaming duplicates/corrupts the
  final response, or the turn does not complete.
- Blocked when infrastructure prevents starting or observing the live turn. A polling
  loop that runs successfully but observes no qualifying partial sample is not, by
  itself, an infrastructure blocker.

## Review focus

- The user prompt itself contains both boundary markers, so global page text is not
  an oracle. Scope samples to assistant `p` elements that start with the start marker.
- Record the simultaneous stop-control state; a partial-looking final answer does not
  prove streaming.
