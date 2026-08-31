# CDX-ENV-001 Observations

- Executable SHA-256:
  `7924e177f80300577583427bf68adf32014c88c17448dac244d513ac8bcb5fee`;
  mode `-rwxr-xr-x`.
- Ordinary operator `command -v relay-path-probe-8501` failed before the run, proving
  the executable is not globally discoverable.
- The isolated Host was restarted with only `fixtures/path-bin` prepended to its PATH.
- Rollout `rollout-2026-08-29T15-13-11-01a04c5d-8076-7492-92d5-1fe2b32f8f6c.jsonl`,
  Thread `01a04c5d-8076-7492-92d5-1fe2b32f8f6c`, contains exactly one native exec input
  `cmd: "relay-path-probe-8501"`, with no path or search fallback.
- Tool result exits `0` and returns hidden fixture stdout
  `ENV001_PATH_EXEC_OK_8501_HQVN\n`; final repeats it exactly. The prompt does not
  disclose this marker.
- Rollout/archive/screenshot SHA-256: `677bdcb4d45ff6239d2c892f9932ea865a63ff6f3c9a2d439faf122e95e4b256` /
  `1437f4f2049f22166a078946d7acc9ab625eaf62b882f86a2e721c9209f72a78` /
  `a8509322ed70a7b282bc9905b02a5a0201d67a6a00bfa99cbeb43d5ce3a70019`.
- Host was restarted without the fixture PATH; ordinary post-cleanup discovery again
  failed.
