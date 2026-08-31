# CDX-IMG-005 Live Evidence

## Terminal result

- The independent Codex turn completed in `33s`; first token was `5.7s`.
- DSH displayed exactly one new image block named
  `exec-be7c7eb8-085a-4bd6-af7b-463499c02f42.png`.
- The exact rollout contains a completed `image_generation_end` event and no
  `commandExecution` or `fileChange` items.
- The model invoked `image_gen__imagegen`; it did not use shell, write, edit, or
  programmatic drawing.

## Artifact validation

| Check | Value |
| --- | --- |
| DSH attachment ID | `sha256:ff3fb53ab7fdf79f9aec01898891c482a5329d7867c9a0e34590825c6c39e39a` |
| Retained file SHA-256 | `ff3fb53ab7fdf79f9aec01898891c482a5329d7867c9a0e34590825c6c39e39a` |
| Byte count | `793359` |
| File signature/decoder | valid PNG, RGB, non-interlaced |
| Dimensions | `1254 × 1254` |
| Visual inspection | centered solid magenta square on white background |
| DSH image blocks | `1` |
| Browser warning/error diagnostics | `[]` |
| Composer health check | enabled send, then cleared without submission |
| Isolated DSH Host output | none |

The retained `generated.png` is a byte-for-byte copy of the Codex saved artifact and
its digest exactly matches the content-addressed DSH attachment. `completed.png`
records the visible image block in the terminal conversation.

## Deviations

- The generated file is `1254 × 1254`, not the requested `256 × 256`. The atomic
  requirement only asks for a new valid image artifact, so this is recorded as an
  instruction-fidelity limitation rather than a capability failure.
- The DSH skill catalog did not advertise `imagegen`; the model's skill-load attempt
  failed, then it read the available global instruction file and successfully called
  the image-generation tool. Skill discovery is evaluated under the extension cases.

Result: **pass** for `CDX-IMG-005`.
