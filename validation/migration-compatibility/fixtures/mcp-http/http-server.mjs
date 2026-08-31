import { appendFileSync } from "node:fs";
import { createServer } from "node:http";

const host = process.env.RELAY_MCP_HTTP_HOST ?? "127.0.0.1";
const port = Number(process.env.RELAY_MCP_HTTP_PORT ?? "4393");
const logPath = process.env.RELAY_MCP_HTTP_LOG;

function log(event) {
  if (logPath) {
    appendFileSync(logPath, `${JSON.stringify({ time: Date.now(), pid: process.pid, ...event })}\n`);
  }
}

function json(response, status, body) {
  const payload = JSON.stringify(body);
  response.writeHead(status, {
    "content-type": "application/json",
    "content-length": Buffer.byteLength(payload),
  });
  response.end(payload);
}

function handleMessage(message) {
  log({ event: "message", method: message.method, id: message.id ?? null });
  if (message.method === "initialize") {
    return {
      jsonrpc: "2.0",
      id: message.id,
      result: {
        protocolVersion: message.params?.protocolVersion ?? "2025-06-18",
        capabilities: { tools: {} },
        serverInfo: { name: "relay-http-fixture", version: "1.0.0" },
      },
    };
  }
  if (message.method === "notifications/initialized") return null;
  if (message.method === "ping") return { jsonrpc: "2.0", id: message.id, result: {} };
  if (message.method === "tools/list") {
    return {
      jsonrpc: "2.0",
      id: message.id,
      result: {
        tools: [
          {
            name: "http_echo_8842",
            description: "Return the deterministic Streamable HTTP migration oracle.",
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
    };
  }
  if (message.method === "tools/call") {
    const name = message.params?.name;
    const token = message.params?.arguments?.token;
    log({ event: "tool_call", name, token });
    const valid = name === "http_echo_8842" && token === "HTTP_INPUT_8842_CWNS";
    return {
      jsonrpc: "2.0",
      id: message.id,
      result: valid
        ? {
            content: [{ type: "text", text: "HTTP_MCP_OK_8842_CWNS" }],
            structuredContent: { transport: "streamable_http", token },
          }
        : {
            isError: true,
            content: [{ type: "text", text: "HTTP_MCP_INVALID_INPUT" }],
          },
    };
  }
  return message.id === undefined
    ? null
    : {
        jsonrpc: "2.0",
        id: message.id,
        error: { code: -32601, message: `Method not found: ${message.method}` },
      };
}

const server = createServer((request, response) => {
  log({
    event: "http",
    method: request.method,
    url: request.url,
    accept: request.headers.accept ?? null,
    contentType: request.headers["content-type"] ?? null,
  });

  if (request.url !== "/mcp") {
    json(response, 404, { error: "not found" });
    return;
  }
  if (request.method === "GET") {
    response.writeHead(405, { allow: "POST, DELETE" });
    response.end();
    return;
  }
  if (request.method === "DELETE") {
    response.writeHead(204);
    response.end();
    return;
  }
  if (request.method !== "POST") {
    response.writeHead(405, { allow: "POST, DELETE" });
    response.end();
    return;
  }

  const chunks = [];
  request.on("data", (chunk) => chunks.push(chunk));
  request.on("end", () => {
    let body;
    try {
      body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    } catch {
      json(response, 400, { error: "invalid json" });
      return;
    }
    const result = Array.isArray(body)
      ? body.map(handleMessage).filter(Boolean)
      : handleMessage(body);
    if (result === null) {
      response.writeHead(202);
      response.end();
      return;
    }
    json(response, 200, result);
  });
});

server.listen(port, host, () => log({ event: "listen", host, port }));

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => server.close(() => process.exit(0)));
}
