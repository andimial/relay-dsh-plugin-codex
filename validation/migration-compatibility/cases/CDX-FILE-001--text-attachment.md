# CDX-FILE-001 — Text attachment

## Traceability

- Primary requirement: `CDX-FILE-001`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P1`

## Objective

Prove that a user-uploaded text file reaches Codex and its undisclosed exact marker
can be read without relying on a Workspace path.

## Fixture

- File: `fixtures/file-text/source-note.txt`.
- Exact marker is retained in this case but omitted from the live prompt.
- SHA-256:
  `6ef2851f47aa1afe4f776ae889a103f22d6d1858644f4d1624696f35f969bd17`.
- Byte count: `65`.

## Preconditions

- `CDX-IMG-008` is closed.
- Fresh DSH Session uses `GPT-5.6-Sol Low`.
- The uploaded file resides outside the selected sanitized Workspace, so Codex cannot
  discover it through Workspace tools.

## Method

1. Create a fresh Codex Session.
2. Use DSH's attachment UI to upload the exact text fixture and require one pending
   file attachment before send.
3. Send exactly:

   ```text
   Read the attached text file and reply with the exact token on its second line only. Preserve character case and underscores.
   ```

4. Require one terminal answer exactly `FILE_MARKER_7319_KQVT`.
5. Inspect the DSH file attachment event and exact Codex Thread input; verify the file
   bytes or supported extracted content reached Codex.
6. Retain pre-send/completed screenshots, events, rollout, and diagnostics.

## Expected results

- DSH accepts and persists the exact text file attachment.
- Codex receives the attachment or extracted content.
- The exact undisclosed marker is returned once.

## Result interpretation

- Pass only when transport and exact readback both pass.
- Fail if the attachment is dropped, the marker is wrong/missing, or only a request to
  attach the file is returned.
- Blocked only when browser/DSH infrastructure prevents use of the product's file
  attachment control.

## Review focus

- Confirm fixture location is outside the selected Workspace and the marker is absent
  from the live prompt.
- Inspect the new Thread rather than inferring from image attachment behavior.
