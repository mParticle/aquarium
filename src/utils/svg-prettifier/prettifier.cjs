const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

function prettifySVG(content) {
  const { window } = new JSDOM(content);
  const svgElement = window.document.querySelector('svg');

  if (svgElement !== null) {
    svgElement.removeAttribute('fill');
    svgElement.querySelectorAll('path').forEach(pathElement => {
      pathElement.removeAttribute('fill');
    });

    svgElement.setAttribute('fill', 'currentColor');
    svgElement.removeAttribute('height');
    svgElement.removeAttribute('width');

    const viewBoxValue = svgElement.getAttribute('viewBox');
    if (viewBoxValue !== '0 0 20 20') {
      throw new Error('Error: The SVG must have a viewBox of 0 0 20 20 for the prettifier to process it correctly.');
    }

    return svgElement.outerHTML;
  } else {
    throw new Error('Invalid SVG content');
  }
}

function savePrettifiedSVG(filePath, content) {
  const fileName = path.basename(filePath, path.extname(filePath));
  const targetDirectory = path.join(__dirname, '../../assets/svg');

  if (!fs.existsSync(targetDirectory)) {
    fs.mkdirSync(targetDirectory, { recursive: true });
  }

  // Save the prettified SVG without sanitization
  fs.writeFileSync(path.join(targetDirectory, `${fileName}.svg`), content);
}

module.exports = { prettifySVG, savePrettifiedSVG };
