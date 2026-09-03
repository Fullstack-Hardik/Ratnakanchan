const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/images/retouching/new');

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const stats = fs.statSync(fullPath);
        if (stats.size > 500 * 1024) {
          console.log(`Compressing ${fullPath} (${(stats.size / 1024 / 1024).toFixed(2)} MB)...`);
          const tempPath = fullPath + '.tmp';
          try {
            const image = sharp(fullPath).resize(1920, 1920, { fit: 'inside', withoutEnlargement: true });
            if (ext === '.png') {
              await image.png({ quality: 80 }).toFile(tempPath);
            } else {
              await image.jpeg({ quality: 80 }).toFile(tempPath);
            }
            fs.renameSync(tempPath, fullPath);
            console.log(`Done ${file}`);
          } catch (e) {
            console.error(`Failed ${file}:`, e);
          }
        }
      }
    }
  }
}

processDirectory(dir).then(() => console.log('All done.'));
