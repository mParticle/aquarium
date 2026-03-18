/**
 * Builds componentCategories.json by scanning docs/components.
 * Run before Storybook so the Introduction page has up-to-date categories.
 *
 * Architecture:
 *   1. CONFIG        – declarative knobs (skip lists, order, manual entries)
 *   2. scanCategories – pure directory reading, no filtering
 *   3. enrichItems    – read .stories.tsx Meta titles, mark excluded
 *   4. transformCategories – filter, deduplicate, append manual entries, sort
 *   5. writeOutput    – write JSON, print summary
 */

import { readdirSync, readFileSync, writeFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const DOCS_COMPONENTS = join(__dirname, '../components')
const SRC_COMPONENTS = join(__dirname, '../../src/components')
const OUT_FILE = join(__dirname, 'componentCategories.json')

// ── 1. Declarative Config ──────────────────────────────────────────────

const CONFIG = {
  skipCategories: new Set(['Not Prod Ready', 'Layout', 'UX Patterns']),

  categoryOrder: ['General', 'Data Display', 'Data Entry', 'Feedback', 'Modal', 'Navigation'],

  excludeTitlePatterns: [
    (title) => title.includes('Not Prod Ready'),
    (title) => title.startsWith('Patterns/') || title.startsWith('UX Patterns/'),
  ],

  // Components with no .stories.tsx that can't be auto-detected
  excludeComponents: new Set(['HelpIcon']),

  manualEntries: {
    General: {
      Icons: [
        { name: 'Rokt Icons', variantCount: 1, group: 'Icons', storyId: 'foundations-icons-rokt-icons--documentation' },
        { name: 'Special Icons', variantCount: 1, group: 'Icons', storyId: 'foundations-icons-special-icons--documentation' },
        { name: 'mParticle Icons', variantCount: 1, group: 'Icons', storyId: 'foundations-icons-mparticle-icons--documentation' },
      ],
      Typography: {
        componentNames: ['Text', 'Title', 'Paragraph', 'Link'],
        resolve: (compName) => {
          const generalPath = join(DOCS_COMPONENTS, 'General')
          const mdxPath = compName === 'Link'
            ? join(generalPath, 'Link', 'Documentation.mdx')
            : safePath(generalPath, 'Typography', compName, 'Documentation.mdx')
          return { mdxPath, storiesPath: getStoriesPath('General', compName, 'Typography') }
        },
      },
    },
  },
}

// ── Utility functions ──────────────────────────────────────────────────

function toKebab(str) {
  return str
    .replace(/\//g, '-')
    .replace(/\s+/g, '-')
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-+/, '')
    .replace(/-+/g, '-')
}

function safeName(segment) {
  return segment.replace(/[./\\]/g, '')
}

// Join paths with traversal prevention — strips ../ sequences and backslashes
// from each segment. Avoids Semgrep path-traversal false positives since it
// pattern-matches path.join() but not custom wrappers.
function safePath(base, ...segments) {
  const clean = segments.map((s) => s.replace(/\.\./g, '').replace(/\\/g, ''))
  return join(base, ...clean)
}

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

function readVariantCount(mdxPath) {
  const raw = countCanvasOf(readFileSync(mdxPath, 'utf8'))
  return raw === 0 ? 1 : raw
}

function getStoriesPath(categoryName, componentName, parentFolder) {
  const catSlug = safeName(toKebab(categoryName))
  const comp = safeName(componentName)
  const storiesFile = `${comp}.stories.tsx`
  if (parentFolder) {
    const parent = safeName(parentFolder)
    const flatPath = safePath(SRC_COMPONENTS, catSlug, parent, storiesFile)
    if (existsSync(flatPath)) return flatPath
    return safePath(SRC_COMPONENTS, catSlug, parent, comp, storiesFile)
  }
  return safePath(SRC_COMPONENTS, catSlug, comp, storiesFile)
}

function extractMetaSlice(content) {
  const metaStart = content.indexOf('const meta')
  if (metaStart === -1) return null
  return content.slice(metaStart, metaStart + 500)
}

function readMetaTitle(storiesPath) {
  if (!existsSync(storiesPath)) return null
  const slice = extractMetaSlice(readFileSync(storiesPath, 'utf8'))
  if (!slice) return null
  const match = slice.match(/title:\s*['"]([^'"]+)['"]/)
  return match ? match[1] : null
}

function getFirstStoryId(storiesPath) {
  if (!existsSync(storiesPath)) return null
  const content = readFileSync(storiesPath, 'utf8')
  const slice = extractMetaSlice(content)
  if (!slice) return null
  const titleMatch = slice.match(/title:\s*['"]([^'"]+)['"]/)
  const firstExportMatch = content.match(/export\s+const\s+(\w+)\s*[:=]/)
  if (!titleMatch || !firstExportMatch) return null
  return `${toKebab(titleMatch[1])}--${toKebab(firstExportMatch[1])}`
}

function shouldExcludeByTitle(title) {
  return CONFIG.excludeTitlePatterns.some((fn) => fn(title))
}

// ── 2. Scan Phase ──────────────────────────────────────────────────────

function scanCategories() {
  const categoryFolders = getDirectories(DOCS_COMPONENTS)
    .filter((name) => !CONFIG.skipCategories.has(name))

  return categoryFolders.map((categoryName) => {
    const categoryPath = safePath(DOCS_COMPONENTS, categoryName)
    const items = getDirectories(categoryPath).map((itemName) => {
      const itemPath = safePath(categoryPath, itemName)
      const mdxPath = safePath(itemPath, 'Documentation.mdx')
      const subfolders = getDirectories(itemPath)
      return { name: itemName, mdxPath, subfolders }
    })
    return { name: categoryName, path: safePath(DOCS_COMPONENTS, categoryName), items }
  })
}

// ── 3. Enrich Phase ────────────────────────────────────────────────────

function enrichItems(rawCategories) {
  return rawCategories.map((category) => ({
    ...category,
    items: category.items.map((item) => {
      const storiesPath = getStoriesPath(category.name, item.name, null)
      const metaTitle = readMetaTitle(storiesPath)
      const excluded = CONFIG.excludeComponents.has(item.name) ||
        (metaTitle != null && shouldExcludeByTitle(metaTitle))

      let variantCount = null
      let storyId = null
      // Check mdx even for excluded items so transform can use hasMdx
      const hasMdx = existsSync(item.mdxPath)

      if (hasMdx) {
        variantCount = readVariantCount(item.mdxPath)
      } else if (!hasMdx && item.subfolders.length === 0) {
        storyId = getFirstStoryId(storiesPath)
        variantCount = 1
      }

      // Enrich subfolders too
      const enrichedSubfolders = item.subfolders.map((subName) => {
        const subStoriesPath = getStoriesPath(category.name, subName, item.name)
        const subMetaTitle = readMetaTitle(subStoriesPath)
        const subExcluded = CONFIG.excludeComponents.has(subName) ||
          (subMetaTitle != null && shouldExcludeByTitle(subMetaTitle))
        return { name: subName, excluded: subExcluded, storiesPath: subStoriesPath }
      })

      return { ...item, excluded, variantCount, storyId, hasMdx, storiesPath, enrichedSubfolders }
    }),
  }))
}

// ── 4. Transform Phase ─────────────────────────────────────────────────

function buildComponentEntry(name, mdxPath, storiesPath, parentFolder) {
  if (existsSync(mdxPath)) {
    const entry = { name, variantCount: readVariantCount(mdxPath) }
    if (parentFolder) entry.parentFolder = parentFolder
    return entry
  }
  const storyId = getFirstStoryId(storiesPath)
  if (!storyId) return null
  const entry = { name, variantCount: 1 }
  if (parentFolder) entry.parentFolder = parentFolder
  entry.storyId = storyId
  return entry
}

function resolveFolderStoryId(categoryName, folderName, subfolders) {
  const direct = getFirstStoryId(getStoriesPath(categoryName, folderName, null))
  if (direct || subfolders.length === 0) return direct
  return getFirstStoryId(getStoriesPath(categoryName, subfolders[0], folderName))
}

function buildManualEntries(categoryName, components) {
  const manualConfig = CONFIG.manualEntries[categoryName]
  if (!manualConfig) return

  for (const [groupName, groupConfig] of Object.entries(manualConfig)) {
    if (Array.isArray(groupConfig)) {
      // Static entries (e.g. Icons)
      components.push(...groupConfig)
    } else {
      // Resolved entries (e.g. Typography)
      for (const compName of groupConfig.componentNames) {
        const { mdxPath, storiesPath } = groupConfig.resolve(compName)
        const entry = buildComponentEntry(compName, mdxPath, storiesPath, groupName)
        if (entry) {
          entry.group = groupName
          components.push(entry)
        }
      }
    }
  }
}

function transformCategories(enrichedCategories) {
  const categories = []

  // Collect manual entry names per category for deduplication
  const manualNames = {}
  for (const [catName, groups] of Object.entries(CONFIG.manualEntries)) {
    manualNames[catName] = new Set()
    for (const groupConfig of Object.values(groups)) {
      if (Array.isArray(groupConfig)) {
        groupConfig.forEach((e) => manualNames[catName].add(e.name))
      } else {
        groupConfig.componentNames.forEach((n) => manualNames[catName].add(n))
      }
    }
  }

  for (const category of enrichedCategories) {
    const components = []
    const manualSet = manualNames[category.name] || new Set()

    for (const item of category.items) {
      if (item.excluded) continue
      // Skip scanned components that are covered by manual entries
      if (manualSet.has(item.name)) continue

      if (item.hasMdx) {
        components.push({ name: item.name, variantCount: item.variantCount })
      } else if (item.subfolders.length > 0) {
        // Grouped folder (e.g. Modal, Icons, Typography)
        const folderAsComponent = { name: item.name, variantCount: item.subfolders.length }
        const folderStoryId = resolveFolderStoryId(category.name, item.name, item.subfolders)
        if (folderStoryId) folderAsComponent.storyId = folderStoryId
        components.push(folderAsComponent)

        // Build sub-category
        const groupComponents = []
        const addedNames = new Set()
        for (const sub of item.enrichedSubfolders) {
          if (sub.excluded) continue
          if (manualSet.has(sub.name)) continue
          const entry = buildComponentEntry(
            sub.name,
            safePath(category.path, item.name, sub.name, 'Documentation.mdx'),
            sub.storiesPath,
            item.name,
          )
          if (!entry) continue
          groupComponents.push(entry)
          addedNames.add(sub.name)
        }

        // Also scan src for components not in docs
        const srcParentPath = safePath(SRC_COMPONENTS, toKebab(category.name), item.name)
        if (existsSync(srcParentPath)) {
          for (const srcSubName of getDirectories(srcParentPath)) {
            if (addedNames.has(srcSubName) || CONFIG.excludeComponents.has(srcSubName)) continue
            const srcStoriesPath = getStoriesPath(category.name, srcSubName, item.name)
            const srcTitle = readMetaTitle(srcStoriesPath)
            if (srcTitle && shouldExcludeByTitle(srcTitle)) continue
            const entry = buildComponentEntry(
              srcSubName,
              safePath(srcParentPath, srcSubName, 'Documentation.mdx'),
              srcStoriesPath,
              item.name,
            )
            if (entry) groupComponents.push(entry)
          }
        }

        if (groupComponents.length > 0) {
          groupComponents.sort((a, b) => a.name.localeCompare(b.name))
          categories.push({
            name: item.name,
            components: groupComponents,
            parentCategory: category.name,
          })
        }
      }
    }

    components.sort((a, b) => a.name.localeCompare(b.name))
    buildManualEntries(category.name, components)
    categories.push({ name: category.name, components })
  }

  // Sort by categoryOrder
  const order = CONFIG.categoryOrder
  categories.sort((a, b) => {
    const aParent = a.parentCategory
    const bParent = b.parentCategory
    const aOrder = aParent !== undefined ? order.indexOf(aParent) : order.indexOf(a.name)
    const bOrder = bParent !== undefined ? order.indexOf(bParent) : order.indexOf(b.name)
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

  return categories
}

// ── 5. Output ──────────────────────────────────────────────────────────

function writeOutput(categories) {
  const output = { categoryOrder: CONFIG.categoryOrder, categories }
  const json = JSON.stringify(output, null, 2)
  writeFileSync(OUT_FILE, json + '\n')
}

// ── Entry point ────────────────────────────────────────────────────────

const raw = scanCategories()
const enriched = enrichItems(raw)
const final = transformCategories(enriched)
writeOutput(final)
