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
      
      // Remove pb-X from main tags
      content = content.replace(/(<main[^>]*className="[^"]*)\bpb-\d+\b([^"]*")/g, '$1$2');
      
      // Remove my-10 or mb-X from the section directly preceding FreeDemoSection
      // This is trickier with regex, let's just replace `my-10` with `pt-10` in jwellery-retouching/page.tsx
      content = content.replace(/className="([^"]*)my-10([^"]*)"([^>]*)>(\s*)<div([^>]*)>\s*(?:<h3|<motion)/g, 'className="$1pt-10$2"$3>$4<div$5>\n          <h3'); 
      content = content.replace(/className="w-full bg-stone-900 text-white py-24 my-10"/g, 'className="w-full bg-stone-900 text-white pt-24 pb-16"');
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated padding in ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, '..', 'src', 'app'));
