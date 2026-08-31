# CDX-TOOL-013 Validation Review

## Loopback branch process review

1. **HTTP oracle:** accepted. Independent 200/body/digest and server log establish source
   availability.
2. **Tool identity:** accepted. Native `web__run`; no shell fallback.
3. **Read branch:** failed. Tool never reached the server and returned no fixture body.
4. **Denial branch:** failed. Tool said only `invalid ref_id`; it did not identify a
   network policy. Assistant's `POLICY_DENIED` classification is unsupported inference.
5. **No guessed read:** accepted. Assistant did not claim marker retrieval.
6. **Health:** accepted. Normal turn, clean diagnostics, unchanged fixture.

Confidence in loopback branch result: **high**.

Reviewed branch result: **fail**. The requirement remains open for a public fixed-source
retry, which will distinguish generic Web access from loopback URL handling.
