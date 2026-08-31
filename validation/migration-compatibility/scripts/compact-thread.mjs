import { CodexAppServerClient } from "../../../app-server-client.mjs";

const threadId = process.argv[2];
if (!threadId) {
  console.error("usage: node compact-thread.mjs <thread-id>");
  process.exitCode = 2;
} else {
  const client = new CodexAppServerClient({ requestTimeoutMs: 300_000 });
  const notificationCounts = new Map();
  const serverRequestMethods = [];
  const statusTypes = [];
  const itemTypes = [];
  let compactInitiated = false;
  let sawActive = false;
  let finishCompaction;
  const compactionFinished = new Promise((resolve) => {
    finishCompaction = resolve;
  });

  client.on("notification", ({ method, params }) => {
    notificationCounts.set(method, (notificationCounts.get(method) ?? 0) + 1);
    if (method === "thread/status/changed" && params?.threadId === threadId) {
      const statusType = params?.status?.type ?? "missing";
      statusTypes.push(statusType);
      if (compactInitiated && statusType === "active") sawActive = true;
      if (compactInitiated && sawActive && statusType === "idle") {
        finishCompaction("active-to-idle");
      }
    }
    if ((method === "item/started" || method === "item/completed") && params?.item?.type) {
      itemTypes.push(`${method}:${params.item.type}`);
      if (method === "item/completed" && params.item.type === "contextCompaction") {
        finishCompaction("contextCompaction-item");
      }
    }
    if (method === "thread/compacted" && params?.threadId === threadId) {
      finishCompaction("thread-compacted");
    }
  });
  client.on("serverRequest", ({ id, method }) => {
    serverRequestMethods.push(method);
    client.respondError(id, -32601, "No interactive request expected during compaction validation");
  });

  try {
    await client.start();
    const resumed = await client.request("thread/resume", {
      threadId,
      excludeTurns: true,
    });
    const resumedThreadId = resumed?.thread?.id ?? resumed?.threadId ?? null;
    if (resumedThreadId !== threadId) {
      throw new Error(`resumed unexpected thread: ${resumedThreadId ?? "missing"}`);
    }

    const startedAt = Date.now();
    compactInitiated = true;
    const response = await client.request(
      "thread/compact/start",
      { threadId },
      { timeoutMs: 300_000 },
    );
    let completionTimer;
    const completionSignal = await Promise.race([
      compactionFinished,
      new Promise((_, reject) => {
        completionTimer = setTimeout(
          () => reject(new Error("compaction did not reach a terminal signal within 300000ms")),
          300_000,
        );
      }),
    ]).finally(() => clearTimeout(completionTimer));

    console.log(JSON.stringify({
      threadId,
      resumedThreadId,
      compactResponseKeys: Object.keys(response ?? {}),
      durationMs: Date.now() - startedAt,
      completionSignal,
      statusTypes,
      itemTypes,
      notificationCounts: Object.fromEntries([...notificationCounts].sort()),
      serverRequestMethods,
    }, null, 2));
  } finally {
    await client.close();
  }
}
