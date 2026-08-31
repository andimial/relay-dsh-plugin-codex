# CDX-CFG-004 Config, Server Log, and Cleanup

- Original/restored isolated user-config SHA-256:
  `a88d20c9da8c21029a2aad164b5e078d970720a2c7b6228e86f925e93ed83361`.
- The product server log was absent throughout the untrusted branch.
- The trusted branch created 10 records: two process initialize/list lifecycles and
  exactly one tool call with the expected identity/token.
- Cleanup restart added only two `close` events; final 12-record log SHA-256:
  `7e0fc097cf146f4473b16815399531d51cb2e0bb39a6984b031980c0007d78ce`.
- The trust entry was removed, `mcp list` no longer shows the project server outside
  project trust, and the normal isolated Host is listening on port 4392.
- Final isolated DSH Workspace storage SHA-256:
  `686e8ed7df061bb45a16a225a41423e9d82483530fd93947996559c362736c03`.
