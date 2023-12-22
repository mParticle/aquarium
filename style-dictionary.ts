module.exports = {
  "source": [
    "design/theme.json",
    "design/primitives.json",
  ],
  "platforms": {
    "css": {
      "transformGroup": "css",
      "files": [
        {
          "destination": "src/styles/_primitives.css",
          "format": "css/variables",
          "filter": token => token.filePath === 'design/primitives.json',
          "options": { "showFileHeader": false, },
        },
        {
          "destination": "src/styles/_theme.css",
          "format": "css/variables",
          "filter": token => token.filePath === 'design/theme.json',
          "options": { "showFileHeader": false, },
        },
      ],
    },
    "js": {
      "transformGroup": "js",
      "files": [
        {
          "destination": "src/styles/primitives.ts",
          "format": "javascript/es6",
          "filter": token => token.filePath === 'design/primitives.json',
          "options": { "showFileHeader": false,},
        },
        {
          "destination": "src/styles/theme.ts",
          "format": "javascript/es6",
          "filter": token => token.filePath === 'design/theme.json',
          "options": { "showFileHeader": false,},
        },
      ],
    },
  },
};