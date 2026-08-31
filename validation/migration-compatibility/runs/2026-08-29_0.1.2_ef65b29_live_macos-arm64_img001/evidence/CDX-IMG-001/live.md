# CDX-IMG-001 Live Evidence

## Fixture and attachment

- Original PNG visually inspected: three red circles, two blue triangles, no text.
- PNG: `800 × 500`, RGBA, SHA-256
  `71e3ef8768ea6f1c04541bba803dff365ef41c8234c589958045eebd2f4e9d5d`.
- Pasted exact PNG bytes into a fresh Codex composer.
- Pre-send DOM: pending-image group `1`, `clipboard.png` image preview `1`, remove
  control `1`.
- `attached.png` visibly shows the correct shapes in the pending preview.

## Completed turn

Expected:

```text
RED_CIRCLES=3;BLUE_TRIANGLES=2
```

Observed:

```text
RED_CIRCLES=0;BLUE_TRIANGLES=0
```

| Check | Value |
| --- | --- |
| Expected paragraph count | `0` |
| Wrong `0/0` paragraph count | `1` |
| Conversation image count | `1` |
| Click-to-view image button count | `1` |
| DSH attachment hash equals fixture hash | `true` |
| Codex rollout `images` count | `0` |
| Codex rollout `local_images` count | `0` |
| `停止生成` count | `0` |
| DSH timing | `LLM 9.5s`, first token `9.3s` |
| Composer visible/enabled | `true` / `true` |
| Browser warning/error diagnostics | `[]` |
| New isolated DSH Host output | none |

`completed.png` shows the correct attached image in the user message and the wrong
terminal answer in the same conversation.

## Boundary mismatch

- DSH persisted an attachment object with `attachmentId`, metadata, and no local
  path.
- Current `codex-adapter.js:885-903` accepts image blocks only when one of its path,
  fsPath, filePath, localPath, source-path, or attachment-path fields exists; it does
  not resolve `attachmentId`.
- The exact Codex rollout confirms the resulting business input contained only
  `input_text` and empty image arrays.

Result: **fail**.
