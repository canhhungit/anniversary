/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

// Define the path to the .tsx file
const tsxFilePath = path.join(__dirname, 'translation.json');
console.log('tsxFilePath', tsxFilePath);

// Read the JSON file
fs.readFile(tsxFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Remove duplicate lines and sort keys alphabetically
    const uniqueData = Object.keys(jsonData)
      .sort() // Sắp xếp các khóa theo thứ tự bảng chữ cái
      .reduce((acc, key) => {
        // eslint-disable-next-line no-prototype-builtins
        if (!acc.hasOwnProperty(key)) {
          acc[key] = jsonData[key];
        }
        return acc;
      }, {});
    console.log('uniqueData', uniqueData);

    // Write the cleaned and sorted data back to the file
    fs.writeFile(
      tsxFilePath,
      JSON.stringify(uniqueData, null, 2),
      'utf8',
      (err) => {
        if (err) {
          console.error('Error writing file:', err);
          return;
        }
        console.log('File has been cleaned, sorted, and saved.');
      },
    );
  } catch (parseErr) {
    console.error('Error parsing JSON:', parseErr);
  }
});
