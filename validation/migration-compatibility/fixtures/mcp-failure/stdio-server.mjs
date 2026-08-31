import { appendFileSync } from "node:fs";
import { createInterface } from "node:readline";

const logPath = process.env.RELAY_MCP_FAILURE_LOG;

function log(event) {
  if (logPath) {
    appendFileSync(logPath, `${JSON.stringify({ time: Date.now(), pid: process.pid, ...event })}\n`);
  }
}

function send(message) {
  process.stdout.write(`${JSON.stringify(message)}\n`);
}

const tools = [
  {
    name: "fail_1058",
    description: "Return one deterministic MCP isError result.",
    inputSchema: {
      type: "object",
      properties: { token: { type: "string" } },
      required: ["token"],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true, destructiveHint: false },
  },
  {
    name: "timeout_1058",
    description: "Delay five seconds to exceed the configured two-second tool timeout.",
    inputSchema: {
      type: "object",
      properties: { token: { type: "string" } },
      required: ["token"],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true, destructiveHint: false },
  },
];

log({ event: "start", cwd: process.cwd() });

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
        serverInfo: { name: "relay-mcp-failure-fixture", version: "1.0.0" },
      },
    });
    return;
  }
  if (message.method === "notifications/initialized") return;
  if (message.method === "tools/list") {
    send({ jsonrpc: "2.0", id: message.id, result: { tools } });
    return;
  }
  if (message.method === "tools/call") {
    const name = message.params?.name;
    const token = message.params?.arguments?.token;
    log({ event: "tool_call", name, token });

    if (name === "fail_1058" && token === "FAIL_REQ_1058") {
      send({
        jsonrpc: "2.0",
        id: message.id,
        result: {
          isError: true,
          content: [{ type: "text", text: "MCP_FAIL_1058_NQDX" }],
        },
      });
      return;
    }
    if (name === "timeout_1058" && token === "TIMEOUT_REQ_1058") {
      setTimeout(() => {
        log({ event: "late_response", name, token, id: message.id });
        send({
          jsonrpc: "2.0",
          id: message.id,
          result: { content: [{ type: "text", text: "MCP_LATE_1058_SHOULD_NOT_ARRIVE" }] },
        });
      }, 5000);
      return;
    }
    send({
      jsonrpc: "2.0",
      id: message.id,
      result: {
        isError: true,
        content: [{ type: "text", text: "MCP_FAILURE_INVALID_INPUT" }],
      },
    });
    return;
  }
  if (message.id !== undefined) {
    send({
      jsonrpc: "2.0",
      id: message.id,
      error: { code: -32601, message: `Method not found: ${message.method}` },
    });
  }
});
