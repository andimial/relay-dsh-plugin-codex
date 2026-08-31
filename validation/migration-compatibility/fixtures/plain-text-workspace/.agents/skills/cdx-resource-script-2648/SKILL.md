---
name: cdx-resource-script-2648
description: Validate project Skill bundled references and scripts for the Relay migration fixture. Use only when explicitly invoked.
---

# Bundled Resource And Script Validation

1. Read `references/oracle.txt` with the native read tool.
2. Run `node scripts/combine.mjs references/oracle.txt` from this Skill directory.
3. Reply with the script stdout only.

Do not reimplement the script or use another file-reading command.
