# CDX-TOOL-002 — Glob and search

## Traceability

- Primary requirement: `CDX-TOOL-002`
- Secondary requirements: none
- Verification levels: `L`, `W`
- Priority: `P0`

## Objective

Prove that Codex can use real Workspace glob and content-search tools to discover a
unique nested fixture and return its undisclosed full marker.

## Fixture

- Relative path: `nested/discovery/cdx_tool002_9qk7.txt`.
- Exact target line: `SEARCH_ORACLE=FOUND_5821_ZXCV`.
- File SHA-256:
  `8483248812ed852c304acb96f36a88148893767fcad46a8cd36251aeaa1cce1d`.

## Preconditions

- `CDX-TOOL-001` is closed.
- Fresh Session uses the sanitized Workspace, `GPT-5.6-Sol Low`, and
  `Workspace Write`.

## Method

1. Create a fresh Codex Session.
2. Send exactly:

   ```text
   Do not use shell. First use the glob tool to find the unique file whose basename starts with cdx_tool002_. Then use the grep tool to find the line containing SEARCH_ORACLE in that file. Reply exactly as relative_path|matching_line and nothing else.
   ```

3. Require one real `glob` call followed by one real `grep` call, both scoped to the
   selected Workspace.
4. Require terminal output exactly:

   ```text
   nested/discovery/cdx_tool002_9qk7.txt|SEARCH_ORACLE=FOUND_5821_ZXCV
   ```

5. Retain tool calls/results, Session events, screenshot, and diagnostics.

## Expected results

- Glob finds the unique relative path.
- Grep finds the exact line in that file.
- No shell fallback or unrelated path/result appears.

## Result interpretation

- Pass only when both real tools and exact terminal oracle pass.
- Fail for missing/incorrect discovery, shell substitution, duplicated result, or
  wrong scope.
- Blocked only when tool infrastructure cannot execute independently of plugin behavior.

## Review focus

- Inspect call order and exact tool result paths in the rollout.
- Confirm the fixture is unique within the selected Workspace.
