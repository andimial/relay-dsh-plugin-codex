# CDX-TXT-001 Live DSH Web Evidence

## Environment preparation

- Built `relay-dsh-plugin-codex@0.1.2` successfully from
  `ef65b29dd52c92278a2717f19d2a8f056cefdfaa`.
- Initialized an isolated DSH Web profile under
  `/private/tmp/relay-cdx-validation-20260829-txt001`.
- Added the current local Codex plugin to that profile successfully.
- The installed standalone DSH executable available to the run was
  `0.1.0-rc.8`; the official reference checkout remained at
  `0.1.1-rc.2` / `b150a551b8d465e31e418e1b2eaf5e79bbb7d28e`.

## Blockers

1. Starting the isolated DSH Web server failed before browser interaction because
   the execution sandbox denied loopback listen on `127.0.0.1:4391` with `EPERM`.
   The required elevated command could not enter the approval flow.
2. A separate DSH Web server was already listening on `127.0.0.1:3080`. Browser
   navigation to that local server was denied by the browser permission boundary.

No validation prompt was sent to Codex, no live model response was received, and no
live screenshot or DOM evidence was fabricated.

## Live-lane result

`blocked`

This is an environment/browser-access result, not evidence that the Codex plugin
supports or fails a plain-text turn.

