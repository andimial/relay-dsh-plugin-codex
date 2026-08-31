# Plugin Hook Trust Evidence

## Default policy branch

- Fresh post-install Host/Thread ran the marker-bearing `printf` successfully and
  returned `DEFAULT_HOOK_SKIPPED_1414`.
- Hook log remained absent. No Hook review warning/card or trust action appeared in the
  DSH Session UI or rollout.

## Vetted bypass branch

- The isolated DSH profile temporarily supplied exact Codex args containing
  `--dangerously-bypass-hook-trust`; process inspection confirmed both Node launcher and
  native Codex App Server had the flag.
- A fresh post-restart Thread still executed the target command, created the target
  file, logged no Hook event, and returned `PLUGIN_HOOK_NOT_OBSERVED_1414`.
- The temporary DSH profile override was removed and the Host restarted. Process
  inspection confirms the restored normal App Server args contain no bypass flag.

This distinguishes a missing DSH trust UI from a deeper integration failure: bypassing
trust did not make App Server load the plugin Hook, while direct Codex did.
