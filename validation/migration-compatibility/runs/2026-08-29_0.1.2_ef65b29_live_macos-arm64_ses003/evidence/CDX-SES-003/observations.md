# CDX-SES-003 Observations

- Before restart, original rollout had `23` lines / `100,206` bytes, SHA-256
  `a053ecf75123ee6018bf5440d2b0ca886b30b7c695181df766eae14477edbbcb`;
  link store and rollout-set SHA-256 were
  `89da81d51341ee952ee4da45437ceb5954af3fd8c2f02930ed57bc2d4b69576b` /
  `05a477fd9a9ac475b83ed607126987ad83563f636e26d18dc70473d16852f843`.
- Host process exited and an independent curl to port `4392` returned code `7`, proving
  an actual outage before restart.
- Restart reused identical DSH_HOME, CODEX_HOME, and isolated link-store path. Browser
  rehydrated the same selected Session plus exact first two turns automatically.
- Third exact prompt/final is `SES003_AFTER_HOST_RESTART_9303`.
- Rollout set gains zero files; original rollout grows to `32` lines / `111,637` bytes
  and records all three turns in timestamp order. Link store remains byte-identical.
- Appended rollout/link-store/after-set SHA-256: `e067afe93ec25a44a307f71f31fb451aa1d2374766fc6032aff460a0611bea06` /
  `89da81d51341ee952ee4da45437ceb5954af3fd8c2f02930ed57bc2d4b69576b` /
  `05a477fd9a9ac475b83ed607126987ad83563f636e26d18dc70473d16852f843`.
- Updated DSH archive/screenshot SHA-256: `d2a950e08252d64d4b359aed7bf7fbd2ee5f34956c5b810107b23fafcce494eb` /
  `8aebd3396fb7ccd97449955ac6379edeec321bb5f9dad7e1048fe0afb62d8214`.
