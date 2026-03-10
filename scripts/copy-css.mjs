import { mkdir, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const src = path.join(projectRoot, 'src', 'theme.css');
const distDir = path.join(projectRoot, 'dist');
const dest = path.join(distDir, 'theme.css');

await mkdir(distDir, { recursive: true });
await copyFile(src, dest);
