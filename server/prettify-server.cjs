// semgrep ignore typescript.react.security.react-insecure-request.react-insecure-request: This is a local development server

const fs = require('fs');
const http = require('http');  // Using HTTP since this is only for local development
const path = require('path');
const multer = require('multer');
const sanitizeFilename = require('sanitize-filename');
const { prettifySVG, savePrettifiedSVG } = require('../src/utils/svg-prettifier/prettifier.cjs');

const port = 8000;
const host = '127.0.0.1';  // Restricting server to localhost to ensure it only runs locally

// Use memory storage for uploaded files
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const requestHandler = (req, res) => {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');  // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Methods', 'POST');  // Allow POST requests
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');  // Allow content-type header

  if (req.method === 'OPTIONS') {
    // Handle preflight requests
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/api') {
    upload.array('files')(req, res, err => {
      if (err) {
        console.error('Error uploading file: %s', err);
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
          const safeFileName = sanitizeFilename(file.originalname); // Sanitize the filename
          const content = file.buffer.toString('utf8'); // Get the file content from memory
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
          console.error('Error prettifying file %s: %s', file.originalname, error);
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
};

// Start server and restrict it to localhost to ensure it only runs locally
server.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});

// Always use localhost for the fetch call as this is for local development
const url = 'http://localhost:8000/api';
const response = await fetch(url, {
  method: 'POST',
  body: formData,
});