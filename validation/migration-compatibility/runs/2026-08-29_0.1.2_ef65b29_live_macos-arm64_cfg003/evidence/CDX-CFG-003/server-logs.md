# CDX-CFG-003 Product Server Logs

- After the user branch, the user log had 10 records including exactly one call with
  the shared identity/token; the project log remained at its 138-record post-restart
  baseline and had no new call.
- After the project branch, the user log remained at 10 records, while the project log
  advanced to 148 records with exactly one new call and the same shared identity/token.
- The subsequent cleanup restart appended only two `close` records to each live server:
  final counts are 12 and 150. It added no tool call.
- Final user-log SHA-256:
  `d9648301749061007483c92ec9b479ad2e49a0499ebc4bf62d73e7914d3c990b`.
- Final project-log SHA-256:
  `26d2e3b46a692eee15ddd3e6219f73c415a43847cb03cf5531a72a4df16dad63`.
