const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const srcDir = path.join(__dirname, '..', 'src');

// Safely rename one specific file as a proof of concept
const oldRelPath = 'images/services/11_copy.jpg';
const newRelPath = 'images/services/ai-retouching-service.jpg';

const oldAbsPath = path.join(publicDir, ...oldRelPath.split('/'));
const newAbsPath = path.join(publicDir, ...newRelPath.split('/'));

if (fs.existsSync(oldAbsPath)) {
  fs.renameSync(oldAbsPath, newAbsPath);
  console.log(`Renamed ${oldRelPath} to ${newRelPath}`);
  
  // Now update src/
  function updateSrc(dir) {
    const files = fs.readdirSync(dir);
    for (const f of files) {
      const fp = path.join(dir, f);
      if (fs.statSync(fp).isDirectory()) {
        updateSrc(fp);
      } else if (fp.match(/\.(ts|tsx|js|jsx)$/)) {
        let content = fs.readFileSync(fp, 'utf8');
        const oldStr = '/' + oldRelPath;
        const newStr = '/' + newRelPath;
        if (content.includes(oldStr)) {
          content = content.split(oldStr).join(newStr);
          fs.writeFileSync(fp, content);
          console.log(`Updated references in ${fp}`);
        }
      }
    }
  }
  
  updateSrc(srcDir);
} else {
  console.log('File not found:', oldAbsPath);
}
