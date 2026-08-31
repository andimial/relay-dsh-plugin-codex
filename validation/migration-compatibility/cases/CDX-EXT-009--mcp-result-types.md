# CDX-EXT-009 — MCP text, JSON, and image results

## Traceability

- Primary requirement: `CDX-EXT-009`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P1`

## Objective

Prove independently that MCP text content, structured JSON content, and PNG image
content reach Codex intact and can be delivered through the owning DSH Session.

## Preconditions

- `CDX-EXT-008` is closed.
- Required isolated global STDIO server `relay_results_9914` advertises three distinct
  read-only result tools and passes direct protocol oracles.
- Image oracle has recorded byte SHA-256, media type, dimensions, and visible content.
- Each branch uses a fresh isolated-Host Standard Session, `GPT-5.6-Sol Low`,
  `Workspace Write`.

## Method

1. Record server/image digests and direct list plus three call results.
2. Text branch sends exactly:

   ```text
   Call only relay_results_9914 result_text_9914 with token TEXT_REQ_9914. Reply MCP_TEXT_SEEN_<exact returned text> only.
   ```

   Require exact native text and terminal/persisted
   `MCP_TEXT_SEEN_MCP_TEXT_9914_JBTV`.
3. JSON branch sends exactly:

   ```text
   Call only relay_results_9914 result_json_9914 with token JSON_REQ_9914. From structuredContent, reply MCP_JSON_SEEN_<marker>_<nested.code>_<nested.ok>_<items joined by hyphen> only.
   ```

   Require native structured object and terminal/persisted
   `MCP_JSON_SEEN_MCP_JSON_9914_RKDH_4173_true_alpha-beta`.
4. Image branch sends exactly:

   ```text
   Call only relay_results_9914 result_image_9914 with token IMAGE_REQ_9914. Present the returned MCP image inline without generating or reading another image, then reply MCP_IMAGE_SEEN only.
   ```

   Require native MCP image media/data digest plus structured dimensions/digest, an
   assistant image block backed by the same bytes, DSH inline rendering/persistence, and
   terminal `MCP_IMAGE_SEEN`.
5. Retain separate rollouts, Sessions, screenshots, server log, digests, and reviews.

## Expected results

- All three MCP result types survive without semantic or byte corruption.
- Text/JSON outputs and image artifact remain associated with their owning Sessions.

## Result interpretation

- Pass only when all three independently pass.
- Fail when any type is dropped, flattened incorrectly, corrupted, synthesized without
  provenance, or not delivered by DSH.
- Blocked only when fixture infrastructure cannot start independently of result mapping.

## Review focus

- For the image branch, visual similarity alone is insufficient; compare exact digest
  across source, native MCP event, and persisted attachment when available.
