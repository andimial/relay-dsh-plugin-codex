# MCP Image Result DSH Session

- Session:
  `/private/tmp/relay-cdx-ext006.zqpFm7/dsh-home/sessions/--Users-boboyang-work-Relay-integrations-codex-validation-migration-compatibility-fixtures-project-scope-control-workspace--/session-8027f629-ac18-4891-9413-f6309ddba5ef/session.jsonl.zstd`
- Persisted assistant content: two empty reasoning blocks and text
  `MCP_IMAGE_SEEN`; no image/attachment block.
- Assistant/turn-end time: `1787979270402` / `1787979270403`
- Turn end: `completed`; UI duration 22.6 seconds.
- Isolated DSH attachment file count after branch: `0`.
- Browser DOM image list contained no result image; screenshot visually shows only the
  text token and empty space where inline media would be expected.

Branch verdict: **fail**. Backend bytes are intact, but the user cannot see or recover
the MCP-returned image from the Session.
