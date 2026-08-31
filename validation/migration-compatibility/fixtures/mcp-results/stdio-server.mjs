import { createHash } from "node:crypto";
import { appendFileSync, readFileSync } from "node:fs";
import { createInterface } from "node:readline";

const logPath = process.env.RELAY_MCP_RESULTS_LOG;
const imageBytes = readFileSync(new URL("../image-understanding/single-shapes.png", import.meta.url));
const imageSha256 = createHash("sha256").update(imageBytes).digest("hex");

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
    name: "result_text_9914",
    description: "Return the deterministic MCP text-result oracle.",
    inputSchema: {
      type: "object",
      properties: { token: { type: "string" } },
      required: ["token"],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true, destructiveHint: false },
  },
  {
    name: "result_json_9914",
    description: "Return deterministic text and structured JSON MCP result oracles.",
    inputSchema: {
      type: "object",
      properties: { token: { type: "string" } },
      required: ["token"],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true, destructiveHint: false },
  },
  {
    name: "result_image_9914",
    description: "Return a deterministic PNG MCP image-content oracle.",
    inputSchema: {
      type: "object",
      properties: { token: { type: "string" } },
      required: ["token"],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true, destructiveHint: false },
  },
];

log({ event: "start", cwd: process.cwd(), imageSha256 });

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
        serverInfo: { name: "relay-mcp-results-fixture", version: "1.0.0" },
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

    if (name === "result_text_9914" && token === "TEXT_REQ_9914") {
      send({
        jsonrpc: "2.0",
        id: message.id,
        result: { content: [{ type: "text", text: "MCP_TEXT_9914_JBTV" }] },
      });
      return;
    }
    if (name === "result_json_9914" && token === "JSON_REQ_9914") {
      send({
        jsonrpc: "2.0",
        id: message.id,
        result: {
          content: [{ type: "text", text: "MCP_JSON_CONTENT_9914" }],
          structuredContent: {
            marker: "MCP_JSON_9914_RKDH",
            nested: { code: 4173, ok: true },
            items: ["alpha", "beta"],
          },
        },
      });
      return;
    }
    if (name === "result_image_9914" && token === "IMAGE_REQ_9914") {
      send({
        jsonrpc: "2.0",
        id: message.id,
        result: {
          content: [
            { type: "image", data: imageBytes.toString("base64"), mimeType: "image/png" },
            { type: "text", text: "MCP_IMAGE_META_9914_800x500" },
          ],
          structuredContent: { imageSha256, width: 800, height: 500 },
        },
      });
      return;
    }

    send({
      jsonrpc: "2.0",
      id: message.id,
      result: {
        isError: true,
        content: [{ type: "text", text: "MCP_RESULTS_INVALID_INPUT" }],
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
