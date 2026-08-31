# MCP Result Types Oracle

- Server SHA-256 before and after:
  `fe0d4d3622330812adf4259d31f31b9c98847b35d9dd923383fca501bd2ec903`.
- Source image:
  `fixtures/image-understanding/single-shapes.png`, PNG 800 x 500 RGBA,
  SHA-256 `71e3ef8768ea6f1c04541bba803dff365ef41c8234c589958045eebd2f4e9d5d`.
- Direct list returned exactly three expected read-only tools.
- Direct text call returned `MCP_TEXT_9914_JBTV`.
- Direct JSON call returned text `MCP_JSON_CONTENT_9914` and exact structured object:
  marker `MCP_JSON_9914_RKDH`, nested code `4173`, ok `true`, items
  `["alpha","beta"]`.
- Direct image call returned type `image`, MIME `image/png`, base64 length `33404`,
  metadata text `MCP_IMAGE_META_9914_800x500`, and structured source
  digest/dimensions. Decoded image digest matched the source exactly.
- Isolated config SHA-256 around all three branches:
  `3298141e3829935d1780739141d33489fe8c5c646773fca7bcf1e924bb226f2b`.
- Real user config SHA-256 before and after:
  `da9c10eebd4a2b06338d10272864114099c8c0bb1d0a780227a0d7d003e6f63b`.
