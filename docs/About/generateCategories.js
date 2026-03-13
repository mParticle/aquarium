/**
 * Builds componentCategories.json by scanning docs/components.
 * Run before Storybook so the Introduction page has up-to-date categories.
 *
 * Scans docs/components/{category}/ (excluding Not Prod Ready and Layout). For each item:
 * - If it contains Documentation.mdx directly → regular component. variantCount = "<Canvas of=" in that file (0 → 1).
 * - If it contains subfolders (grouped folder e.g. Icons, Typography, Modal) → create a separate category
 *   with that folder name; add each subfolder that has Documentation.mdx as a component (variantCount from
 *   mdx, parentFolder = grouped folder name). Category gets parentCategory = current category so links still
 *   use /docs/components-{parentCategory}-{parentFolder}-{componentName}--documentation.
 *
 * Uses exact folder names as category names.
 */

import { readdirSync, readFileSync, writeFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const DOCS_COMPONENTS = join(__dirname, '../components')
const OUT_FILE = join(__dirname, 'componentCategories.json')

const SKIP_CATEGORIES = new Set(['Not Prod Ready', 'Layout'])

/** Components that resolve to a different doc path (e.g. Patterns or Not Prod Ready) and would error when linked from the Introduction. */
const EXCLUDE_COMPONENTS = {
  'Data Display': new Set(['HelpIcon', 'Tour', 'Segmented']),
  'Data Entry': new Set(['Cascader', 'TimePicker']),
  'Feedback': new Set(['Notification', 'Result']),
  'General': new Set(['Link']),
  'Navigation': new Set(['Anchor', 'Breadcrumb', 'Dropdown', 'Menu', 'Pagination', 'Steps']),
  'UX Patterns': new Set(['PermissionsRestrictions', 'StatisticsCard', 'Steps']),
}

const CATEGORY_ORDER = ['Data Display', 'Data Entry', 'General', 'Feedback', 'Navigation', 'UX Patterns']

function getDirectories(dir) {
  if (!existsSync(dir)) return []
  return readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
}

function countCanvasOf(content) {
  const matches = content.match(/<Canvas of=/g)
  return matches ? matches.length : 0
}

function main() {
  const categoryFolders = getDirectories(DOCS_COMPONENTS).filter(
    (name) => !SKIP_CATEGORIES.has(name)
  )
  const categories = []

  for (const categoryName of categoryFolders) {
    const categoryPath = join(DOCS_COMPONENTS, categoryName)
    const componentFolders = getDirectories(categoryPath)
    const components = []
    const excluded = EXCLUDE_COMPONENTS[categoryName]

    for (const itemName of componentFolders) {
      if (excluded?.has(itemName)) continue
      const itemPath = join(categoryPath, itemName)
      const mdxPath = join(itemPath, 'Documentation.mdx')
      const subfolders = getDirectories(itemPath)

      if (existsSync(mdxPath)) {
        const content = readFileSync(mdxPath, 'utf8')
        const rawCount = countCanvasOf(content)
        const variantCount = rawCount === 0 ? 1 : rawCount
        components.push({ name: itemName, variantCount })
      } else if (subfolders.length > 0) {
        const groupComponents = []
        for (const subName of subfolders) {
          if (excluded?.has(subName)) continue
          const subMdxPath = join(itemPath, subName, 'Documentation.mdx')
          if (!existsSync(subMdxPath)) continue
          const content = readFileSync(subMdxPath, 'utf8')
          const rawCount = countCanvasOf(content)
          const variantCount = rawCount === 0 ? 1 : rawCount
          groupComponents.push({
            name: subName,
            variantCount,
            parentFolder: itemName,
          })
        }
        if (groupComponents.length > 0) {
          groupComponents.sort((a, b) => a.name.localeCompare(b.name))
          categories.push({
            name: itemName,
            components: groupComponents,
            parentCategory: categoryName,
          })
        }
      }
    }

    components.sort((a, b) => a.name.localeCompare(b.name))
    categories.push({ name: categoryName, components })
  }

  categories.sort((a, b) => {
    const aParent = a.parentCategory
    const bParent = b.parentCategory
    const aOrder = aParent !== undefined ? CATEGORY_ORDER.indexOf(aParent) : CATEGORY_ORDER.indexOf(a.name)
    const bOrder = bParent !== undefined ? CATEGORY_ORDER.indexOf(bParent) : CATEGORY_ORDER.indexOf(b.name)
    if (aOrder !== -1 && bOrder !== -1) {
      if (aOrder !== bOrder) return aOrder - bOrder
      if (aParent && bParent) return a.name.localeCompare(b.name)
      if (aParent) return 1
      if (bParent) return -1
    }
    if (aOrder !== -1 && bOrder === -1) return -1
    if (aOrder === -1 && bOrder !== -1) return 1
    return a.name.localeCompare(b.name)
  })

  const output = { categories }
  const json = JSON.stringify(output, null, 2)
  writeFileSync(OUT_FILE, json + '\n')
  console.log(`Wrote ${OUT_FILE} (${categories.length} categories, ${categories.reduce((n, c) => n + c.components.length, 0)} components)`)
}

main()
