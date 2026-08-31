import { appendFileSync } from "node:fs";

const chunks = [];
for await (const chunk of process.stdin) chunks.push(chunk);

const raw = Buffer.concat(chunks).toString("utf8");
const event = JSON.parse(raw);
const record = {
  time: Date.now(),
  pid: process.pid,
  source: import.meta.url,
  pluginRoot: process.env.PLUGIN_ROOT ?? null,
  pluginData: process.env.PLUGIN_DATA ?? null,
  cwd: process.cwd(),
  event,
};
const logPath =
  process.env.RELAY_PLUGIN_HOOK_LOG ??
  "/private/tmp/relay-cdx-ext014-20260829-plugin-hook-log.jsonl";
appendFileSync(
  logPath,
  `${JSON.stringify(record)}\n`,
);

const targetsMarker = JSON.stringify(event.tool_input ?? {}).includes("HOOK_BLOCK_1414");
if (event.hook_event_name === "PreToolUse" && event.tool_name === "Bash" && targetsMarker) {
  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        permissionDecision: "deny",
        permissionDecisionReason: "PLUGIN_HOOK_BLOCKED_1414_VQMS",
      },
    }),
  );
}
