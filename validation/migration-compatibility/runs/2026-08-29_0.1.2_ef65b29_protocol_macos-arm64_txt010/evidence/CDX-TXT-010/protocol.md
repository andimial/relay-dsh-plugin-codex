# CDX-TXT-010 Protocol Evidence

Command:

```bash
node --test \
  --test-name-pattern="automatic title generation uses an isolated ephemeral Codex thread" \
  test/dsh-adapter.test.mjs
```

Observed:

```text
tests 1
pass 1
fail 0
duration_ms 89.349959
focused_test_ms 5.498416
```

Reviewed source assertions at `test/dsh-adapter.test.mjs:149-191`:

- main and title calls are both found;
- main and title Thread IDs differ;
- the main DSH Session remains bound to the main Thread;
- the selected auxiliary config is explicitly the config with `ephemeral === true`;
- auxiliary dynamic tools are empty;
- sandbox is `read-only` and approval policy is `never`;
- Thread source is `relay.codex.auxiliary` and developer instructions forbid tools;
- the title Thread alone is released;
- business and title text-delta values are independently asserted;
- no direct agent append bypasses native stream projection.

Result: **pass**.

