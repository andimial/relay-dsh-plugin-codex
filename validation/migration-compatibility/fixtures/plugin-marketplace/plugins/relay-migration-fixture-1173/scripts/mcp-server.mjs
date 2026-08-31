import { appendFileSync } from "node:fs";
import { createInterface } from "node:readline";

const logPath = process.env.RELAY_PLUGIN_MCP_LOG;

function log(event) {
  if (logPath) {
    appendFileSync(
      logPath,
      `${JSON.stringify({ time: Date.now(), pid: process.pid, cwd: process.cwd(), source: import.meta.url, ...event })}\n`,
    );
  }
}

function send(message) {
  process.stdout.write(`${JSON.stringify(message)}\n`);
}

const tool = {
  name: "plugin_echo_1313",
  description: "Return the deterministic Relay plugin MCP validation marker.",
  inputSchema: {
    type: "object",
    properties: { token: { type: "string" } },
    required: ["token"],
    additionalProperties: false,
  },
  annotations: { readOnlyHint: true, destructiveHint: false },
};

log({ event: "start" });

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
        serverInfo: { name: "relay-plugin-mcp-fixture", version: "1.0.0" },
      },
    });
    return;
  }
  if (message.method === "notifications/initialized") return;
  if (message.method === "tools/list") {
    send({ jsonrpc: "2.0", id: message.id, result: { tools: [tool] } });
    return;
  }
  if (message.method === "tools/call") {
    const name = message.params?.name;
    const token = message.params?.arguments?.token;
    log({ event: "tool_call", name, token });
    if (name === "plugin_echo_1313" && token === "PLUGIN_MCP_REQ_1313") {
      send({
        jsonrpc: "2.0",
        id: message.id,
        result: {
          content: [{ type: "text", text: "PLUGIN_MCP_OK_1313_ZKPW" }],
          structuredContent: {
            marker: "PLUGIN_MCP_OK_1313_ZKPW",
            token,
            source: "relay-migration-fixture-1173",
          },
        },
      });
      return;
    }
    send({
      jsonrpc: "2.0",
      id: message.id,
      result: {
        isError: true,
        content: [{ type: "text", text: "PLUGIN_MCP_INVALID_INPUT_1313" }],
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
