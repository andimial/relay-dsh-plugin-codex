# CDX-TOOL-006 Pre-state and Expected Post-state

| File | Pre bytes | Pre SHA-256 | Expected post SHA-256 |
| --- | ---: | --- | --- |
| `alpha.txt` | 65 | `08c7663e49cfad155c3d023edfddee2732564c316511a681b90d976e394e6679` | `68d08171221c7ed167d4fc743abfcb3d51b48f70c28026fbdd12cc9da0266085` |
| `beta.txt` | 62 | `690abaddcfa6f8b250effdb46fa16c3e60fab0c7a94ee0c23799477c3430432a` | `5eae38c27fd06be1ec3d3db1dd813c0497a34d7dabab09e1882aad6f50d2ace3` |
| `decoy.txt` | 46 | `092f52103f762cbc9e2de7ffbd86d3cac5c006d12d0cb68b242a81d7895b8c45` | `092f52103f762cbc9e2de7ffbd86d3cac5c006d12d0cb68b242a81d7895b8c45` |

Pre-state file set: exactly `alpha.txt`, `beta.txt`, `decoy.txt`; total `173` bytes.
The old alpha and beta markers each occur exactly once in the Workspace.
