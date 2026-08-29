import { readFile, realpath } from "node:fs/promises";
import { basename, resolve, sep } from "node:path";

export async function importCodexImage(path, roots, attachments) {
  const target = await allowedRealPath(path, roots);
  const data = await readFile(target);
  const mediaType = detectImageMediaType(data);
  if (!mediaType) throw new Error("unsupported or malformed Codex image data");
  return attachments.saveImage({ data, mediaType, name: basename(target) });
}

export async function importCodexGeneratedImage(item, roots, attachments) {
  if (item.savedPath) return importCodexImage(item.savedPath, roots, attachments);
  const result = String(item.result ?? "");
  const matched = result.match(/^data:(image\/(?:png|jpeg|webp|gif));base64,(.+)$/s);
  const encoded = matched?.[2] ?? result;
  if (!encoded || !/^[A-Za-z0-9+/\r\n]+={0,2}$/.test(encoded)) {
    throw new Error("Codex image result is not valid base64");
  }
  const data = Buffer.from(encoded, "base64");
  if (data.length === 0 || data.length > 25 * 1024 * 1024) {
    throw new Error("Codex image result has an invalid size");
  }
  const mediaType = detectImageMediaType(data);
  if (!mediaType) throw new Error("unsupported or malformed Codex image data");
  return attachments.saveImage({ data, mediaType, name: `codex-${item.id}.${extensionFor(mediaType)}` });
}

export function detectImageMediaType(data) {
  if (!data || data.length < 3) return null;
  if (hasBytes(data, 0, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])) {
    return "image/png";
  }
  if (data[0] === 0xff && data[1] === 0xd8 && data[2] === 0xff) return "image/jpeg";
  if (hasBytes(data, 0, [0x47, 0x49, 0x46, 0x38, 0x37, 0x61])
    || hasBytes(data, 0, [0x47, 0x49, 0x46, 0x38, 0x39, 0x61])) {
    return "image/gif";
  }
  if (hasBytes(data, 0, [0x52, 0x49, 0x46, 0x46])
    && hasBytes(data, 8, [0x57, 0x45, 0x42, 0x50])) {
    return "image/webp";
  }
  return null;
}

function hasBytes(data, offset, expected) {
  return data.length >= offset + expected.length
    && expected.every((byte, index) => data[offset + index] === byte);
}

export async function allowedRealPath(path, roots) {
  const target = await realpath(resolve(path));
  const allowedRoots = await Promise.all(roots.map(root => realpath(resolve(root)).catch(() => null)));
  if (!allowedRoots.some(root => root && (target === root || target.startsWith(`${root}${sep}`)))) {
    throw new Error("image path is outside the Codex workspace");
  }
  return target;
}

function extensionFor(mediaType) {
  if (mediaType === "image/jpeg") return "jpg";
  return mediaType.slice("image/".length);
}
