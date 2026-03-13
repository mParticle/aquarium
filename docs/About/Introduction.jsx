import React from 'react'
import categoriesData from './componentCategories.json'
import { Card } from '../../src/components'
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

function getDocsPath(categoryName, componentName, parentFolder) {
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
  const queryPath = getDocsPath(linkCategory, component.name, component.parentFolder)
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
          <div style={{ fontSize: FontSizeSm, color: ColorTextTertiary }}>
            {component.variantCount <= 1
              ? '1 component'
              : `1 component · ${component.variantCount} variants`}
          </div>
        </div>
      </Card>
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
      <h3 style={{ fontSize: FontSize, fontWeight: FontWeightStrong, marginBottom: Margin, color: ColorText }}>
        {category.name}
        <span style={{ fontSize: FontSizeSm, fontWeight: 400, color: ColorTextTertiary, marginLeft: PaddingXs }}>
          {components.length} components
        </span>
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          columnGap: Margin,
          rowGap: 24,
        }}
      >
        {components.map((component) => (
          <ComponentCard
            key={component.name}
            component={component}
            category={category}
          />
        ))}
      </div>
    </section>
  )
}

export default function Introduction() {
  const categories = categoriesData.categories.filter(
    (cat) => cat.name !== 'Not Prod Ready' && cat.components.length > 0
  )

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
        Simple, flexible, and reliable—this library helps you focus on building great experiences without
        worrying about the basics.
      </p>
    </div>
  )
}
