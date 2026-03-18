import React from 'react'
import categoriesData from './componentCategories.json'
import { Card, Icon } from '../../src/components'
import './Introduction.css'
import {
  ColorBgLayout,
  BorderRadius,
  FontSize,
  FontSizeSm,
  FontWeightStrong,
  ColorTextSecondary,
  ColorTextTertiary,
  ColorText,
  Margin,
  MarginSm,
  PaddingSm,
  PaddingXs,
} from 'src/styles/style'

function toKebab(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')
}

function categoryToSlug(name) {
  return name.toLowerCase().replace(/\s+/g, '-')
}

function getDocsPath(categoryName, componentName, parentFolder, storyId) {
  if (storyId) {
    return `?path=/docs/${storyId}`
  }
  const categorySlug = categoryToSlug(categoryName)
  const componentSlug =
    categoryName === 'Navigation' && componentName === 'GlobalNavigation'
      ? 'globalnavigation'
      : toKebab(componentName)
  if (categoryName === 'Layout') {
    return `?path=/story/components-layout-${componentSlug}--primary`
  }
  if (parentFolder) {
    const parentSlug = toKebab(parentFolder)
    return `?path=/docs/components-${categorySlug}-${parentSlug}-${componentSlug}--documentation`
  }
  return `?path=/docs/components-${categorySlug}-${componentSlug}--documentation`
}

const CATEGORY_ORDER = ['General', 'Data Display', 'Data Entry', 'Feedback', 'Modal', 'Navigation']

function getBaseUrl() {
  if (typeof window === 'undefined') return '/'
  const hostname = window.top.location.hostname
  if (hostname === 'localhost' || hostname.startsWith('127.')) {
    return `${window.top.location.origin}/`
  }
  if (hostname.includes('mparticle.github.io')) {
    return `${window.top.location.origin}/aquarium/`
  }
  return `${window.top.location.origin}/`
}

const previewContainerStyle = {
  background: ColorBgLayout,
  borderRadius: BorderRadius,
  minHeight: 120,
  maxHeight: 120,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
  overflow: 'hidden',
}

function ComponentCard({ component, category }) {
  const linkCategory = category.parentCategory || category.name
  const queryPath = getDocsPath(linkCategory, component.name, component.parentFolder, component.storyId)
  const fullUrl = getBaseUrl() + queryPath

  function handleClick(e) {
    e.preventDefault()
    window.top.location.href = fullUrl
  }

  return (
    <a
      href={fullUrl}
      onClick={handleClick}
      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
    >
      <Card
        rootClassName="intro-component-card"
        style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
        styles={{ body: { padding: PaddingXs } }}
      >
        <div style={previewContainerStyle} />
        <div style={{ marginTop: MarginSm }}>
          <div style={{ fontWeight: FontWeightStrong, fontSize: FontSize }}>{component.name}</div>
        </div>
      </Card>
    </a>
  )
}

const cardGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  columnGap: Margin,
  rowGap: 24,
}

function ComponentGrid({ components, category }) {
  return (
    <div style={cardGridStyle}>
      {components.map((component) => (
        <ComponentCard key={component.name} component={component} category={category} />
      ))}
    </div>
  )
}

function CategorySection({ category }) {
  if (!category?.components) return null
  const components =
    category.name === 'Navigation'
      ? category.components.filter((c) => c.name === 'GlobalNavigation')
      : category.components

  const groups = []
  let currentGroup = null
  for (const comp of components) {
    const groupName = comp.group || null
    if (groupName !== currentGroup) {
      groups.push({ name: groupName, components: [] })
      currentGroup = groupName
    }
    groups[groups.length - 1].components.push(comp)
  }

  return (
    <section style={{ marginBottom: 40 }}>
      <h3 style={{ fontSize: FontSize, fontWeight: FontWeightStrong, marginBottom: Margin, color: ColorText }}>
        {category.name}
        <span style={{ fontSize: FontSizeSm, fontWeight: 400, color: ColorTextTertiary, marginLeft: PaddingXs }}>
          {components.length} components
        </span>
      </h3>
      {groups.map((group) => (
        <div key={group.name || '_default'} style={{ marginBottom: Margin }}>
          {group.name && (
            <div style={{ fontSize: FontSizeSm, color: ColorTextSecondary, marginBottom: MarginSm }}>
              {group.name}
            </div>
          )}
          <ComponentGrid components={group.components} category={category} />
        </div>
      ))}
    </section>
  )
}

export default function Introduction() {
  const filtered = categoriesData.categories.filter(
    (cat) =>
      cat.name !== 'Not Prod Ready' &&
      cat.name !== 'Navigation' &&
      cat.components.length > 0
  )
  const categories = [...filtered].sort((a, b) => {
    const i = CATEGORY_ORDER.indexOf(a.name)
    const j = CATEGORY_ORDER.indexOf(b.name)
    if (i !== -1 && j !== -1) return i - j
    if (i !== -1) return -1
    if (j !== -1) return 1
    return a.name.localeCompare(b.name)
  })

  return (
    <div>
      <h1 style={{ fontSize: 24, fontWeight: FontWeightStrong, marginBottom: MarginSm }}>Introduction - Rokt UI Library</h1>
      <p style={{ marginBottom: 32, color: ColorTextSecondary, lineHeight: 1.6 }}>
        Designed for developers, designers, and product managers, this library makes it easy to create
        intuitive, interactive interfaces for <strong>Rokt applications</strong>.
      </p>
      {categories.map((category) => (
        <CategorySection key={category.name} category={category} />
      ))}
      <p style={{ marginTop: 32, color: ColorTextSecondary, lineHeight: 1.6 }}>
        Made with <Icon name="favorite" size="md" className="intro-footer-heart" /> by Designers &
        Developers of Rokt
      </p>
    </div>
  )
}
