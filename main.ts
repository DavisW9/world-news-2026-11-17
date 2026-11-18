import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

// Copy the parent-supplied, normalized v2 newspaper; retain v1 only as an archive.
const source = fileURLToPath(new URL('./assets/news-2026-11-17-v2.jpg', import.meta.url));
const bytes = readFileSync(source);
if (bytes.length > 1048576 || bytes[0] !== 0xff || bytes[1] !== 0xd8 ||
    bytes[bytes.length - 2] !== 0xff || bytes[bytes.length - 1] !== 0xd9) {
  throw new Error('Expected a complete JPEG no larger than 1 MiB');
}

let dimensionsFound = false;
for (let offset = 2; offset + 4 < bytes.length;) {
  if (bytes[offset] !== 0xff) throw new Error('Invalid JPEG segment');
  const marker = bytes[offset + 1];
  if (marker === 0xda) break;
  const length = bytes.readUInt16BE(offset + 2);
  if (length < 2 || offset + 2 + length > bytes.length) throw new Error('Truncated JPEG');
  if ([0xc0, 0xc1, 0xc2].includes(marker)) {
    if (length < 8) throw new Error('Truncated JPEG frame header');
    const height = bytes.readUInt16BE(offset + 5);
    const width = bytes.readUInt16BE(offset + 7);
    if (!width || !height || width > 1024 || height > 1024) {
      throw new Error('Image dimensions must be within 1024 by 1024');
    }
    dimensionsFound = true;
  }
  offset += 2 + length;
}
if (!dimensionsFound) throw new Error('JPEG has no supported frame header');

const output = resolve(process.env.MAKEFUN_OUTPUT_DIR || '/output');
mkdirSync(output, { recursive: true });
writeFileSync(resolve(output, 'entry.png'), bytes);
