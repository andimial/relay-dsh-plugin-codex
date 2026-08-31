# CDX-SES-005 Observations

- Source rollout SHA-256:
  `02f7849eca339d8fe40cb5513cd7e9c52d2e44a21a970c4e456ceef4ab431de5`.
  Its source order is user prompt → assistant progress → native tools → exact final.
- Before import, Unicode Workspace had only original live DSH Session
  `session-fb5aa842-bb26-4198-a2d5-8351bf22ee57`; isolated link store contained only
  the unrelated plain-text native binding.
- Discovery reconfirmed `找到 1 / 已存在 0 / 可导入 1`; bulk summary reported
  `已导入 1 / 已存在 0 / 失败 0`.
- Exactly one new Session `codex-import-67c8c14a0c2edbb430665b44` maps to exact Thread
  `01a04c60-8a1e-70d2-8c58-7a3febcef577`, `bindingMode: imported`,
  `importState: committed`, and exact Unicode/spaced cwd.
- Native rollout file count remains `54` and source digest is byte-identical.
- Imported archive sequence is: user `seq 2`; assistant progress `seq 4`; material
  write call/result `seq 7–9`; exact final `seq 12`; turn end `seq 14`.
- UI presents the same user → progress → `Write 输出 文件 8602.txt` →
  `ENV002_CWD_AND_FILES_CONFIRMED_8602` order. Non-mutating exec calls are omitted.
- Post-import link-store/Workspace-storage SHA-256:
  `da0558de9053cbce483d4ac1193b4d92814372894022f1a6907e54b73c0ba8ff` /
  `8386a9859189c2890bac127f855ac43e63069feca6f9273a5e9598c6518632d5`.
- Imported archive/screenshot SHA-256: `bb17fe3efacd0030839b11a314e89ee2d784b3e84effe682956056aa0bb3a8a1` /
  `2391db81fdc48a90f525890f5a859e2434d9c6c9356d12fa2b2c36f74792626b`.
