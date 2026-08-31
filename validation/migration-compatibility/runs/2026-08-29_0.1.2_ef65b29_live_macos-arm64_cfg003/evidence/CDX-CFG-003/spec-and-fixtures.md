# CDX-CFG-003 Specification and Fixtures

- Case: `cases/CDX-CFG-003--config-precedence.md`; priority `P0`, levels `L` and `W`.
- User server SHA-256:
  `9298dba01da0663189897a4df34a8ca44e9879656c1498c70966810b25cebb35`.
- Project server SHA-256:
  `03f34ded9eae3d72acd8e3f9c40df3743e95a426a222ba00a8e11b4103d27a33`.
- Both define server `relay_project_7731`, tool `project_echo_7731`, and accept the
  same token `PROJECT_INPUT_7731_HZKP`; only result/source markers differ.
- Independent direct JSON-RPC calls returned `CFG003_USER_WINS_4303_NQTX` with
  `source:user` and `STDIO_PROJECT_OK_7731_HZKP` with `scope:project` respectively.
- Direct log SHA-256 values: user
  `97abe7af8da00c963643e2a65e2612664a04e55c68070e12ab5b7eb5620b9ab5`;
  project `c6c57eb4c581d31d5ce696fa795fbc13b28df59fdd240539cf80b6b5b8678ee6`.
