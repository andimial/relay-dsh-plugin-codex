# CDX-TXT-004 Live Evidence

## Setup and request

- Created a fresh Session in the isolated linked-plugin profile and selected `Codex`
  before sending.
- Requested one plain-text response bounded by `CDX_STREAM_START_004` and
  `CDX_STREAM_END_004`, with all tokens `T0001` through `T0300` in order.
- Sampled assistant `p` elements and the `停止生成` control at approximately
  25-millisecond requested intervals; the prompt itself is a `generic`, not a `p`,
  so its boundary-marker text could not satisfy the assistant oracle.

## Pre-terminal observation

First qualifying sample:

| Field | Value |
| --- | --- |
| Sample index | `125` |
| Elapsed since send | `7471 ms` |
| Assistant paragraph text | `CDX_STREAM_START_004` |
| Text length | `20` |
| Starts with start marker | `true` |
| Contains end marker | `false` |
| `停止生成` count | `1` |
| SHA-256 | `03675347d3061ad043175c7f4a44e198a2f15e6257579491bd9fa8975fffa1f7` |

`streaming.png` was captured immediately after this sample. Because generation
continued during screenshot capture, it visibly contains `T0001 T0002` as well as
the start marker; it still shows `Deep diving...`, the active stop control, and no
end marker.

## Terminal observation

| Field | Value |
| --- | --- |
| Elapsed since send | `24497 ms` |
| Assistant paragraph count starting with marker | `1` |
| Final text length | `1839` |
| Start/end occurrence counts | `1` / `1` |
| Ends with end marker | `true` |
| Ordered token count | `300` |
| Exact expected sequence | `true` |
| `停止生成` count | `0` |
| SHA-256 | `6e37982220002c534c31220566c31c40ffddee355c0b1a133c3d09d88fb90b94` |

DSH terminal metadata displayed `用时 24秒`, first token `7.2秒`, and aggregate
`LLM 24.4s`. The composer was visible/enabled, accepted a non-sent draft, and was
then cleared to empty/send-disabled.

## Diagnostics and artifacts

- Browser warning/error diagnostics: `[]`.
- New isolated DSH Host output after the turn: none.
- `streaming.png`: original-resolution pre-terminal state.
- `completed.png`: original-resolution terminal state ending at `T0300` and the end
  marker, with terminal actions and a ready composer.

Result: **pass**.
