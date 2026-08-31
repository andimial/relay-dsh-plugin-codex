# CDX-FILE-001 Live Evidence

## Fixture isolation

- Text fixture SHA-256:
  `6ef2851f47aa1afe4f776ae889a103f22d6d1858644f4d1624696f35f969bd17`.
- Size: `65` bytes.
- It is outside the selected sanitized Workspace and its second-line marker was never
  entered into the DSH composer.

## Product invocation check

- Fresh Session selected `GPT-5.6-Sol Low`.
- Clicking the visible `+` button opened the command palette, not an attachment picker.
- Palette options were `compact`, `export`, `feedback`, `goal`, `permission`, `plan`,
  and `model`; no file/upload/attachment action was present.
- Live DOM `input[type=file]` count: `0`.
- `no-file-control.png` records the full command palette and composer.

## Boundary corroboration

- Official DSH client implementation at the tested `0.1.0-rc.8` version reads only
  clipboard file items, passes them to `intakeImages`, validates via
  `imageMediaType`, and supports only PNG/JPEG/WebP/GIF.
- There is no ordinary document draft-attachment path in the current composer.
- Exact attempted prompt occurrences:
  - isolated DSH Sessions: `0`;
  - plugin-owned Codex rollouts: `0`.
- No model Turn started, so the marker was not leaked through any alternate path.
- Composer remained visible/enabled; browser warning/error diagnostics and isolated
  Host output were empty.

Result: **fail**. The current product provides no user path to submit a text file
attachment.
