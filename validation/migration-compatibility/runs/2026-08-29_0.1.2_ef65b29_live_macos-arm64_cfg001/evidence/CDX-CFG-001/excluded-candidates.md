# CDX-CFG-001 Excluded Candidate Attempts

These attempts are retained but do not determine the verdict:

1. Rollouts `01a04c15-a8ce-7fc1-a0fc-73bdeccda908` and
   `01a04c17-26df-7783-b063-3e7acee82818`: documented user
   `sandbox_workspace_write.network_access=true` was present and parsed, but both
   DSH-created turn policies were `network_access:false`.
2. Rollout `01a04c19-2c89-73f2-84a3-276814259ac6`: documented user
   `personality="pragmatic"` was present and parsed, but the DSH-created turn remained
   `personality:"friendly"`.
3. Rollouts `01a04c1b-2154-7681-99e5-90831ebc2713` and
   `01a04c1c-ae64-7cc2-b1d8-0bcf8c79f3a7`: `tools.view_image=false` did not remove the
   Host-injected native `view_image` tool from `ALL_TOOLS`.
4. Rollout `01a04c20-5cfe-7b51-aa38-9b370510544f`: the configured server initialized,
   but the bare-name prompt made no tool call and declared it unavailable. The clean
   retry using server plus tool identity succeeded.

All temporary settings were removed before the authoritative MCP baseline or final
cleanup. The first three observations are precedence inputs for `CDX-CFG-005` rather
than evidence that `config.toml` is wholly ignored.
