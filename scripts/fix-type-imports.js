#!/usr/bin/env node

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname, relative, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distPath = resolve(__dirname, '../dist');

function fixImportPaths(filePath) {
  const content = readFileSync(filePath, 'utf8');
  
  // Fix import paths that point to src/ instead of dist/src/
  const fixedContent = content.replace(
    /from\s+['"]([^'"]*\/src\/[^'"]+)['"]/g,
    (match, importPath) => {
      // Calculate the relative path from current file to the correct location in dist/src/
      const currentFileDir = dirname(filePath);
      const targetPath = resolve(distPath, 'src', importPath.split('/src/').pop());
      const relativePath = relative(currentFileDir, targetPath).replace(/\\/g, '/');
      
      // Ensure the path starts with './' or '../'
      const correctedPath = relativePath.startsWith('.') ? relativePath : './' + relativePath;
      
      return `from '${correctedPath}'`;
    }
  );

  if (fixedContent !== content) {
    writeFileSync(filePath, fixedContent, 'utf8');
    console.log(`Fixed import paths in: ${relative(distPath, filePath)}`);
  }
}

function walkDirectory(dirPath) {
  const entries = readdirSync(dirPath);
  
  for (const entry of entries) {
    // nosemgrep: javascript.lang.security.audit.path-traversal.path-join-resolve-traversal.path-join-resolve-traversal
    const fullPath = join(dirPath, entry);
    const stat = statSync(fullPath);
    
    if (stat.isDirectory()) {
      walkDirectory(fullPath);
    } else if (entry.endsWith('.d.ts')) {
      fixImportPaths(fullPath);
    }
  }
}

console.log('Fixing TypeScript declaration import paths...');
walkDirectory(join(distPath, 'src'));
console.log('Done!');
