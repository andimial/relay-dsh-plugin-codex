import { appendFileSync } from "node:fs";
import { createInterface } from "node:readline";

const logPath = process.env.RELAY_MCP_GLOBAL_LOG;

function log(event) {
  if (logPath) {
    appendFileSync(logPath, `${JSON.stringify({ time: Date.now(), ...event })}\n`);
  }
}

function send(message) {
  process.stdout.write(`${JSON.stringify(message)}\n`);
}

log({ event: "start", pid: process.pid, cwd: process.cwd() });

const input = createInterface({ input: process.stdin, crlfDelay: Infinity });
input.on("line", (line) => {
  if (!line.trim()) return;

  let message;
  try {
    message = JSON.parse(line);
  } catch (error) {
    log({ event: "parse_error", message: String(error) });
    return;
  }

  log({ event: "request", method: message.method, id: message.id ?? null });

  if (message.method === "initialize") {
    send({
      jsonrpc: "2.0",
      id: message.id,
      result: {
        protocolVersion: message.params?.protocolVersion ?? "2024-11-05",
        capabilities: { tools: {} },
        serverInfo: { name: "relay-global-stdio-fixture", version: "1.0.0" },
        instructions: "Use global_echo_8426 only when the user supplies its exact token.",
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
        tools: [
          {
            name: "global_echo_8426",
            description: "Return the deterministic global STDIO migration oracle.",
            inputSchema: {
              type: "object",
              properties: { token: { type: "string" } },
              required: ["token"],
              additionalProperties: false,
            },
            annotations: { readOnlyHint: true, destructiveHint: false },
          },
        ],
      },
    });
    return;
  }

  if (message.method === "tools/call") {
    const name = message.params?.name;
    const token = message.params?.arguments?.token;
    log({ event: "tool_call", name, token });
    if (name !== "global_echo_8426" || token !== "STDIO_INPUT_8426_XRQM") {
      send({
        jsonrpc: "2.0",
        id: message.id,
        result: {
          isError: true,
          content: [{ type: "text", text: "GLOBAL_STDIO_INVALID_INPUT" }],
        },
      });
      return;
    }
    send({
      jsonrpc: "2.0",
      id: message.id,
      result: {
        content: [{ type: "text", text: "STDIO_GLOBAL_OK_8426_XRQM" }],
        structuredContent: {
          transport: "stdio",
          scope: "global",
          token,
        },
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

input.on("close", () => log({ event: "close" }));
