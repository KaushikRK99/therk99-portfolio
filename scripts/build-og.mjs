import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const avatarPath = path.join(root, 'public', 'avatar.png');
const svgTemplatePath = path.join(__dirname, 'og-template.svg');
const svgOutPath = path.join(root, 'public', 'og-image.svg');
const pngOutPath = path.join(root, 'public', 'og-image.png');

const avatar = fs.readFileSync(avatarPath);
const avatarDataUri = `data:image/png;base64,${avatar.toString('base64')}`;

let svg = fs.readFileSync(svgTemplatePath, 'utf8');
svg = svg.replace('AVATAR_DATA_URI', avatarDataUri);

fs.writeFileSync(svgOutPath, svg, 'utf8');
console.log(`✓ wrote ${path.relative(root, svgOutPath)} (${(svg.length / 1024).toFixed(1)} KB)`);

await sharp(Buffer.from(svg))
  .resize(1200, 630, { fit: 'cover' })
  .png({ compressionLevel: 9, quality: 92 })
  .toFile(pngOutPath);

const stats = fs.statSync(pngOutPath);
console.log(`✓ wrote ${path.relative(root, pngOutPath)} (${(stats.size / 1024).toFixed(1)} KB)`);
