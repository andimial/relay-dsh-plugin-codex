# CDX-TXT-009 Protocol Evidence

Focused result on 2026-08-29:

```text
tests 2
pass 2
fail 0
duration_ms 84.292458
label_test_ms 1.582375
settings_test_ms 5.77475
```

The first test verifies compact Low/Extra-high selector mapping. The second asserts
a High effort update is sent in `thread/settings/update` before `turn/start` and is
not redundantly re-sent. Live initial-request metadata remains mandatory.

