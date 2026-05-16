const fs = require('fs');
const path = require('path');

// Define the file paths
const filesToDelete = [
  path.join(__dirname, 'aframe-ar.js'),
  path.join(__dirname, 'aframe-1.2.0.min.js'),
  path.join(__dirname, 'not-developer.js'),
];

// Function to delete a file
function deleteFile(filePath) {
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`Deleted: ${filePath}`);
    } catch (error) {
      console.error(`Failed to delete ${filePath}: ${error.message}`);
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
}

// Iterate over each file and attempt to delete
filesToDelete.forEach(deleteFile);
