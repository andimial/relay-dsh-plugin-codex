import { appendFileSync } from "node:fs";
import { createInterface } from "node:readline";

const logPath = process.env.RELAY_CFG001_MCP_LOG;

function log(event) {
  if (logPath) appendFileSync(logPath, `${JSON.stringify({ time: Date.now(), ...event })}\n`);
}

function send(message) {
  process.stdout.write(`${JSON.stringify(message)}\n`);
}

log({ event: "start", pid: process.pid, cwd: process.cwd() });
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
        serverInfo: { name: "relay-cfg001-user-config", version: "1.0.0" },
      },
    });
    return;
  }
  if (message.method === "notifications/initialized") return;
  if (message.method === "ping") {
    send({ jsonrpc: "2.0", id: message.id, result: {} });
    return;
  }
  if (message.method === "tools/list") {
    send({
      jsonrpc: "2.0",
      id: message.id,
      result: {
        tools: [{
          name: "user_config_echo_1001",
          description: "Return the deterministic CDX-CFG-001 user-config marker.",
          inputSchema: {
            type: "object",
            properties: { token: { type: "string" } },
            required: ["token"],
            additionalProperties: false,
          },
          annotations: { readOnlyHint: true, destructiveHint: false },
        }],
      },
    });
    return;
  }
  if (message.method === "tools/call") {
    const name = message.params?.name;
    const token = message.params?.arguments?.token;
    log({ event: "tool_call", name, token });
    const valid = name === "user_config_echo_1001" && token === "USER_CONFIG_INPUT_1001";
    send({
      jsonrpc: "2.0",
      id: message.id,
      result: valid
        ? {
            content: [{ type: "text", text: "USER_CONFIG_OK_1001_RVKM" }],
            structuredContent: { source: "user-config", token },
          }
        : { isError: true, content: [{ type: "text", text: "USER_CONFIG_INVALID_1001" }] },
    });
    return;
  }
  if (message.id !== undefined) {
    send({ jsonrpc: "2.0", id: message.id, error: { code: -32601, message: "Method not found" } });
  }
});

input.on("close", () => log({ event: "close" }));
