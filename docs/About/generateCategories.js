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
const SRC_COMPONENTS = join(__dirname, '../../src/components')
const OUT_FILE = join(__dirname, 'componentCategories.json')

function toKebab(str) {
  return str
    .replace(/\//g, '-')
    .replace(/\s+/g, '-')
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-+/, '')
    .replace(/-+/g, '-')
}

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

const CATEGORY_ORDER = ['General', 'Typography', 'Data Display', 'Data Entry', 'Feedback', 'Navigation']

const TYPOGRAPHY_COMPONENTS = ['Link', 'Paragraph', 'Text', 'Title']

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

function getStoriesPath(categoryName, componentName, parentFolder) {
  const catSlug = toKebab(categoryName)
  if (parentFolder) {
    const flatPath = join(SRC_COMPONENTS, catSlug, parentFolder, `${componentName}.stories.tsx`)
    if (existsSync(flatPath)) return flatPath
    const nestedPath = join(SRC_COMPONENTS, catSlug, parentFolder, componentName, `${componentName}.stories.tsx`)
    return nestedPath
  }
  return join(SRC_COMPONENTS, catSlug, componentName, `${componentName}.stories.tsx`)
}

function getFirstStoryId(storiesPath) {
  if (!existsSync(storiesPath)) return null
  const content = readFileSync(storiesPath, 'utf8')
  const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/)
  const firstExportMatch = content.match(/export\s+const\s+(\w+)\s*[:=]/)
  if (!titleMatch || !firstExportMatch) return null
  const metaTitle = titleMatch[1]
  const firstExportName = firstExportMatch[1]
  const storyId = `${toKebab(metaTitle)}--${toKebab(firstExportName)}`
  return storyId
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
        const folderAsComponent = {
          name: itemName,
          variantCount: subfolders.length,
        }
        let folderStoryId = getFirstStoryId(getStoriesPath(categoryName, itemName, null))
        if (!folderStoryId && subfolders.length > 0) {
          const firstSub = subfolders[0]
          folderStoryId = getFirstStoryId(getStoriesPath(categoryName, firstSub, itemName))
        }
        if (folderStoryId) folderAsComponent.storyId = folderStoryId
        components.push(folderAsComponent)

        const groupComponents = []
        const addedNames = new Set()
        for (const subName of subfolders) {
          if (excluded?.has(subName)) continue
          const subMdxPath = join(itemPath, subName, 'Documentation.mdx')
          let variantCount = 1
          let storyId = null
          if (existsSync(subMdxPath)) {
            const content = readFileSync(subMdxPath, 'utf8')
            const rawCount = countCanvasOf(content)
            variantCount = rawCount === 0 ? 1 : rawCount
          } else {
            const storiesPath = getStoriesPath(categoryName, subName, itemName)
            storyId = getFirstStoryId(storiesPath)
            if (!storyId) continue
          }
          const comp = { name: subName, variantCount, parentFolder: itemName }
          if (storyId) comp.storyId = storyId
          groupComponents.push(comp)
          addedNames.add(subName)
        }
        const srcParentPath = join(SRC_COMPONENTS, toKebab(categoryName), itemName)
        if (existsSync(srcParentPath)) {
          const srcSubfolders = getDirectories(srcParentPath)
          for (const srcSubName of srcSubfolders) {
            if (addedNames.has(srcSubName) || excluded?.has(srcSubName)) continue
            const storyPath = getStoriesPath(categoryName, srcSubName, itemName)
            const storyId = getFirstStoryId(storyPath)
            if (!storyId) continue
            groupComponents.push({
              name: srcSubName,
              variantCount: 1,
              parentFolder: itemName,
              storyId,
            })
          }
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

    if (categoryName === 'General') {
      const hasIcons = components.some((c) => c.name === 'Icons')
      if (!hasIcons) {
        const iconStoriesPath = join(SRC_COMPONENTS, 'general', 'Icon', 'Icon.stories.tsx')
        const iconStoryId = getFirstStoryId(iconStoriesPath)
        if (iconStoryId) {
          components.push({ name: 'Icons', variantCount: 1, storyId: iconStoryId })
          components.sort((a, b) => a.name.localeCompare(b.name))
        }
      }
    }

    categories.push({ name: categoryName, components })
  }

  const typographyComponents = []
  const generalPath = join(DOCS_COMPONENTS, 'General')
  for (const compName of TYPOGRAPHY_COMPONENTS) {
    const linkDocPath = join(generalPath, 'Link', 'Documentation.mdx')
    const typographyDocPath = join(generalPath, 'Typography', compName, 'Documentation.mdx')
    const mdxPath = compName === 'Link' ? linkDocPath : typographyDocPath
    let variantCount = 1
    let storyId = null
    if (existsSync(mdxPath)) {
      const content = readFileSync(mdxPath, 'utf8')
      const rawCount = countCanvasOf(content)
      variantCount = rawCount === 0 ? 1 : rawCount
    } else {
      const storiesPath = getStoriesPath('General', compName, 'Typography')
      storyId = getFirstStoryId(storiesPath)
    }
    const comp = {
      name: compName,
      variantCount,
      parentFolder: 'Typography',
    }
    if (storyId) comp.storyId = storyId
    typographyComponents.push(comp)
  }
  typographyComponents.sort((a, b) => a.name.localeCompare(b.name))
  categories.push({
    name: 'Typography',
    components: typographyComponents,
    parentCategory: 'General',
  })

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
