# CDX-TOOL-006 — Multi-file edit

## Traceability

- Primary requirement: `CDX-TOOL-006`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that Codex can coordinate exact native edits across two files while preserving an
explicitly out-of-scope file and every unrelated byte.

## Preconditions

- `CDX-TOOL-005` is closed.
- `multi-edit/alpha.txt`, `beta.txt`, and `decoy.txt` match the recorded pre-state
  manifest; each old marker is unique.
- Fresh Session uses sanitized Workspace, `GPT-5.6-Sol Low`, `Workspace Write`.

## Method

1. Retain all three pre-state files and their SHA-256 manifest.
2. Precompute the only acceptable post-state manifest and exact combined diff.
3. Create a fresh Session and send exactly:

   ```text
   Use the read and edit tools, not shell. In multi-edit/alpha.txt replace exactly ALPHA_STATE=OLD_1122 with ALPHA_STATE=NEW_7788. In multi-edit/beta.txt replace exactly BETA_STATE=OLD_3344 with BETA_STATE=NEW_9900. Change nothing else, including multi-edit/decoy.txt. After both edits, reply MULTI_EDITED only.
   ```

4. Require native reads/edits for the exact relative paths and no shell fallback.
5. Independently compare the entire `multi-edit/` directory with the pre-state and the
   expected post-state.
6. Retain artifacts, manifest, diff, rollout/Session excerpts, screenshot, diagnostics.

## Expected results

- `alpha.txt` and `beta.txt` each receive exactly their one requested replacement.
- `decoy.txt`, surrounding bytes, line order, final newlines, and file set are unchanged.
- Terminal answer is exactly `MULTI_EDITED`.

## Result interpretation

- Pass only when both required post-state digests and the untouched decoy digest match.
- Fail for a missed/wrong edit, unrelated content/file change, or shell substitution.
- Blocked only when native multi-file editing cannot start for an environmental reason.

## Review focus

- Inspect the full directory manifest, not only the two expected changed files.
