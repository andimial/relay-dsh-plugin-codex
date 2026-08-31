import { appendFileSync } from "node:fs";
import { createInterface } from "node:readline";

const logPath = process.env.RELAY_CFG006_LOG;
const referencedValue = process.env.RELAY_CFG006_ENV_REF;

function log(event) {
  if (logPath) {
    appendFileSync(logPath, `${JSON.stringify({ time: Date.now(), pid: process.pid, ...event })}\n`);
  }
}

function send(message) {
  process.stdout.write(`${JSON.stringify(message)}\n`);
}

log({ event: "start", cwd: process.cwd(), referencedValue });
const input = createInterface({ input: process.stdin, crlfDelay: Infinity });

input.on("line", (line) => {
  if (!line.trim()) return;
  const message = JSON.parse(line);
  log({ event: "request", method: message.method, id: message.id ?? null });
  if (message.method === "initialize") {
    send({
      jsonrpc: "2.0",
      id: message.id,
      result: {
        protocolVersion: message.params?.protocolVersion ?? "2024-11-05",
        capabilities: { tools: {} },
        serverInfo: { name: "relay-cfg006-env-reference", version: "1.0.0" },
      },
    });
    return;
  }
  if (message.method === "notifications/initialized") return;
  if (message.method === "tools/list") {
    send({
      jsonrpc: "2.0",
      id: message.id,
      result: {
        tools: [{
          name: "env_reference_echo_6606",
          description: "Return the whitelisted CDX-CFG-006 environment reference.",
          inputSchema: { type: "object", properties: {}, additionalProperties: false },
          annotations: { readOnlyHint: true, destructiveHint: false },
        }],
      },
    });
    return;
  }
  if (message.method === "tools/call") {
    const name = message.params?.name;
    log({ event: "tool_call", name, referencedValue });
    const valid = name === "env_reference_echo_6606" &&
      referencedValue === "CFG006_ENV_VALUE_6606_KRPT";
    send({
      jsonrpc: "2.0",
      id: message.id,
      result: valid
        ? {
            content: [{ type: "text", text: referencedValue }],
            structuredContent: { source: "env_vars", value: referencedValue },
          }
        : { isError: true, content: [{ type: "text", text: "CFG006_ENV_MISSING" }] },
    });
    return;
  }
  if (message.id !== undefined) {
    send({ jsonrpc: "2.0", id: message.id, error: { code: -32601, message: "Method not found" } });
  }
});

input.on("close", () => log({ event: "close" }));
