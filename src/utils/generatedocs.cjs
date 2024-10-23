/**
 * To be used when working through generating automatic documentation files
 * Not production ready, careful when using it.
 */

const fs = require('fs')
const path = require('path')

const srcDir = path.join(__dirname, 'src/components/data-entry')
const docsDir = path.join(__dirname, 'docs/Components/Data Entry')

const getDirectories = source =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

const createDocumentationFile = (componentPath, docPath, componentName) => {
  const relativePath = path.relative(docPath, componentPath)
  const content = `
import { Meta, Canvas } from '@storybook/blocks'

import * as ${componentName}Stories from '${relativePath}/${componentName}.stories'

<Meta of={${componentName}Stories} />

{/* Documentation goes here */}

# ${componentName}

This is the documentation for the ${componentName}s component

{/* Documentation goes here */}

<Canvas meta={${componentName}Stories.default} />
  `

  fs.writeFileSync(path.join(docPath, 'Documentation.mdx'), content.trim())
}

const components = getDirectories(srcDir)
const docs = getDirectories(docsDir)

// biome-ignore lint/complexity/noForEach: <explanation>
components.forEach(component => {
  const componentPath = path.join(srcDir, component)
  const docPath = path.join(docsDir, component)

  if (!fs.existsSync(docPath)) {
    fs.mkdirSync(docPath, { recursive: true })
    createDocumentationFile(componentPath, docPath, component)
    console.log(`Created documentation for ${component}`)
  }
})
