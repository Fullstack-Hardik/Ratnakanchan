const fs = require('fs');
const path = require('path');  

const publicDir = path.join(__dirname, '..', 'public');
const srcDir = path.join(__dirname, '..', 'src');

function getAllFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const files = getAllFiles(publicDir);
const renameMap = {};

function cleanName(fileName, folderName) {
  let name = fileName;
  
  // Remove double extensions
  if (name.endsWith('.jpg.jpeg')) name = name.replace('.jpg.jpeg', '.jpeg');
  
  // Convert to lowercase
  name = name.toLowerCase();
  
  // Replace spaces and underscores with hyphens
  name = name.replace(/[\s_]+/g, '-');
  
  // Remove resolution suffixes like -1024x1024
  name = name.replace(/-\d+x\d+/g, '');
  
  // Remove "-copy" or "-scaled"
  name = name.replace(/-copy/g, '');
  name = name.replace(/-scaled/g, '');
  
  // Specific renames for services
  if (name === '2.jpg') name = 'cad-service.jpg';
  if (name === '3.jpg') name = 'instagram-render.jpg';
  if (name === '4.mp4') name = '360-animation-1.mp4';
  if (name === '5.jpg') name = 'premium-cad-render.jpg';
  if (name === '6.mp4') name = '360-animation-2.mp4';
  
  if (name === 'getsocialrender.jpeg') name = 'social-render-service.jpeg';
  if (name === 'hand-animation.jpeg') name = 'hand-animation-service.jpeg';
  if (name === 'cad-desgining.jpg') name = 'cad-designing-service.jpg';
  if (name === 'model-necklace.jpg') name = 'model-necklace-service.jpg';
  
  // Specific renames for cad renders
  if (folderName === 'cad-renders') {
    if (name === 'rg.jpg') name = 'rose-gold-ring.jpg';
    if (name === 'wg.jpg') name = 'white-gold-ring.jpg';
    if (name === 'yg.jpg') name = 'yellow-gold-ring.jpg';
    if (name === 'ring.jpg') name = 'diamond-ring.jpg';
  }

  // Specific renames for retouching
  if (folderName === 'retouching') {
    name = name.replace('4-after.jpg', 'ring-4-after.jpg');
    name = name.replace('4-before.jpg', 'ring-4-before.jpg');
    name = name.replace('front-banner', 'front-banner');
  }

  return name;
}

files.forEach(f => {
  const relPath = path.relative(publicDir, f);
  // ignore files like robots.txt, manifest.json, sitemap.xml in root of public
  if (path.dirname(relPath) === '.') return;
  
  const dirname = path.dirname(relPath);
  const basename = path.basename(f);
  const folderName = path.basename(path.dirname(f));
  
  let newBasename = cleanName(basename, folderName);
  
  const newRelPath = path.join(dirname, newBasename).replace(/\\/g, '/');
  const oldRelPath = relPath.replace(/\\/g, '/');
  
  if (newRelPath !== oldRelPath) {
    renameMap['/' + oldRelPath] = '/' + newRelPath;
  }
});

let updatedFilesCount = 0;

// Execute the renames
for (const [oldPath, newPath] of Object.entries(renameMap)) {
  const oldAbsPath = path.join(publicDir, ...oldPath.split('/'));
  const newAbsPath = path.join(publicDir, ...newPath.split('/'));
  
  if (fs.existsSync(oldAbsPath)) {
    fs.renameSync(oldAbsPath, newAbsPath);
    console.log(`Renamed: ${oldPath} -> ${newPath}`);
  }
}

// Update src/
function updateSrc(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) {
      updateSrc(fp);
    } else if (fp.match(/\.(ts|tsx|js|jsx)$/)) {
      let content = fs.readFileSync(fp, 'utf8');
      let changed = false;
      
      for (const [oldPath, newPath] of Object.entries(renameMap)) {
        if (content.includes(oldPath)) {
          content = content.split(oldPath).join(newPath);
          changed = true;
        }
      }
      
      if (changed) {
        fs.writeFileSync(fp, content);
        updatedFilesCount++;
        console.log(`Updated references in ${path.relative(__dirname + '/..', fp)}`);
      }
    }
  }
}

updateSrc(srcDir);
console.log(`\nFinished! Renamed ${Object.keys(renameMap).length} assets and updated ${updatedFilesCount} source files.`);
