const sharp = require('sharp');

const input = '/Users/boboyang/.codex/dsh-input-images/3d72ef5b29409cfe1120c22e7dab2eac9868577a466dd5b3310b71f18d03c71b.png';
const output = 'clipboard-pale-yellow.png';
const yellow = [255, 244, 184];

(async () => {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const seen = new Uint8Array(width * height);
  const queue = new Int32Array(width * height);
  let head = 0, tail = 0;

  const enqueue = (x, y) => {
    const p = y * width + x;
    if (seen[p]) return;
    const i = p * channels;
    if (data[i] !== 255 || data[i + 1] !== 255 || data[i + 2] !== 255 || data[i + 3] !== 255) return;
    seen[p] = 1;
    queue[tail++] = p;
  };

  for (let x = 0; x < width; x++) { enqueue(x, 0); enqueue(x, height - 1); }
  for (let y = 0; y < height; y++) { enqueue(0, y); enqueue(width - 1, y); }

  while (head < tail) {
    const p = queue[head++];
    const x = p % width, y = (p / width) | 0;
    if (x) enqueue(x - 1, y);
    if (x + 1 < width) enqueue(x + 1, y);
    if (y) enqueue(x, y - 1);
    if (y + 1 < height) enqueue(x, y + 1);
  }

  for (let p = 0; p < seen.length; p++) {
    if (!seen[p]) continue;
    const i = p * channels;
    data[i] = yellow[0]; data[i + 1] = yellow[1]; data[i + 2] = yellow[2];
  }

  await sharp(data, { raw: info }).png().toFile(output);
  console.log(JSON.stringify({ output, width, height, changedPixels: tail }));
})();
