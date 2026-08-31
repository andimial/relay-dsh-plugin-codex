# CDX-EXT-009 Live Evidence

- Text branch: exact native content, transformation, DSH persistence — pass.
- Structured JSON branch: complete typed object, deterministic transformation, DSH
  persistence — pass.
- Image branch: native MCP base64 and outer `input_image` both decode to the exact
  source digest, but final assistant/DSH contain no image — fail.
- All three Sessions completed normally and the server received one exact call each.
- Fixture/config/real-user-config digests remained stable.

Result: **fail overall** because all three result types were required. Text and
structured JSON are supported. MCP image bytes reach Codex intact but are not delivered
to the user through DSH.
