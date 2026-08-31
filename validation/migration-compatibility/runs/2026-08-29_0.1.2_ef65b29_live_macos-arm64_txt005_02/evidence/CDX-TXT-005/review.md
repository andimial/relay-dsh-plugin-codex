# CDX-TXT-005 Validation Review

## Process review

1. **Initial configuration flaw corrected:** accepted. The Low-effort preflight was
   retained as not-applicable; both decisive runs explicitly selected High in fresh
   Sessions before sending.
2. **Protocol separation:** accepted. The focused deterministic test proves the
   adapter can yield a non-empty reasoning delta separately from final text.
3. **Live oracle:** accepted. The Think control was expanded and its dedicated content
   container inspected, rather than inferring support from the button label.
4. **Backend-versus-UI ambiguity addressed:** accepted. Sanitized persisted DSH events
   show the reasoning text was already empty, so the blank display is not merely a
   locator or CSS visibility miss.
5. **Task-complexity ambiguity addressed:** accepted. A second independent High-effort
   Session used a materially harder no-tools calculation/cross-check prompt and
   reproduced the same empty reasoning block.
6. **Final-answer health separated:** accepted. Both final markers were correct,
   unique, and terminal; the failure is specifically reasoning content presentation,
   not general conversation reliability.
7. **Diagnostics:** accepted. Browser and Host error checks were clean, and the
   composer remained usable.

## Reliability assessment

- Two fresh High-effort live turns, persisted event inspection, semantic DOM
  inspection, screenshots, and a distinct protocol fixture converge on the same
  scoped conclusion.
- The evidence does not identify whether the empty live block originates in Codex
  summary configuration, App Server output, or plugin event mapping before DSH
  persistence. Root-cause diagnosis is outside this validation item.
- Because users receive no reasoning content in the tested supported configuration,
  the migration capability itself is not currently supported regardless of which
  internal layer is responsible.

Confidence: **high for the observed failure; medium for component attribution**.

Reviewed result: **fail**. The validation process is now reasonable and the result is
reliable enough to close `CDX-TXT-005` as unsupported before starting `CDX-TXT-006`.
