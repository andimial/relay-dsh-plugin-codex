# CDX-IMG-002 Live Evidence

## Fixture and attachment

- Source PNG visually inspected: the sole large marker is
  `OCR_MARKER_4821_Q7XZ`.
- PNG: `1200 × 400`, RGBA, SHA-256
  `91c980cd2c508d6703811e307a6328ae4abc76195cdeefb2ae1f942fe7132768`.
- Pasted the exact PNG bytes into a fresh Codex conversation.
- Pre-send DOM: pending-image group `1`, `clipboard.png` preview `1`.
- `attached.png` visibly records the intended marker before submission.

## Completed turn

Prompt:

```text
Read the exact text in the attached image. Reply with that text only, preserving underscores and character case.
```

Expected:

```text
OCR_MARKER_4821_Q7XZ
```

Observed:

```text
Please attach the image.
```

| Check | Value |
| --- | --- |
| Exact expected paragraph count | `0` |
| Missing-image reply count | `1` |
| Conversation image count | `1` |
| DSH attachment hash equals fixture hash | `true` |
| Codex rollout `images` count | `0` |
| Codex rollout `local_images` count | `0` |
| `停止生成` count | `0` |
| DSH timing | `LLM 7.5s`, first token `7.3s` |
| Composer visible/enabled after completion | `true` / `true` |
| Non-sent draft could be entered and cleared | `true` |
| Browser warning/error diagnostics | `[]` |
| Isolated DSH Host output | none |

`completed.png` shows the OCR image in the submitted user message and the terminal
missing-image answer in the same conversation.

## Boundary evidence

- DSH persisted the exact attachment ID and image metadata, but no local path.
- The exact Codex Thread rollout contains the text only; both image collections are
  empty.
- The focused path-bearing adapter protocol test passed, demonstrating that its
  synthetic input does not cover the real attachment-ID event shape.
- This is a new fixture, DSH Session, and Codex Thread, independent of
  `CDX-IMG-001`.

Result: **fail**.
