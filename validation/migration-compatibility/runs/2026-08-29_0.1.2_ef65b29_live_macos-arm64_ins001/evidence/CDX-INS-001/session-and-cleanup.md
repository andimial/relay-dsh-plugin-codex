# CDX-INS-001 Session and Cleanup

- DSH Session `session-50e5a610-9968-49b1-a4e7-309ccc291076` preserves the exact
  prompt and terminal marker; archive SHA-256
  `50b7939cc01a2245a9ed6fc97188485bf2e7ce0133782bb56a5bba7aed88ae51`.
- `global-agents.png` shows the exact terminal marker and selected model/mode; SHA-256
  `8ae39aa7cba81b8638e3fd3d6c1d1242f3734c3b9ed4222ff2a145f6034157f6`.
- The temporary global file was deleted with a targeted patch.
- Both global instruction filenames are absent after cleanup and the normal isolated
  Host restarted at port 4392.
