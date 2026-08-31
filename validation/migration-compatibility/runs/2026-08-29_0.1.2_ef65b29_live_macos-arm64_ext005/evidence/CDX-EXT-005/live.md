# CDX-EXT-005 Live Evidence

- Fresh positive-Workspace Session used `GPT-5.6-Sol Low`, `Workspace Write`.
- Exact named Skill content was injected.
- Native reference read returned the one-line reference oracle.
- Native shell ran the exact bundled Node script from the Skill directory and returned
  the same stdout/exit behavior as the independent oracle.
- Terminal result block and DSH persistence preserved
  `SCRIPT_COMBINED_REFERENCE_PART_2648_KLHW_RS73`.
- The assistant emitted one progress sentence before the requested stdout-only block.
- Three-file manifest and all digests remained unchanged.

Result: **pass**, with a minor response-format deviation. The bundled resource and
script both executed correctly; the extra progress sentence did not alter the script
stdout or prevent task completion.
