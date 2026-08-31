# CDX-IMG-006 Live Evidence

## Terminal rendering

- Independent DSH Session and Codex Thread completed normally in `1m21s`; first token
  was `8s`.
- Codex emitted an initial image, noticed its own background-color issue, and emitted
  a corrected second image in the same Turn.
- DSH presented two standard clickable image blocks.

| Block | DSH attachment SHA-256 | Bytes | Inline browser metrics |
| --- | --- | --- | --- |
| initial | `6ff9eeabad9c4ce693187cbdc312ecb6afd2cf59f08d56165f8b874a7f8b2907` | `433365` | complete, `1254 × 1254` natural size |
| corrected | `3ca55ce5fda7170eb60cde2b2b6a7c12f8393db6bc7c3cc90afc0965e3506982` | `905150` | complete, `1254 × 1254` natural size |

- Both browser images had non-empty current sources and no broken-image state.
- `completed.png` records the corrected navy circle on pale-yellow background inline.

## Original-image viewer

- Clicking the corrected block opened one dialog named `原图预览`.
- Its image was complete with `naturalWidth=1254` and `naturalHeight=1254`.
- `viewer.png` records the full image in that dialog.
- Closing the dialog removed it and restored an enabled conversation composer.

## Artifact and diagnostics

- Retained corrected artifact `final-generated.png` is a valid non-interlaced RGB PNG
  at `1254 × 1254`.
- Its SHA-256 exactly equals the corrected DSH attachment ID.
- Exact rollout records two completed `image_generation_end` events.
- Browser warning/error diagnostics: `[]`.
- Isolated DSH Host output: none.

Result: **pass**.
