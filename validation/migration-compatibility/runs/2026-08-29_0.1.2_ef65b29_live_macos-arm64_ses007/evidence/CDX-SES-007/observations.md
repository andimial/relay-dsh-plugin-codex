# CDX-SES-007 Observations

- Before compaction, the original source rollout has `47` lines / `117,763` bytes,
  SHA-256 `e391425437a036fa1160772481db84733b66d37d7ef50977165fe659171aa1af`.
  The imported Session returns exact acknowledgement `ACK_SES007` for the private marker.
- With the DSH Host confirmed offline, the exact Thread resumes through App Server and
  `thread/compact/start` completes in `9,910ms`. Native events contain exactly one
  `item/started:contextCompaction` and one `item/completed:contextCompaction`.
- The same rollout grows to `51` lines / `122,807` bytes, SHA-256
  `3a5ac432170c63928613470975e629fa84dafef81ba76da79cf4579f23651ca0`.
  It records one `compacted` object and one `context_compacted` event. Window changes
  from `01a04c60-8a1e-70d2-8c58-7a43a7721236` to
  `01a04c7a-26a0-7400-a1b9-0c4069272fd7`; replacement history contains four items and
  retains the private marker.
- After Host restart, the recall prompt is `132` bytes and contains no private marker.
  Native final output is `29` bytes and contains the exact marker. No tool call occurs.
- Final source rollout has `65` lines / `166,221` bytes, SHA-256
  `f3ca35b8fbe9695a2f63b7dba3865a139dd0b4612f668031beaaf9b478b1d54f`.
  The rollout-set digest stays
  `05a477fd9a9ac475b83ed607126987ad83563f636e26d18dc70473d16852f843`
  throughout: no replacement rollout is created.
- Pre/final link-store SHA-256 changes from
  `92c0f37b009d8e3c0515adb0934b274752d2dd3661df5d6a666fc4cfc9a5fbb3` to
  `0af8b1bb496015d295f40a10650583261ecf3770cfc3b937569dbc3b883d386c`.
  The final committed imported binding still targets the exact source Thread and carries
  three admitted DSH turn IDs, but its key is reconciled to
  `codex-rebuild-f95643eff6981f7412366b56`.
- The original imported archive remains at SHA-256
  `4b43119b1967e7102af1383c03726685c5fe1f6ec9b70bd1a0a104b9afe3e326`;
  reconciliation creates rebuild archives. A second full Host restart nevertheless
  restores the source history, pre-compaction marker turn, recall prompt, and exact final
  answer in one selected UI Session.
- Screenshot SHA-256 values: pre-compaction
  `2734dc53452ee0469d1447de15bf55a1583066bda2b01f918bec1ea0a954d364`,
  post-recall `402226d0e7f902a8c2773eacba7bcbf3fb825615ac5dd7df2e6770c0f5f1d95a`,
  post-second-restart
  `bd3de2ef962124769340f9b27aa8bb2d252aa86c1c5d92200dafdf682ae4c741`.
