const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('page.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const original = content;
      
      // Remove import statement
      content = content.replace(/import\s+FreeDemoSection\s+from\s+['"]@\/components\/FreeDemoSection['"];?\s*/g, '');
      
      // Remove usage
      content = content.replace(/\s*<FreeDemoSection\s*\/>\s*/g, '\n');
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, '..', 'src', 'app'));
