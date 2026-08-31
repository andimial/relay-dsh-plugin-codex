# CDX-EXT-007 Validation Review

## Reasonableness

- The same isolated user config/Host/model is used for both branches; Workspace and its
  project config are the intended variables.
- Positive provenance is established by project config, native MCP event, and server
  process log—not merely returned text.
- Negative scope is established by actual `ALL_TOOLS` enumeration plus absence of MCP
  and server-log events.

## Reliability

- The first negative branch was correctly rejected during self-review because it did
  not execute the requested enumeration. A fresh retry fixed the evidence gap; both are
  retained and clearly separated.
- The project server initialized twice for Host consumers but received one business
  call only. No negative start occurred.
- Global MCP `relay_global_8426` remained available in both branches but is distinct in
  name, log, and result, so it cannot masquerade as project support.
- Source/config/control and real user config digests were stable.

## Verdict

**Pass, high confidence.** Project-scoped MCP is available in the trusted fixture and
absent from the unrelated sibling Workspace.
