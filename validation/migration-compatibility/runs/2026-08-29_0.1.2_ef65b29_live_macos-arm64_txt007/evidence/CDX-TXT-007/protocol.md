# CDX-TXT-007 Protocol Evidence

Focused result on 2026-08-29:

```text
tests 1
pass 1
fail 0
duration_ms 74.386708
focused_test_ms 3.166917
```

The named test asserts that runtime interruption sends App Server method
`turn/interrupt` with the active `threadId` and `turnId`. It does not prove Web
control timing or absence of late output; the live lane remains mandatory.

