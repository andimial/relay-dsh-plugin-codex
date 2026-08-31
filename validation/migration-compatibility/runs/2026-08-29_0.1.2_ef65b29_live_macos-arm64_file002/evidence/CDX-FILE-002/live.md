# CDX-FILE-002 Live Evidence

## Fixture and invocation

- CSV SHA-256:
  `e279104e881e08a34702e41f0f6a6b20a233d4ded46db4b96c686c880890535a`.
- Size: `50` bytes; oracle marker remained undisclosed.
- Browser clipboard accepted the exact bytes with MIME `text/csv` and the paste action
  succeeded, so the payload reached DSH rather than failing in automation.

## Observed rejection

- Immediate visible alert:

  ```text
  仅支持 PNG、JPG、WebP、GIF 格式的图片
  ```

- `after-csv-paste.png` captures the alert in the fresh Codex Session.
- Pending image/attachment count: `0`.
- Composer content remained empty; the CSV was not silently substituted as plain text.
- DOM file-input count: `0`.
- Exact business prompt occurrences:
  - isolated DSH Sessions: `0`;
  - plugin-owned Codex rollouts: `0`.
- Browser warning/error diagnostics: `[]`.
- Isolated DSH Host output: none.

Result: **pass** for the requirement's explicit-rejection branch. CSV/table attachment
reading itself is **unsupported**.
