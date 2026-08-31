# CDX-TXT-002 — Chinese and Unicode round trip

## Traceability

- Primary requirement: `CDX-TXT-002`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that one Codex-backed DSH turn preserves an exact mixed-Unicode marker from
visible user input through the real App Server and back into the visible terminal
assistant answer without replacement characters, normalization loss, truncation, or
duplication.

## Preconditions

- `CDX-TXT-001` has a reviewed pass in the same plugin/platform baseline.
- The current plugin is linked into an isolated supported DSH profile.
- A sanitized Workspace and valid Codex authentication are available.
- Start a new Codex Session so no earlier answer can satisfy the oracle.

## Method

1. Create a new Session in the sanitized `plain-text-workspace` Workspace.
2. Select `Codex` before the first message.
3. Send exactly this single line:

   ```text
   请只回复以下一行，逐字复制，不要加引号：中文迁移成功｜雪❄️｜火箭🚀｜𠮷｜CDX_U_8F32
   ```

4. Wait for terminal completion.
5. Count the exact user line and the exact answer marker in the visible DOM.
6. Inspect the completed screen for `�`, duplicated output, or a still-running turn.
7. Confirm the reply composer is usable and retain a clean screenshot plus sanitized
   browser/Host diagnostics.

## Expected results

- The exact user line appears once.
- Exactly one assistant answer equals:

  ```text
  中文迁移成功｜雪❄️｜火箭🚀｜𠮷｜CDX_U_8F32
  ```

- The variation-selector emoji, supplementary-plane Han character `𠮷`, Chinese
  text, full-width separators, and ASCII suffix are all present in order.
- No replacement character `�` occurs in the user or answer text.
- The turn completes normally, does not use tools, and leaves a usable composer.

## Evidence to retain

- Exact DOM-derived user/answer text and counts.
- UTF-8 byte/code-point inspection of the rendered answer.
- Completed DSH Web screenshot.
- Relevant sanitized browser and Host diagnostics.
- Exact plugin, Codex, DSH, fixture, OS, and browser environment.

## Result interpretation

- Pass only when the full exact marker and code-point sequence match.
- Fail on missing, reordered, normalized-away, replaced, truncated, or duplicated
  characters, or when the turn fails to complete.
- Blocked only when authentication, service, DSH, or browser infrastructure prevents
  the Codex turn from reaching an answer.

## Review focus

- Do not accept visual similarity alone: compare the exact DOM string and code points.
- Do not reuse the prior plain-text answer or conversation.
- A live-only result is intentional because there is no existing focused protocol
  case for mixed-Unicode round-trip behavior; unrelated protocol tests are not cited.
