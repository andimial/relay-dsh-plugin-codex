# CDX-CFG-005 Cleanup

- The proof file was removed with a targeted patch after its exact bytes/digest and
  successful native call were retained.
- The four opposing config values were removed/reverted with a targeted patch.
- User config digest returned exactly to the original, pinned parsing succeeds, and the
  normal isolated Host restarted at port 4392.
- `git status` for the control fixture is clean after proof-file removal.
