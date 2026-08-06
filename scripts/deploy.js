import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Preparing Bioreco GitHub Pages deployment...\n');

// 1. Clean up stale gh-pages cache if present (fixes "branch named 'gh-pages' already exists")
const cacheDir = path.resolve('node_modules/.cache/gh-pages');
if (fs.existsSync(cacheDir)) {
  console.log('🧹 Cleaning up local gh-pages cache...');
  fs.rmSync(cacheDir, { recursive: true, force: true });
}

// 2. Build the static site
console.log('📦 Building static site (dist)...');
execSync('npm run build', { stdio: 'inherit' });

// 3. Publish to GitHub Pages using gh-pages CLI
console.log('\n📤 Publishing to gh-pages branch...');
try {
  execSync('npx gh-pages -d dist --add', { stdio: 'inherit' });
  console.log('\n✅ Successfully published to GitHub Pages (gh-pages branch)!');
  console.log('Check your repository Settings -> Pages on GitHub to verify.\n');
} catch (err) {
  console.log('\n⚠️ Deployment failed via gh-pages CLI.');
  console.log('\n💡 Recommended Solution: Use GitHub Actions!');
  console.log('Simply push your code to your repository:');
  console.log('   git add .');
  console.log('   git commit -m "deploy bioreco site"');
  console.log('   git push origin main');
  console.log('\nGitHub Actions will build and deploy automatically without CLI issues.\n');
}
