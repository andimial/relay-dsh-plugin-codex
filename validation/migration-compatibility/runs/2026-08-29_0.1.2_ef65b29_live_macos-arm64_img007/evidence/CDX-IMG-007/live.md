# CDX-IMG-007 Live Evidence

## Generated persistence candidate

- Independent generation completed in `35.9s`; first token was `8.3s`.
- DSH attachment:
  - ID: `sha256:442d4c3848714be86d77239f79e1aaf9a38fa4d0ac9c3ec62690fcb821df7a8d`
  - Name: `exec-b318e179-c2ef-4025-88ba-7828a29ee0f9.png`
  - Bytes: `847664`
  - Stored dimensions: `1254 × 1254`
- Retained `generated.png` is a valid 1254×1254 RGB PNG whose SHA-256 equals the
  attachment ID.

## Before and after reload

| Observable | Before reload | After reload |
| --- | --- | --- |
| Selected Session | `生成橙色三角形图片` | same |
| Image block count | `1` | `1` |
| Image file name | `exec-b318e179-c2ef-4025-88ba-7828a29ee0f9.png` | same |
| `complete` | `true` | `true` |
| Natural dimensions | `1254 × 1254` | `1254 × 1254` |
| Blob URL | original ephemeral URL | renewed ephemeral URL |

- A renewed blob URL plus identical file identity/dimensions shows that DSH restored
  the persisted attachment rather than merely preserving the old DOM node.
- `before-reload.png` and `after-reload.png` visibly show the same orange triangle.
- After reload, the original-image dialog reopened successfully and loaded the same
  name at 1254×1254, then closed normally.

## Non-duplication and diagnostics

- Persisted isolated Session counts after reload: one human user message, one
  assistant message, one turn end, one image attachment.
- Browser warning/error diagnostics: `[]`.
- Isolated DSH Host output: none.

Result: **pass**.
