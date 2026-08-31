# CDX-IMG-008 Live Evidence

## Fixture and submission

- Source PNG: `900 × 600`, RGBA, SHA-256
  `3d72ef5b29409cfe1120c22e7dab2eac9868577a466dd5b3310b71f18d03c71b`.
- Full-resolution source inspection: white background, blue hexagon, undisclosed white
  marker `KEEP_73`.
- Fresh composer showed exactly one correct pending preview (`attached.png`).
- Submitted DSH event retained the exact attachment ID, dimensions, byte count, and
  name before Codex handoff.

## Terminal result

- DSH still displayed the submitted source image.
- Generated output image blocks: `0`.
- Terminal answer:

  ```text
  I can’t access the attached source image—it wasn’t included in the available conversation files. Please attach the PNG again, and I’ll return the background-edited PNG directly.
  ```

- Exact Codex rollout user input contained text only with `images=[]` and
  `local_images=[]`.
- Codex did attempt the correct edit path using
  `image_gen__imagegen({num_last_images_to_include:1,...})`; the tool failed with:

  ```text
  requested the last 1 conversation images, but only 0 were available
  ```

| Check | Value |
| --- | --- |
| Submitted source image blocks | `1` |
| Generated output image blocks | `0` |
| `停止生成` count | `0` |
| DSH timing | `LLM 24.3s`, first token `7.2s` |
| Composer visible/enabled | `true` / `true` |
| Health-check draft enabled send and cleared | `true` |
| Browser warning/error diagnostics | `[]` |
| Isolated DSH Host output | none |

`completed.png` records the visible source attachment and terminal missing-source
answer in the same completed conversation.

Result: **fail**.
