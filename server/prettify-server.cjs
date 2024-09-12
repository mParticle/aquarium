const http = require('http');
const path = require('path');
const multer = require('multer');
const { prettifySVG, savePrettifiedSVG } = require('../src/utils/svg-prettifier/prettifier.cjs'); // Ensure correct path
const { v4: uuidv4 } = require('uuid');  // UUID for unique file naming

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
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/api') {
    upload.array('files')(req, res, err => {
      if (err) {
        console.error('Multer error:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Error uploading files', error: err.message }));
        return;
      }

      // Handle cases where no files are uploaded
      if (!req.files || req.files.length === 0) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'No files uploaded' }));
        return;
      }

      // Process each uploaded file
      try {
        req.files.forEach(file => prettifyFile(file, res));
      } catch (error) {
        console.error('Error processing files:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Error processing files', error: error.message }));
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Endpoint not found' }));
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

function prettifyFile(file, res) {
  try {
    // Validate the file type (SVG only)
    if (!file.mimetype || file.mimetype !== 'image/svg+xml') {
      throw new Error(`Invalid file type: ${file.mimetype}. Only SVG files are allowed.`);
    }

    const content = file.buffer.toString('utf8');  // Get the file content from memory
    const prettifiedSVG = prettifySVG(content);

    // Generate a unique filename by appending a UUID or timestamp
    const uniqueFileName = `${path.parse(file.originalname).name}-${uuidv4()}.svg`;

    // Define where the prettified SVG should be saved
    const filePath = path.join(__dirname, '../src/assets/svg/', uniqueFileName);

    // Attempt to save the prettified SVG
    savePrettifiedSVG(filePath, prettifiedSVG);

    // Send a success response if everything worked fine
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: `File ${uniqueFileName} prettified and saved successfully` }));
  } catch (error) {
    console.error(`Error prettifying file ${file.originalname}:`, error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: `Error prettifying file: ${file.originalname}`, error: error.message }));
  }
}
