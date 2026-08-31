# CDX-SES-001 Observations

- Link store was absent before Host startup; sorted baseline contained `53` Codex
  rollouts, SHA-256
  `493674ccb93c59e3b6e50443740fdb551702ba17975f8d26dc9a3d810c780a3c`.
- Exactly one after-set addition exists:
  `rollout-2026-08-29T15-24-26-01a04c67-cc61-7831-ba6e-0685b7c80ae1.jsonl`.
- DSH Session `session-2919a2a9-2343-440f-8b14-3fb139a3613b` has one isolated link
  entry to Thread `01a04c67-cc61-7831-ba6e-0685b7c80ae1`, `bindingMode: native`, with
  exact model/effort/policy/cwd. The store has no second session or Thread entry.
- After-set/list and link-store SHA-256:
  `05a477fd9a9ac475b83ed607126987ad83563f636e26d18dc70473d16852f843` /
  `89da81d51341ee952ee4da45437ceb5954af3fd8c2f02930ed57bc2d4b69576b`.
- Turn returns exact `SES001_NEW_THREAD_BOUND_9101` with zero tool calls.
- Rollout/archive/screenshot SHA-256: `a9868e9282241ba0e3d9ebc8c504c9098a7b1b7dc22ed14cd2cadb2368a9a8f2` /
  `06616f44454a356d9da3064bcd2a481742afec45539f31ac6022804cf6c34277` /
  `042daba1016933fad11f9ddbbc7f917985e57ba72f57d483a70a20fe8e9fdace`.
