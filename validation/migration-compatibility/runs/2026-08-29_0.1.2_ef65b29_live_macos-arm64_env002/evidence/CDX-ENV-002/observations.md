# CDX-ENV-002 Observations

- Source SHA-256:
  `3563338be2eea36d4d6b5a35268cb79bbdf41335bff67c4c497d62e1316662`;
  pre-turn storage/config SHA-256:
  `c952a935a09f4c7f874acba1f409bca842943155e2cdf4ed00770ae035e93951` /
  `33e05986eae2b362625a5c3cb5932a1e61668fe830ad9344f3a7e12e63aff90c`.
- Rollout `rollout-2026-08-29T15-16-30-01a04c60-8a1e-70d2-8c58-7a3febcef577.jsonl`,
  Thread `01a04c60-8a1e-70d2-8c58-7a3febcef577`, records the exact absolute Unicode and
  spaced cwd in turn context.
- Native `pwd` returns that identical path. Native source-read input quotes exact
  `输入 文件 8602.txt` and returns `环境路径种子 8602\n`.
- Native patch creates exact absolute `输出 文件 8602.txt`; final native read/cmp runs
  in the exact cwd and exits `0`.
- Output SHA-256 before cleanup:
  `437e7143b79e9396298b01156f168c6c8be747f1237834f3d4de41a647fc8706`;
  exact final `ENV002_CWD_AND_FILES_CONFIRMED_8602`.
- Rollout/archive/screenshot SHA-256: `02f7849eca339d8fe40cb5513cd7e9c52d2e44a21a970c4e456ceef4ab431de5` /
  `20510bd3da37ce9df0982ccafcbdc32d71efd0d59fc155a60dc88c741b661393` /
  `70a891add7b68cb4a37c4ad649947cd91d5a49e84f694bd174befb58aefaa057`.
- Final Workspace storage SHA-256 after Session registration:
  `21e5198fcdb6f8e6202ff8755cb72f2ed5587629d24298cfd68603b1dc784c31`;
  generated output was removed after hashing.
