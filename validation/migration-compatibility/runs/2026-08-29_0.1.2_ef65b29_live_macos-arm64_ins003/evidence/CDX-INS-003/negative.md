# CDX-INS-003 Parent-Root Negative

- Rollout `rollout-2026-08-29T14-52-36-01a04c4a-a7a8-7242-8d10-e07ac93f90cc.jsonl`,
  Thread `01a04c4a-a7a8-7242-8d10-e07ac93f90cc`, binds exact parent-root cwd.
- Native `agents_md.directory` is the parent root and text contains only the root rule;
  the nested title/trigger/response are all absent. DSH renders only the root source.
- Identical prompt/model/mode; zero calls; exact fallback final
  `INS003_NO_NESTED_INSTRUCTION_7303`.
- Rollout/archive/screenshot SHA-256: `816516f1a866717977ca8ee7f2b16e069d2b81b9ca61cb8e88d103f6578064e4` /
  `1d0b9b36ab8655b16911052706fab82a2e7c326fe4b0eaea0026828dd26af2ac` /
  `856b9ae17aed844293cd0310ab6e1039636901491e8aa5a465238a6b369ac976`.
- Final isolated Workspace storage SHA-256 after both branches:
  `eed53807697b903cdbf2342839a35278026a651232b0e0f148ac3ce0d5e200a1`.
