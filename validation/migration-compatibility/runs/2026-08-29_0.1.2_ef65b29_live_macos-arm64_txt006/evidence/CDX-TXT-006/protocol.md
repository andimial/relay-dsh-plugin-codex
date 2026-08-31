# CDX-TXT-006 Protocol Evidence

Focused result on 2026-08-29:

```text
tests 1
pass 1
fail 0
duration_ms 81.90125
focused_test_ms 8.265416
```

The test sends three messages to one fake Codex Thread across a switch/resume and
one message to a second Thread, then asserts turn counts `3` and `1`. This proves
runtime Thread continuity but not live model recall; the two-turn Web lane remains
mandatory.

