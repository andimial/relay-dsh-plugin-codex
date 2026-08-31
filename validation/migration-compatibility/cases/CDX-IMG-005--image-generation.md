# CDX-IMG-005 — Image generation

## Traceability

- Primary requirement: `CDX-IMG-005`
- Secondary requirements: none
- Verification levels: `P`, `L`, `W`
- Priority: `P0`

## Objective

Prove that a user can ask the Codex-backed DSH Session to generate a new bitmap and
receive a valid PNG artifact produced by Codex's image-generation capability.

## Preconditions

- `CDX-IMG-004` is closed.
- Current plugin is linked into the isolated supported DSH profile.
- Fresh Session uses `GPT-5.6-Sol Low` and the sanitized Workspace.

## Method

1. Run the focused image-import protocol test to prove the adapter can convert a
   synthetic Codex `imageGeneration` item into a DSH attachment.
2. Create a fresh Codex Session and send exactly:

   ```text
   Generate a new 256x256 PNG image containing a centered solid magenta square on a white background. Use the available image-generation capability. Do not use shell, write, edit, or code to draw it. Return the generated image as an image artifact, with no external URL.
   ```

3. Wait for terminal completion and require at least one new DSH image block.
4. Inspect the exact Codex Thread rollout for an image-generation item and retain the
   content-addressed DSH attachment metadata and bytes.
5. Verify PNG signature, decodability, dimensions, and visible content; compute its
   SHA-256.
6. Retain completed screenshot, sanitized events/rollout, and diagnostics.

## Expected results

- The focused adapter protocol test passes.
- The real Codex turn emits a new image-generation item.
- DSH stores a non-empty, decodable PNG and presents it as an image block.
- The artifact is not merely an external URL or a prose refusal.

## Result interpretation

- Pass only when a valid new PNG artifact is produced and retained.
- Fail when the turn completes without an image, capability is unavailable, output is
  invalid, or only text/URL is returned.
- Blocked only for external account/service/infrastructure failure that prevents the
  turn from reaching a terminal capability result.

## Review focus

- Do not substitute an operator-generated fixture for Codex output.
- A protocol pass cannot override a live missing-capability result.
