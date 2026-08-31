# CDX-IMG-003 Live Evidence

## Fixtures and pre-send order

| Position | Visible marker | PNG SHA-256 | Dimensions |
| --- | --- | --- | --- |
| 1 | `FIRST_17` | `4516ed147dc19878d7e9c03c7940d22bc5b1bea2155edf582350a6dbbae218d5` | `900 × 500` |
| 2 | `SECOND_29` | `24380f9ae0cfc80aa165df010ea360420833690fbcbd7728395ed944f6466b44` | `900 × 500` |

- Both PNGs were visually inspected at full resolution.
- Pasted first, then second, into a fresh Codex composer.
- Pre-send DOM: one pending-image group, two previews, two remove controls.
- `attached.png` visibly shows the orange `FIRST_17` thumbnail before the green
  `SECOND_29` thumbnail.

## Completed turn

Expected:

```text
FIRST_17>SECOND_29
```

Observed:

```text
No attachments received.
```

| Check | Value |
| --- | --- |
| Exact expected count | `0` |
| Missing-attachment reply count | `1` |
| Submitted conversation images | `2` |
| DSH attachment IDs match fixtures | `true`, in expected order |
| Codex rollout `images` count | `0` |
| Codex rollout `local_images` count | `0` |
| `停止生成` count | `0` |
| DSH timing | `LLM 24.6s`, first token `24.3s` |
| Composer visible/enabled | `true` / `true` |
| A non-sent health-check draft enabled send | `true` |
| Browser warning/error diagnostics | `[]` |
| Isolated DSH Host output | none |

`completed.png` shows both submitted thumbnails in the original order and the
terminal failure in the same conversation.

## Boundary evidence

- DSH stored two attachment-ID blocks in exact first/second fixture order.
- The matching Codex Thread rollout contains the prompt only; both image arrays are
  empty.
- No new path-bearing protocol result is promoted for this case because the existing
  single-image unit test does not prove multi-image ordering. The real boundary
  evidence is sufficient to establish the product failure.

Result: **fail**.
