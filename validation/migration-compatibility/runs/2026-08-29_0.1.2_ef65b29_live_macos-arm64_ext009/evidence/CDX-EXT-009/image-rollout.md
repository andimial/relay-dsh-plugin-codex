# MCP Image Result Rollout

- Rollout:
  `/private/tmp/relay-cdx-ext006.zqpFm7/codex-home/sessions/2026/08/29/rollout-2026-08-29T12-54-07-01a04bde-3105-7851-a135-92ca28cdc80a.jsonl`
- Native event: server `relay_results_9914`, tool `result_image_9914`, exact token;
  content image MIME `image/png`, base64 length `33404`, plus exact metadata text and
  structured digest/dimensions.
- Decoding the native event's base64 produced exact source SHA-256
  `71e3ef8768ea6f1c04541bba803dff365ef41c8234c589958045eebd2f4e9d5d`.
- Initial broad filter failed before calling MCP. Corrected exact tool call occurred
  once and used outer `image(c)`; its custom output contains one `input_image` data URL
  length `33426`. Decoding it produced the same exact SHA-256.
- Final assistant response contains only text `MCP_IMAGE_SEEN`; no assistant image block.

Thus the image reaches Codex intact twice (native and outer execution), but is dropped
between tool result and final user-visible assistant delivery.
