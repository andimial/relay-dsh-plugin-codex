# CDX-SES-002 Observations

- Before reload, the sole rollout had `14` lines / `88,766` bytes and SHA-256
  `a9868e9282241ba0e3d9ebc8c504c9098a7b1b7dc22ed14cd2cadb2368a9a8f2`;
  link-store SHA-256 was
  `89da81d51341ee952ee4da45437ceb5954af3fd8c2f02930ed57bc2d4b69576b`.
- Full browser reload automatically restored the selected DSH Session and visibly
  rehydrated exact first prompt/final `SES001_NEW_THREAD_BOUND_9101`.
- Second exact prompt/final is `SES002_AFTER_BROWSER_RELOAD_9202`.
- Before/after rollout sets both contain `54` files with zero additions; the original
  rollout grew to `23` lines / `100,206` bytes and records both turns in timestamp order.
- The isolated link store is byte-identical and still contains only the same DSH Session
  → Thread `01a04c67-cc61-7831-ba6e-0685b7c80ae1` native mapping.
- Appended rollout/link-store/after-set SHA-256: `a053ecf75123ee6018bf5440d2b0ca886b30b7c695181df766eae14477edbbcb` /
  `89da81d51341ee952ee4da45437ceb5954af3fd8c2f02930ed57bc2d4b69576b` /
  `05a477fd9a9ac475b83ed607126987ad83563f636e26d18dc70473d16852f843`.
- Updated DSH archive/screenshot SHA-256: `7228895871b13ea171db6884175dd5b701d8ea8cea7893eeab296bf437e0a0cf` /
  `a01129034f8fbef39f60778a5046cad8a6799729e0640da0353334d4d3ba9670`.
