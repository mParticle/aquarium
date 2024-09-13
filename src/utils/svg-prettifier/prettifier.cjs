const { JSDOM } = require('jsdom')
const fs = require('fs')
const path = require('path')
const sanitizeFilename = require('sanitize-filename')

function prettifySVG(content) {
  const { window } = new JSDOM(content)
  const svgElement = window.document.querySelector('svg')

  if (svgElement !== null) {
    svgElement.removeAttribute('fill')
    svgElement.querySelectorAll('path').forEach(pathElement => {
      pathElement.removeAttribute('fill')
    })

    svgElement.setAttribute('fill', 'currentColor')
    svgElement.removeAttribute('height')
    svgElement.removeAttribute('width')

    const viewBoxValue = svgElement.getAttribute('viewBox')
    if (viewBoxValue !== '0 0 20 20') {
      throw new Error('View box not set to 0 0 20 20')
    }

    return svgElement.outerHTML
  } else {
    throw new Error('Invalid SVG content')
  }
}

function savePrettifiedSVG(filePath, content) {
  const fileName = path.basename(filePath, path.extname(filePath))
  const targetDirectory = path.join(__dirname, '../../assets/icons')

  if (!fs.existsSync(targetDirectory)) {
    fs.mkdirSync(targetDirectory, { recursive: true })
  }

  // Sanitize the file name to avoid path traversal
  const safeFileName = sanitizeFilename(fileName)
  fs.writeFileSync(path.join(targetDirectory, `${safeFileName}.svg`), content)
}

module.exports = { prettifySVG, savePrettifiedSVG }
