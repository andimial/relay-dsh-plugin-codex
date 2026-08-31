# CDX-INS-004 Same-Scope Override

- `AGENTS.override.md` SHA-256:
  `a46bda9423859b775c215c35c736d39ed062f0e0f92b8bf9e99936a3acee7c63`.
- After adding it and restarting the Host, rollout
  `rollout-2026-08-29T14-57-23-01a04c4f-0ab6-7dc1-a5d1-f315a030860d.jsonl`,
  Thread `01a04c4f-0ab6-7dc1-a5d1-f315a030860d`, bound the identical cwd.
- Native `agents_md` contains the inherited project rule followed by the exact
  same-scope override rule. The same-scope base title, content, and result marker are
  absent; this proves replacement rather than merging.
- Identical common prompt/model/mode; zero calls; exact final
  `INS004_OVERRIDE_WINS_7404_XPMD`.
- DSH's context row renders the effective source path as `AGENTS.md`, while the native
  text and result are from `AGENTS.override.md`; this is a source-label defect only.
- Rollout/archive/screenshot SHA-256: `09b6a625f899f1c1a9cf5b0f1d18792ed15c433b2c2298a7b2078e2b17a6d2fb` /
  `6b93137b0f136091d2c4b45cbb9ec56a69f8c18a7e4dfa3d891cdf93c12766a5` /
  `919ea8a75cfcf2e88d518e600d0ce30df64b598270bc819ac9f74aded342e299`.
- Final isolated Workspace storage SHA-256:
  `42421e8f64d9108179ae6370b60e5df695e910e9e7e381d53708286ac54626ae`.
