# CDX-TOOL-003 — File read

## Traceability

- Primary requirement: `CDX-TOOL-003`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that Codex can use the native read tool on a specified Workspace-relative text
file and return an undisclosed exact line.

## Fixture

- Relative path: `read-fixture/exact-read.txt`.
- Exact third line: `READ_MARKER_4096_HJLM`.
- File SHA-256:
  `55c6eb08589b9b1676e8f749ddbcdb810c84c3c29370f2747aadfde8f5e9cd96`.
- Byte count: `81`.

## Preconditions

- `CDX-TOOL-002` is closed.
- Fresh Session uses the sanitized Workspace and `GPT-5.6-Sol Low`.

## Method

1. Create a fresh Codex Session.
2. Send exactly:

   ```text
   Use the read tool, not shell, to read read-fixture/exact-read.txt. Reply with the third line only, preserving it exactly.
   ```

3. Require one real native read call for the exact relative path.
4. Require tool content to contain the numbered source line and terminal answer exactly
   `READ_MARKER_4096_HJLM` once.
5. Retain calls/results, Session events, screenshot, and diagnostics.

## Expected results

- The native read call succeeds on the exact Workspace file.
- Exact third-line content reaches Codex and is returned without decoration.
- No shell fallback occurs.

## Result interpretation

- Pass only when real read evidence and exact terminal output both pass.
- Fail for wrong file/content, no read call, shell substitution, or altered output.
- Blocked only when read infrastructure cannot start independently of plugin behavior.

## Review focus

- Distinguish the tool's line-number presentation from source content.
- Confirm no other file contains the marker within the Workspace.
