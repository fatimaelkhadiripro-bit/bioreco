import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Preparing Bioreco GitHub Pages deployment...\n');

// 1. Check if git is initialized
if (!fs.existsSync('.git')) {
  console.log('⚠️ Git is not initialized in this repository.');
  console.log('Run the following commands first:');
  console.log('   git init');
  console.log('   git add .');
  console.log('   git commit -m "initial commit"');
  console.log('   git remote add origin https://github.com/YOUR_USERNAME/bioreco.git');
  console.log('   git push -u origin main\n');
  process.exit(1);
}

// 2. Check if git remote origin exists
try {
  const remote = execSync('git remote get-url origin', { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }).trim();
  console.log(`📡 Linked remote: ${remote}`);
} catch (e) {
  console.log('⚠️ No git remote "origin" found.');
  console.log('Please add your GitHub remote URL:');
  console.log('   git remote add origin https://github.com/YOUR_USERNAME/bioreco.git\n');
  process.exit(1);
}

// 3. Build the site
console.log('📦 Building static site (dist)...');
execSync('npm run build', { stdio: 'inherit' });

// 4. Deploy using gh-pages with --add flag to avoid Windows ENAMETOOLONG limit
console.log('\n📤 Publishing to gh-pages branch...');
try {
  execSync('npx gh-pages -d dist --add', { stdio: 'inherit' });
  console.log('\n✅ Successfully published to GitHub Pages (gh-pages branch)!');
} catch (err) {
  console.log('\n💡 Recommended Alternative: Use GitHub Actions!');
  console.log('Push your code to main branch and GitHub Actions (.github/workflows/deploy.yml) will deploy automatically.');
}
