# CDX-EXT-015 Validation Review

## Reasonableness

- The prompt exercises a DSH-owned filesystem tool, not a Codex built-in or MCP tool.
- A unique two-line fixture distinguishes a real read from memorized or prompt-echoed
  output, while the exact-response constraint makes UI comparison deterministic.
- Native catalog inspection proves advertisement under namespace `dsh`; the tool call
  alone would not establish that registration contract.

## Reliability

- The independent fixture digest agrees with the exact path and content returned by
  the native custom-call output.
- The unified wrapper contains exactly one nested call, `tools.dsh__read`; there is no
  shell, alternate file tool, retry, or model-only shortcut.
- Thread id, Workspace cwd, DSH Session, model, final response, and screenshot align.
- The fixture remained unchanged and all retained digests were recorded after the turn.

## Limitation

- This case proves one representative read-only DSH-contributed tool. Dynamic mutation
  of the advertised set belongs exclusively to `CDX-EXT-016`.

## Verdict

**Pass, high confidence.** The current plugin advertises a DSH-contributed tool in the
Codex `dsh` namespace, executes it in the owning Session, and returns the exact result
to that same DSH conversation.
