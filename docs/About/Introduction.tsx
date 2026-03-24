import React, { useState } from 'react'
import categoriesData from './componentCategories.json'
import { Card, Flex, Icon, Typography } from '../../src/components'
import { ColorBgLayout, PaddingXxs, Margin, MarginSm, MarginXl, PaddingXs, PaddingSm } from 'src/styles/style'

interface ComponentEntry {
  name: string
  variantCount?: number
  group?: string
  parentFolder?: string
  storyId?: string
}

interface Category {
  name: string
  components?: ComponentEntry[]
  parentCategory?: string
}

function toKebab(str: string) {
  return str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '')
}

function categoryToSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, '-')
}

function getDocsPath(categoryName: string, componentName: string, parentFolder?: string, storyId?: string) {
  if (storyId) {
    return `?path=/docs/${storyId}`
  }
  const categorySlug = categoryToSlug(categoryName)
  const componentSlug =
    categoryName === 'Navigation' && componentName === 'GlobalNavigation' ? 'globalnavigation' : toKebab(componentName)
  if (categoryName === 'Layout') {
    return `?path=/story/components-layout-${componentSlug}--primary`
  }
  if (parentFolder) {
    const parentSlug = toKebab(parentFolder)
    return `?path=/docs/components-${categorySlug}-${parentSlug}-${componentSlug}--documentation`
  }
  return `?path=/docs/components-${categorySlug}-${componentSlug}--documentation`
}

const CATEGORY_ORDER = categoriesData?.categoryOrder || []

const cardBannerImageStyle: React.CSSProperties = {
  width: '100%',
  height: 134,
  objectFit: 'cover',
  borderRadius: '8px 8px 0 0',
}

/** Vite resolves these URLs so images work in Storybook dev/build without relying on staticDirs or window.top. */
const bannerAssetUrls = import.meta.glob('./banners/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

/** Matches banner files like `rokticons.png` for display names such as "Rokt Icons" (lowercase, no spaces). */
function bannerFileBasenameFromComponentName(componentName: string) {
  return componentName.toLowerCase().replace(/\s+/g, '')
}

function getBannerAssetUrl(componentName: string): string | undefined {
  const suffix = `${bannerFileBasenameFromComponentName(componentName)}.png`
  const entry = Object.entries(bannerAssetUrls).find(([path]) => path.replace(/\\/g, '/').endsWith(`/${suffix}`))
  return entry?.[1]
}

function getBaseUrl() {
  if (typeof window === 'undefined') return '/'
  const hostname = window.top?.location.hostname ?? ''
  if (hostname === 'localhost' || hostname.startsWith('127.')) {
    return `${window.top!.location.origin}/`
  }
  if (hostname.includes('mparticle.github.io')) {
    return `${window.top!.location.origin}/aquarium/`
  }
  return `${window.top!.location.origin}/`
}

function CardBannerPreview({ componentName }: { componentName: string }) {
  const [imageFailed, setImageFailed] = useState(false)
  const src = getBannerAssetUrl(componentName)

  if (!src || imageFailed) {
    return (
      <div
        style={{
          background: ColorBgLayout,
          width: '100%',
          height: 134,
          borderRadius: '8px 8px 0 0',
          pointerEvents: 'none',
        }}
      />
    )
  }

  return (
    <img
      src={src}
      alt=""
      onError={() => setImageFailed(true)}
      style={{ ...cardBannerImageStyle, pointerEvents: 'none' }}
    />
  )
}

function ComponentCard({ component, category }: { component: ComponentEntry; category: Category }) {
  const linkCategory = category.parentCategory || category.name
  const queryPath = getDocsPath(linkCategory, component.name, component.parentFolder, component.storyId)
  const fullUrl = getBaseUrl() + queryPath

  return (
    <a href={fullUrl} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card hoverable styles={{ body: { padding: PaddingXxs } }}>
        <CardBannerPreview componentName={component.name} />
        <div style={{ padding: `0 ${PaddingSm} ${PaddingXs} ${PaddingSm}` }}>
          <Typography.Text size="base" style={{ display: 'block', marginTop: MarginSm }}>
            {component.name}
          </Typography.Text>
        </div>
      </Card>
    </a>
  )
}

function ComponentGrid({ components, category }: { components: ComponentEntry[]; category: Category }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        columnGap: Margin,
        rowGap: Margin,
      }}>
      {components.map(component => (
        <ComponentCard key={component.name} component={component} category={category} />
      ))}
    </div>
  )
}

function CategorySection({ category }: { category: Category }) {
  if (!category?.components) return null
  const components =
    category.name === 'Navigation'
      ? category.components.filter(c => c.name === 'GlobalNavigation')
      : category.components

  const groups: { name: string | null; components: ComponentEntry[] }[] = []
  let currentGroup: string | null = '__initial__'
  for (const comp of components) {
    const groupName = comp.group || null
    if (groupName !== currentGroup) {
      groups.push({ name: groupName, components: [] })
      currentGroup = groupName
    }
    groups[groups.length - 1].components.push(comp)
  }

  return (
    <section style={{ marginBottom: MarginXl }}>
      <Flex align="baseline" gap={PaddingXs} style={{ marginBottom: Margin }}>
        <Typography.Title level={5} style={{ margin: 0 }}>
          {category.name}
        </Typography.Title>
        <Typography.Text type="secondary" size="sm">
          {components.length} components
        </Typography.Text>
      </Flex>
      {groups.map(group => (
        <div key={group.name || '_default'} style={{ marginBottom: Margin }}>
          {group.name && (
            <Typography.Text
              type="secondary"
              size="base"
              strong
              style={{ display: 'block', paddingTop: PaddingXs, marginBottom: MarginSm }}>
              {group.name}
            </Typography.Text>
          )}
          <ComponentGrid components={group.components} category={category} />
        </div>
      ))}
    </section>
  )
}

export default function Introduction() {
  const filtered = (categoriesData?.categories || []).filter(
    cat => cat.name !== 'Navigation' && cat.components?.length > 0,
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
    <Flex vertical>
      <Typography.Title level={3}>Introduction - Rokt UI Library</Typography.Title>
      <Typography.Paragraph type="secondary" style={{ lineHeight: 1.6, marginBottom: MarginXl }}>
        Designed for developers, designers, and product managers, this library makes it easy to create intuitive,
        interactive interfaces for <strong>Rokt applications</strong>.
      </Typography.Paragraph>
      {categories.map(category => (
        <CategorySection key={category.name} category={category} />
      ))}
      <Typography.Paragraph type="secondary" size="sm">
        Made with{' '}
        <span style={{ verticalAlign: 'middle', display: 'inline-flex' }}>
          <Icon name="favorite" size="sm" color="brand" />
        </span>{' '}
        by Designers & Developers of Rokt
      </Typography.Paragraph>
    </Flex>
  )
}
