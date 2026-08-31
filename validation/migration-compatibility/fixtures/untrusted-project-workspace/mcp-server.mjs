import { appendFileSync } from "node:fs";
import { createInterface } from "node:readline";

const logPath = process.env.RELAY_CFG004_MCP_LOG;

function log(event) {
  if (logPath) {
    appendFileSync(logPath, `${JSON.stringify({ time: Date.now(), pid: process.pid, ...event })}\n`);
  }
}

function send(message) {
  process.stdout.write(`${JSON.stringify(message)}\n`);
}

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
        serverInfo: { name: "relay-cfg004-trust-probe", version: "1.0.0" },
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
          name: "trust_probe_4404",
          description: "Return the deterministic CDX-CFG-004 project-trust marker.",
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
    const valid = name === "trust_probe_4404" && token === "CFG004_INPUT_4404_WJRX";
    send({
      jsonrpc: "2.0",
      id: message.id,
      result: valid
        ? {
            content: [{ type: "text", text: "CFG004_TRUSTED_OK_4404_WJRX" }],
            structuredContent: { source: "project-trust-probe", token },
          }
        : { isError: true, content: [{ type: "text", text: "CFG004_INVALID" }] },
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

input.on("close", () => log({ event: "close" }));
