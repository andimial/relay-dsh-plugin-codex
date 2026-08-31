# CDX-SES-004 Observations

- Native manifest contains `54` unique Thread IDs / `54` rows, SHA-256
  `9b691dff41792f62f864210d5f81cadd2ed4b58536835936f810318c3edbc90a`.
- Native cwd counts include exact `24` plain-text Threads and exact `1` Unicode/spaced
  Thread. The isolated link store binds one of the 24 plain-text Threads.
- Plain discovery reports `找到 24 / 已存在 1 / 待恢复 0 / 可导入 23`, exactly matching
  native scoped count minus the one bound Thread.
- Unicode/spaced discovery reports `找到 1 / 已存在 0 / 待恢复 0 / 可导入 1`, proving
  Workspace-sensitive count changes and excluding the 53 other Threads.
- In both dialogs, the entire accessible text contains only Workspace path, four counts,
  `取消`, and `全部导入`. There are zero candidate list/input/data-thread-id elements,
  no Thread IDs/titles, and no individual selection control.
- No import was executed; link-store SHA-256 remained
  `89da81d51341ee952ee4da45437ceb5954af3fd8c2f02930ed57bc2d4b69576b`.
- Plain/Unicode screenshot SHA-256: `b2a26c2c6329c5e233adf00b8a459229a922e7b52a01b9b036fac94ffb5b0aa6` /
  `2bb779375e26e18d1213a590b2dc63aaf549566259251d8bdbbd08c045e3d36f`.
