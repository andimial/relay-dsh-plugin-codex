# CDX-TXT-009 Validation Review

## Process review

1. **Controlled transition:** accepted. A fresh Session established Sol/Low, then
   changed only effort to High before sending; the model remained constant.
2. **Protocol coverage:** accepted. One focused test covers selector label mapping;
   the other covers ordered High settings synchronization before a turn.
3. **Live request identity:** accepted as decisive. Persisted request metadata records
   exactly `gpt-5.6-sol` / `high`; assistant source confirms the model did not switch.
4. **UI persistence:** accepted as corroboration. Exact semantic controls and
   screenshots show Low before, High after selection, and High after completion.
5. **Terminal health:** accepted. One exact answer completed normally, composer
   remained usable, and diagnostics were clean.

## Reliability assessment

- The combination of before/after UI state, protocol settings ordering, and real
  request metadata rules out a cosmetic-only selector change.
- The reasoning block content remained empty, consistent with TXT-005, but that does
  not contradict effort forwarding; the two requirements deliberately have separate
  oracles and results.
- This proves initial Sol Low→High selection in one live environment, not every effort
  level or mid-Thread update.

Confidence: **high for selected-effort forwarding**.

Reviewed result: **pass**. The process is reasonable and evidence is reliable enough
to close `CDX-TXT-009` before starting `CDX-TXT-010`.
