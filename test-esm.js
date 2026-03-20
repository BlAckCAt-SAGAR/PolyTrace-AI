import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('ESM is working!');
console.log('__filename:', __filename);
console.log('__dirname:', __dirname);
