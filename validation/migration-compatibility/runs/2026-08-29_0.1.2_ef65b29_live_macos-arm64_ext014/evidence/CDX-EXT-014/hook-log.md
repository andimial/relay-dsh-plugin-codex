# Plugin Hook Runtime Log Evidence

- Before both DSH branches, the product Hook log was absent; it remained absent after
  the default and trust-bypass DSH calls.
- The subsequent direct Codex control produced exactly one Hook log record.
- That record identifies installed-cache source/root version
  `0.1.0+codex.20260829052923`, the plugin data directory, Workspace cwd, canonical
  `PreToolUse`/`Bash` event, exact command input, and unique session/turn/tool ids.
- Therefore, zero of one DSH target calls reached the Hook, while one of one direct
  Codex control calls did.

Filesystem oracle for the authoritative DSH branch:

- Before: `blocked-hook-1414.txt` absent.
- After DSH call: present, 33 bytes, SHA-256
  `69046b0adbe133b590f308fda36b146a42f4936a72c876bbacbb31878a6ac7c4`.
- After evidence capture: the generated test file was deleted and verified absent.
