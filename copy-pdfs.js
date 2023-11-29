const fs = require('fs');
const path = require('path');

const sourceDir = './subiecte';
const destinationDir = './public/pdf';

// Function to copy file
function copyFile(source, destination) {
    fs.copyFileSync(source, destination);
    console.log(`Copied ${source} to ${destination}`);
}

// Function to process each subdirectory in the source directory
function processDirectory(directory) {
    const id = path.basename(directory);
    const pdfDir = path.join(directory, 'pdf');

    // Create the destination directory if it doesn't exist
    const destDir = path.join(destinationDir, id);
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }

    // Read all pdf files and copy them to the destination
    fs.readdirSync(pdfDir).forEach(file => {
        if (path.extname(file) === '.pdf') {
            const sourceFile = path.join(pdfDir, file);
            const destFile = path.join(destDir, file);
            copyFile(sourceFile, destFile);
        }
    });
}

// Read all directories in the source directory and process each
fs.readdirSync(sourceDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .forEach(dirent => processDirectory(path.join(sourceDir, dirent.name)));
