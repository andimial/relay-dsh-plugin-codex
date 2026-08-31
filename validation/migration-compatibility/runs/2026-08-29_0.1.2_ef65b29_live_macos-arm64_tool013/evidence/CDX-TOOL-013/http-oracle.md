# CDX-TOOL-013 HTTP Oracle

- URL: `http://127.0.0.1:4399/oracle.txt`
- Server bind: `127.0.0.1:4399`
- Independent response: `HTTP/1.0 200 OK`, `Content-Type: text/plain`,
  `Content-Length: 46`.
- Fixture SHA-256:
  `4f89592e7e1bc756b026dc1d4c71f0c2cfecb581d6aa2d391c4b6099aafdfde8`.
- Exact body:

  ```text
  WEB_MARKER_6420_QVXZ
  DECOY_DO_NOT_REPORT_1187
  ```

- Codex turn context declares `network_access: false` / network `restricted` before the
  test. The case still requires an actual web attempt so any denial is evidenced rather
  than inferred from configuration alone.
