# CDX-IMG-004 Live Evidence

## Fixture

- File name: `not-a-png.png`.
- Bytes (hex):
  `4e 4f 54 5f 41 5f 50 4e 47 5f 43 44 58 5f 49 4d 47 5f 30 30 34 0a`.
- SHA-256:
  `61a0f23e94c9d99ca97ae625493864d5b6985e4a88f538fd225680f01c346b83`.
- Clipboard MIME deliberately set to `image/png`; the browser clipboard write and
  paste both succeeded, so DSH received the negative payload.

## Observations

1. Paste created one visibly broken temporary `clipboard.png` preview; there was no
   error at paste time (`pending.png`).
2. With prompt `Describe the attached image.`, clicking send produced the visible
   alert `仅支持 PNG、JPG、WebP、GIF 格式的图片` (`rejected-alert.png`).
3. No `停止生成` control appeared and no assistant turn began.
4. The exact prompt occurs in zero isolated DSH Session files.
5. Excluding the known operator/controller Thread, the exact prompt occurs in zero
   Codex rollouts; therefore the plugin created no Codex Thread/model Turn.
6. The broken preview remained after rejection but was removable. After removal, a
   non-sent text health-check enabled send; it was then cleared and was absent from
   DSH events.
7. Browser warning/error diagnostics and isolated Host output were empty.

## UX note

Validation is deferred until send, so users briefly see a broken preview and must
remove it after rejection. This does not violate the atomic pre-model rejection
criterion, but it is a real polish issue.

Result: **pass**.
