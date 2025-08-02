const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Функция для поиска всех файлов с определенными расширениями
function findImageFiles(dir, extensions) {
  let results = [];
  
  if (!fs.existsSync(dir)) {
    return results;
  }
  
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      results = results.concat(findImageFiles(filePath, extensions));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  
  return results;
}

// Функция для поиска использований файла в коде
function isImageUsed(imagePath, projectDir) {
  const relativePath = path.relative(projectDir, imagePath);
  const publicPath = relativePath.replace(/^public\//, '/');
  const assetsPath = relativePath.replace(/^assets\//, '@/assets/');
  
  // Различные варианты путей, которые могут использоваться
  const searchPatterns = [
    relativePath,
    publicPath,
    assetsPath,
    path.basename(imagePath),
    relativePath.replace(/\\/g, '/'),
    publicPath.replace(/\\/g, '/'),
    assetsPath.replace(/\\/g, '/')
  ];
  
  for (const pattern of searchPatterns) {
    try {
      // Экранируем специальные символы для grep
      const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const result = execSync(`grep -r "${escapedPattern}" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" --include="*.json" --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=.next`, 
        { cwd: projectDir, encoding: 'utf8' });
      
      if (result.trim()) {
        console.log(`✓ Used: ${relativePath} (found pattern: ${pattern})`);
        return true;
      }
    } catch (error) {
      // grep returns non-zero exit code when no matches found
    }
  }
  
  return false;
}

// Основная функция
function cleanupUnusedImages() {
  const projectDir = __dirname;
  const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif'];
  
  // Поиск всех изображений в assets и public
  const assetsDir = path.join(projectDir, 'assets');
  const publicDir = path.join(projectDir, 'public');
  
  let allImages = [];
  
  if (fs.existsSync(assetsDir)) {
    allImages = allImages.concat(findImageFiles(assetsDir, imageExtensions));
  }
  
  if (fs.existsSync(publicDir)) {
    allImages = allImages.concat(findImageFiles(publicDir, imageExtensions));
  }
  
  console.log(`Found ${allImages.length} image files`);
  
  const unusedImages = [];
  
  // Проверяем каждое изображение
  allImages.forEach(imagePath => {
    if (!isImageUsed(imagePath, projectDir)) {
      unusedImages.push(imagePath);
      console.log(`✗ Unused: ${path.relative(projectDir, imagePath)}`);
    }
  });
  
  console.log(`\nFound ${unusedImages.length} unused images:`);
  unusedImages.forEach(img => console.log(`  - ${path.relative(projectDir, img)}`));
  
  // Удаляем неиспользуемые изображения
  if (unusedImages.length > 0) {
    console.log('\nDeleting unused images...');
    unusedImages.forEach(imagePath => {
      try {
        fs.unlinkSync(imagePath);
        console.log(`Deleted: ${path.relative(projectDir, imagePath)}`);
      } catch (error) {
        console.error(`Failed to delete ${imagePath}: ${error.message}`);
      }
    });
    
    // Удаляем пустые папки
    console.log('\nRemoving empty directories...');
    try {
      execSync('find . -type d -empty -delete', { cwd: projectDir });
    } catch (error) {
      // Игнорируем ошибки при удалении пустых папок
    }
  } else {
    console.log('\nNo unused images found!');
  }
}

cleanupUnusedImages();