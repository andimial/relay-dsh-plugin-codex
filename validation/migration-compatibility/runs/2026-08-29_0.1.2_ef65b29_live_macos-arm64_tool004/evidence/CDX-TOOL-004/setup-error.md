# CDX-TOOL-004 setup error (excluded)

- Time: 2026-08-29 11:20 Asia/Shanghai
- Intended model: `GPT-5.6-Sol Low`
- Actual model: `DeepSeek-V4-Flash High`
- Cause: model selection and prompt submission were combined immediately after Session
  creation; the model selection had not taken effect before submission.
- Observed result: the turn failed before model execution with `MISSING_CREDENTIAL`
  (`no API key for provider route "deepseek-official"`).
- Filesystem check after failure: target
  `write-output/cdx_tool004_created.txt` remained absent.
- Disposition: excluded from CDX-TOOL-004 product result. The valid attempt must use a
  fresh Session, select the model in a separate browser operation, verify the selector
  says `GPT-5.6-Sol`, and only then submit the test prompt.

This record is retained so the validation history is append-only and the operator error
cannot be mistaken for a Codex plugin failure.
