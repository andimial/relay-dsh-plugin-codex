# CDX-FILE-001 Installed DSH UI Boundary

Tested source:
`@deepseek-ai/dsh-client-ui-conversation/lib/client.js` from DSH `0.1.0-rc.8`.

Relevant installed behavior:

```js
const files = Array.from(e.clipboardData.items)
  .filter((item) => item.kind === "file")
  .map((item) => item.getAsFile())
  .filter((file) => file !== null);
if (files.length > 0) intakeImages(files);
```

`createDraftImages(files)` calls `imageMediaType(file.type)`, whose accepted types are
only:

```text
image/png
image/jpeg
image/webp
image/gif
```

The default send contract serializes `imageIds` and text; there is no general file-ID
argument. Live DOM file input count was zero.

Absence checks:

```text
DSH_PROMPT_HITS=0
PLUGIN_CODEX_ROLLOUT_HITS=0
```
