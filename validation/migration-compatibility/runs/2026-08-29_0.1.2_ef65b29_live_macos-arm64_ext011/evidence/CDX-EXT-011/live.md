# CDX-EXT-011 Live Evidence

- Canonical fixture validation passed before installation.
- The isolated operator CLI installed and independently listed the exact plugin.
- A fresh Codex-backed DSH task independently executed the same pinned CLI and observed
  the identical installed identity, enabled status, version, marketplace, and path.
- The DSH task returned `PLUGIN_DISCOVERED_1173`; no plugin component was invoked.
- Real user configuration stayed byte-identical.

Result: **pass**, with one minor extra progress sentence.
