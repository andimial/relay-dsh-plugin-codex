import { readFileSync } from "node:fs";

const sourcePath = process.argv[2];
if (!sourcePath) {
  console.error("missing reference path");
  process.exit(64);
}

const value = readFileSync(sourcePath, "utf8").trim();
if (value !== "REFERENCE_PART_2648_KLHW") {
  console.error("unexpected reference content");
  process.exit(65);
}

console.log(`SCRIPT_COMBINED_${value}_RS73`);
