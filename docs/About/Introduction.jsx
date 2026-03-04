import React from 'react'
import categoriesData from './componentCategories.json'

function toKebab(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')
}

function categoryToSlug(name) {
  return name.toLowerCase().replace(/\s+/g, '-')
}

function getDocsPath(categoryName, componentName) {
  const categorySlug = categoryToSlug(categoryName)
  const componentSlug =
    categoryName === 'Navigation' && componentName === 'GlobalNavigation'
      ? 'globalnavigation'
      : toKebab(componentName)
  if (categoryName === 'Layout') {
    return `?path=/story/components-layout-${componentSlug}--primary`
  }
  return `?path=/docs/components-${categorySlug}-${componentSlug}--documentation`
}

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
  background: '#F5F5F5',
  borderRadius: 8,
  minHeight: 120,
  maxHeight: 120,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
  overflow: 'hidden',
}

function ComponentCard({ component, categoryName }) {
  const queryPath = getDocsPath(categoryName, component.name)
  const fullUrl = getBaseUrl() + queryPath

  function handleClick(e) {
    e.preventDefault()
    window.top.location.href = fullUrl
  }

  return (
    <a
      href={fullUrl}
      onClick={handleClick}
      style={{
        background: 'white',
        border: '1px solid #f0f0f0',
        borderRadius: 10,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        color: 'inherit',
        cursor: 'pointer',
      }}
    >
      <div style={previewContainerStyle} />
      <div style={{ padding: '8px 12px' }}>
        <div style={{ fontWeight: 600, fontSize: 14 }}>{component.name}</div>
        <div style={{ fontSize: 12, color: '#888' }}>
          1 component · {component.variantCount} variants
        </div>
      </div>
    </a>
  )
}

function CategorySection({ category }) {
  const components =
    category.name === 'Navigation'
      ? category.components.filter((c) => c.name === 'GlobalNavigation')
      : category.components

  return (
    <section style={{ marginBottom: 40 }}>
      <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: '#111' }}>
        {category.name}
        <span style={{ fontSize: 12, fontWeight: 400, color: '#888', marginLeft: 8 }}>
          {components.length} components
        </span>
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          columnGap: 16,
          rowGap: 24,
        }}
      >
        {components.map((component) => (
          <ComponentCard
            key={component.name}
            component={component}
            categoryName={category.name}
          />
        ))}
      </div>
    </section>
  )
}

export default function Introduction() {
  const categories = categoriesData.categories.filter(
    (cat) => cat.name !== 'Not Prod Ready'
  )

  return (
    <div>
      <h1 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>Introduction - Rokt UI Library</h1>
      <p style={{ marginBottom: 32, color: 'rgba(0,0,0,0.65)', lineHeight: 1.6 }}>
        Designed for developers, designers, and product managers, this library makes it easy to create
        intuitive, interactive interfaces for <strong>Rokt applications</strong>.
      </p>
      {categories.map((category) => (
        <CategorySection key={category.name} category={category} />
      ))}
      <p style={{ marginTop: 32, color: 'rgba(0,0,0,0.65)', lineHeight: 1.6 }}>
        Simple, flexible, and reliable—this library helps you focus on building great experiences without
        worrying about the basics.
      </p>
    </div>
  )
}
