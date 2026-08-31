import { defineTool } from "@deepseek-ai/dsh-tools";

export const name = "relay-dsh-validation-late-tool-1616";
export const inject = ["tools"];

export function apply(ctx) {
  ctx.tools.register(defineTool({
    name: "late_probe_1616",
    description: "Return the deterministic EXT-016 marker for the exact validation token.",
    parameters: {
      token: { type: "string", required: true },
    },
    output: {
      schema: { type: "string" },
      render: (_args, value) => [{ type: "text", text: value }],
    },
    execute(args) {
      if (args.token !== "LATE_TOOL_REQUEST_1616") {
        throw new Error("unexpected EXT-016 token");
      }
      return "LATE_TOOL_OK_1616_JXNP";
    },
  }));
}
