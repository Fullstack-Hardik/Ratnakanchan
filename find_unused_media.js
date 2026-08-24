const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const srcDir = path.join(__dirname, 'src');

function getAllFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const files = fs.readdirSync(dirPath);
  files.forEach(function(file) {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });
  return arrayOfFiles;
}

const mediaExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.mp4', '.webm'];
const allMedia = getAllFiles(publicDir).filter(file => mediaExtensions.includes(path.extname(file).toLowerCase()));

const allSrcFiles = getAllFiles(srcDir).filter(file => ['.tsx', '.ts', '.jsx', '.js', '.css'].includes(path.extname(file).toLowerCase()));
let srcContents = '';
allSrcFiles.forEach(file => {
  srcContents += fs.readFileSync(file, 'utf-8');
});

const unusedMedia = [];
allMedia.forEach(mediaPath => {
  const relativePath = path.relative(publicDir, mediaPath).replace(/\\/g, '/');
  const basename = path.basename(relativePath);
  
  if (!srcContents.includes(relativePath) && !srcContents.includes(basename)) {
    unusedMedia.push(relativePath);
  }
});

fs.writeFileSync('unused_media.json', JSON.stringify(unusedMedia, null, 2));
console.log('Unused media files saved to unused_media.json');
