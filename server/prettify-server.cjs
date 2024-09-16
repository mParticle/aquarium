const fs = require('fs');
const http = require('http');
const path = require('path');
const multer = require('multer');
const sanitizeFilename = require('sanitize-filename');

const { prettifySVG, savePrettifiedSVG } = require('../src/utils/svg-prettifier/prettifier.cjs'); // Ensure correct path

const port = 8000;

// Use memory storage for uploaded files
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const server = http.createServer((req, res) => {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    // Handle preflight requests
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/api') {
    upload.array('files')(req, res, err => {
      if (err) {
        console.error('Error uploading file:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error uploading file');
        return;
      }

      // Accumulate success or error messages
      const results = [];
      let hasErrors = false; // Flag to check if any file failed

      // Process each uploaded file
      req.files.forEach(file => {
        try {
          const sanitizeFilename = require('sanitize-filename');
          const safeFileName = sanitizeFilename(file.originalname);
          const content = file.buffer.toString('utf8');
          const prettifiedSVG = prettifySVG(content);

          // Destination path for the prettified SVG
          const filePath = path.join(__dirname, '../src/assets/svg/', safeFileName);

          // Check if the file already exists
          if (fs.existsSync(filePath)) {
            results.push({ file: file.originalname, status: 'error', message: 'File already exists' });
            hasErrors = true; // Mark that there is an error
            return;
          }

          // Save the prettified SVG
          savePrettifiedSVG(filePath, prettifiedSVG);

          // Add success message
          results.push({ file: file.originalname, status: 'success' });
        } catch (error) {
          console.error(`Error prettifying file ${file.originalname}:`, error);
          hasErrors = true; // Mark that there is an error

          // Add error message
          results.push({ file: file.originalname, status: 'error', message: error.message });
        }
      });


      // If there are errors, return a 400 Bad Request status
      if (hasErrors) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
      }

      res.end(JSON.stringify(results)); // Send results as JSON
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
