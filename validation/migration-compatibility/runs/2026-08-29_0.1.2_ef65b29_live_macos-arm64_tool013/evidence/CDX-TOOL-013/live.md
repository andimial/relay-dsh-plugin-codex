# CDX-TOOL-013 Live Evidence

- Independent HTTP oracle returned exact fixture body and SHA-256; fixture server was
  healthy.
- Fresh Session visibly used `GPT-5.6-Sol Low` and `Workspace Write`.
- Codex used native `web__run`, not shell, with the exact loopback URL.
- Tool result was `invalid ref_id argument`, not an explicit network-policy denial.
- Local server log proves no plugin request arrived; only the prior independent oracle
  GET exists.
- Assistant labeled the ambiguous tool error `POLICY_DENIED` and added “restricted
  target,” neither of which the tool result explicitly established.
- It did not falsely claim to have read the marker, and Session remained healthy.
- Fixture digest stayed unchanged; browser diagnostics `[]`; Host output none.

Branch result: **fail**. Loopback access was not read and denial semantics were inferred,
not explicit. Public fixed-source retry required before closing the requirement.
