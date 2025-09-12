/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const slugify = require('slugify');

// const tsxFilePath = path.join(__dirname, 'index.tsx')
const tsxFilePath =
  '/Users/canhhungit/Work/Onlive Project/ONLIVE-Internal/play.onlive.vn/src/components/LivePlayer/index.tsx';
console.log('tsxFilePath', tsxFilePath);

fs.readFile(tsxFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  //   console.log('File content:', data)
  const regex = /<[^>]*>([^<]*)<\/[^>]*>/g;
  let match;
  const jsonFilePath = path.join(__dirname, 'output.json');
  const jsonData = {};

  while ((match = regex.exec(data)) !== null) {
    if (match[1].trim() && match[1].trim() != '0') {
      const replacedText = match[1]
        .trim()
        .replace(/\n/g, ' ')
        .replace(/ {2}/g, ' ')
        .replace(/ {2}/g, ' ')
        .replace(/ {2}/g, ' ')
        .replace(/ {2}/g, ' ')
        .replace(/ {2}/g, ' ');
      if (replacedText.startsWith('{t') || replacedText.startsWith('{/*')) {
        break;
      }
      //   console.log('Replaced text:', replacedText)
      const words = replacedText.split(' ');
      const truncatedText =
        words.length > 10 ? words.slice(0, 10).join(' ') : replacedText;

      const slug = slugify(truncatedText, {
        lower: true,
        strict: true,
        locale: 'vi',
        trim: true,
      })
        .replace(/ju/g, 'u')
        .replace(/ji/g, 'i')
        .replace(/jo/g, 'o')
        .replace(/ja/g, 'a');

      if (slug && !slug.includes('ondrop')) {
        jsonData[slug] = replacedText;
        data = data.replace('>' + match[1] + '<', '>' + `{t('${slug}')}` + '<');
      }
    }
  }
  fs.writeFile(tsxFilePath, data, (err) => {
    if (err) {
      console.error('Error writing to the .tsx file:', err);
      return;
    }
    console.log('.tsx file has been updated.');
  });
  fs.writeFile(jsonFilePath, JSON.stringify(jsonData, null, 2), (err) => {
    if (err) {
      console.error('Error writing to the file:', err);
      return;
    }
    console.log('JSON file has been saved.');
  });
});
