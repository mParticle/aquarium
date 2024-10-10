const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');
const { optimize } = require('svgo'); // Using SVGO for optimization

function prettifySVG(content) {
  const { window } = new JSDOM(content);
  const svgElement = window.document.querySelector('svg');

  if (svgElement !== null) {
    // Get the original viewBox if it exists
    const originalViewBox = svgElement.getAttribute('viewBox');
    let minX = 0, minY = 0, width = 20, height = 20;

    if (originalViewBox) {
      [minX, minY, width, height] = originalViewBox.split(' ').map(Number);
    }

    // Calculate scale factors to fit the original viewBox into 20x20
    const scaleX = 20 / width;
    const scaleY = 20 / height;
    const scale = Math.min(scaleX, scaleY); // Maintain aspect ratio

    // Apply scaling to the paths
    svgElement.querySelectorAll('path').forEach(pathElement => {
      const originalD = pathElement.getAttribute('d');
      const scaledD = scalePathData(originalD, scale, minX, minY);
      pathElement.setAttribute('d', scaledD);
    });

    // Force the viewBox to be "0 0 20 20"
    svgElement.setAttribute('viewBox', '0 0 20 20');

    // Optimize the SVG using SVGO
    const updatedSVG = svgElement.outerHTML;
    const optimizedSVG = optimize(updatedSVG, {
      plugins: [
        { name: 'preset-default', params: { overrides: { removeViewBox: false } } },
        { name: 'removeDimensions' }, // Remove width and height attributes
      ],
    });

    return optimizedSVG.data; // Return the optimized SVG content
  } else {
    throw new Error('Invalid SVG content');
  }
}

// Helper function to scale the path data
function scalePathData(d, scale, offsetX = 0, offsetY = 0) {
  const commands = d.match(/[a-zA-Z][^a-zA-Z]*/g);
  if (!commands) return d;

  return commands
    .map(command => {
      const type = command[0];
      const numbers = command.slice(1).trim().split(/[\s,]+/).map(Number);

      const scaledNumbers = numbers.map((num, index) =>
        index % 2 === 0
          ? (num - offsetX) * scale // Scale x-coordinates
          : (num - offsetY) * scale // Scale y-coordinates
      );

      return `${type}${scaledNumbers.join(' ')}`;
    })
    .join(' ');
}

function savePrettifiedSVG(filePath, content) {
  const fileName = path.basename(filePath, path.extname(filePath));
  const targetDirectory = path.join(__dirname, '../../assets/icons');

  if (!fs.existsSync(targetDirectory)) {
    fs.mkdirSync(targetDirectory, { recursive: true });
  }

  fs.writeFileSync(path.join(targetDirectory, `${fileName}.svg`), content);
}

module.exports = { prettifySVG, savePrettifiedSVG };
