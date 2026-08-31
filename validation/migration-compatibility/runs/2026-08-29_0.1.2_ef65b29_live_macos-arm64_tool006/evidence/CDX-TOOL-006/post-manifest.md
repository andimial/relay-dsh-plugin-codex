# CDX-TOOL-006 Observed Post-state

| File | Post bytes | Post SHA-256 | Expected match |
| --- | ---: | --- | --- |
| `alpha.txt` | 65 | `68d08171221c7ed167d4fc743abfcb3d51b48f70c28026fbdd12cc9da0266085` | yes |
| `beta.txt` | 62 | `5eae38c27fd06be1ec3d3db1dd813c0497a34d7dabab09e1882aad6f50d2ace3` | yes |
| `decoy.txt` | 46 | `092f52103f762cbc9e2de7ffbd86d3cac5c006d12d0cb68b242a81d7895b8c45` | yes, unchanged |

Post-state file set remains exactly `alpha.txt`, `beta.txt`, `decoy.txt`; total `173`
bytes. All three files retain their original line counts and final LF.
