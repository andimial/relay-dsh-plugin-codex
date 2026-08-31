# CDX-TXT-004 Protocol Evidence

Focused command result on 2026-08-29:

```text
the Codex preset streams reasoning and answers into the native DSH conversation
tests 1
pass 1
fail 0
duration_ms 86.524625
focused_test_ms 4.967416
```

The test asserts that the adapter yields a native `text-delta` containing `done`.
This proves delta conversion at the adapter boundary but not pre-terminal visibility;
the live Web lane remains mandatory.

