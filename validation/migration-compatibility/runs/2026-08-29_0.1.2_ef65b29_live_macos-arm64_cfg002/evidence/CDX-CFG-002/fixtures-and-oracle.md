# CDX-CFG-002 Fixtures and Direct Oracle

- Positive config: `fixtures/plain-text-workspace/.codex/config.toml`, SHA-256
  `f2ddf675c95b0cfb84e07e5353f33045d651c356a2f85602d2e821ff643253b9`.
- Server: `fixtures/mcp-stdio-project/stdio-server.mjs`, SHA-256
  `03f34ded9eae3d72acd8e3f9c40df3743e95a426a222ba00a8e11b4103d27a33`.
- Negative control contains no `.codex/config.toml`; its retained `README.md` SHA-256 is
  `3994a8a9c2c87b7f889a5e67f5472e7845a6146b25b68a05a45f94af720b5db5`.
- Direct JSON-RPC oracle initialized the fixture, listed its tools, and called
  `project_echo_7731` with `PROJECT_INPUT_7731_HZKP` successfully.
- Direct-oracle log has seven lifecycle records and SHA-256
  `0e5e35757837a4b78ad6489517a8bf479e82e4ebbdf3c858e5792f18525e19f1`.
