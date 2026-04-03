import { useState, useMemo, type ReactNode } from 'react'
import { ConfigProvider, Input, Checkbox, Button, Empty, Typography, Flex, Center } from 'src/components'
import { Icon } from 'src/components/general/Icon/Icon'
import type { IconNames } from 'src/types/icons'
import {
  ColorBgContainer,
  ColorBorderSecondary,
  LineWidth,
  RoktGray2,
  RoktGray3,
  RoktGray6,
  RoktBrand1,
  BorderRadius,
  BoxShadow,
  PaddingXs,
  PaddingSm,
  PaddingXxs,
  MarginXs,
  SizeSm,
} from 'src/styles/style'

export interface IDimensionCategory {
  key: string
  label: string
  icon?: IconNames
}

export interface IDimensionItem {
  key: string
  label: string
  categoryKey: string
  description?: string
  disabled?: boolean
}

export interface IDimensionPickerProps {
  categoryTitle?: string
  descriptionTitle?: string
  categories: IDimensionCategory[]
  items: IDimensionItem[]
  value?: string[]
  defaultValue?: string[]
  onChange?: (selectedKeys: string[]) => void
  onApply?: (selectedKeys: string[]) => void
  onClearAll?: () => void
  /** Controlled search query — pair with `onSearch` for async/server-side filtering */
  searchValue?: string
  onSearch?: (query: string) => void
  searchPlaceholder?: string
  clearAllText?: string
  applyText?: string
  showApplyButton?: boolean
  showClearAllButton?: boolean
  showDescriptionPanel?: boolean
  size?: 'default' | 'compact'
  /** Custom render for each item row. Receives the item and its checked state. */
  renderItem?: (item: IDimensionItem, checked: boolean) => ReactNode
  /** Custom render for each category row. Receives the category and its selected state. */
  renderCategory?: (category: IDimensionCategory, selected: boolean) => ReactNode
  /** Custom render for the description panel content. Receives the currently hovered item or null. */
  renderDescription?: (item: IDimensionItem | null) => ReactNode
  /** Extra content rendered on the left side of the footer, alongside the Clear/Apply buttons. */
  footerContent?: ReactNode
  /** Content rendered above the search bar. */
  headerContent?: ReactNode
  emptyContent?: ReactNode
  className?: string
  loading?: boolean
}

const sizeConfig = {
  default: {
    contentMinHeight: 400,
    contentMaxHeight: 500,
    categoryWidth: 220,
    descriptionWidth: 260,
    itemPadding: `${PaddingXxs} ${PaddingSm}`,
    categoryPadding: `6px ${PaddingSm}`,
  },
  compact: {
    contentMinHeight: 280,
    contentMaxHeight: 360,
    categoryWidth: 180,
    descriptionWidth: 200,
    itemPadding: `${PaddingXxs} ${PaddingXs}`,
    categoryPadding: `4px ${PaddingXs}`,
  },
}

export const DimensionPicker = ({
  categoryTitle = 'Dimensions categories',
  descriptionTitle = 'Description',
  categories,
  items,
  value,
  defaultValue = [],
  onChange,
  onApply,
  onClearAll,
  searchValue,
  onSearch,
  searchPlaceholder = 'Search',
  clearAllText = 'Clear all',
  applyText = 'Apply',
  showApplyButton = true,
  showClearAllButton = true,
  showDescriptionPanel = true,
  size = 'default',
  renderItem,
  renderCategory,
  renderDescription,
  footerContent,
  headerContent,
  emptyContent,
  className,
  loading = false,
}: IDimensionPickerProps) => {
  const [internalSearchQuery, setInternalSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]?.key ?? '')
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const [hoveredItem, setHoveredItem] = useState<IDimensionItem | null>(null)
  const [internalSelected, setInternalSelected] = useState<string[]>(defaultValue)

  const selectedKeys = value ?? internalSelected
  const effectiveSearchQuery = searchValue ?? internalSearchQuery
  const config = sizeConfig[size]

  const setSelectedKeys = (keys: string[]) => {
    if (value === undefined) {
      setInternalSelected(keys)
    }
    onChange?.(keys)
  }

  const handleSearchChange = (query: string) => {
    if (searchValue === undefined) {
      setInternalSearchQuery(query)
    }
    onSearch?.(query)
  }

  const filteredItems = useMemo(() => {
    let filtered = items.filter(item => item.categoryKey === selectedCategory)
    if (effectiveSearchQuery) {
      const query = effectiveSearchQuery.toLowerCase()
      filtered = filtered.filter(item => item.label.toLowerCase().includes(query))
    }
    return filtered
  }, [items, selectedCategory, effectiveSearchQuery])

  const handleItemToggle = (itemKey: string) => {
    const newSelected = selectedKeys.includes(itemKey)
      ? selectedKeys.filter(key => key !== itemKey)
      : [...selectedKeys, itemKey]
    setSelectedKeys(newSelected)
  }

  const handleClearAll = () => {
    setSelectedKeys([])
    onClearAll?.()
  }

  const handleApply = () => {
    onApply?.(selectedKeys)
  }

  const selectedCount = selectedKeys.length

  return (
    <ConfigProvider>
      <Flex
        vertical
        className={className}
        style={{
          background: ColorBgContainer,
          border: `${LineWidth} solid ${RoktGray3}`,
          borderRadius: BorderRadius,
          minWidth: 800,
          maxWidth: 1000,
          boxShadow: BoxShadow,
        }}>
        {headerContent && (
          <div style={{ padding: `${PaddingXs} ${PaddingSm}`, borderBottom: `${LineWidth} solid ${RoktGray3}` }}>
            {headerContent}
          </div>
        )}

        <div style={{ padding: `${PaddingXs} ${PaddingSm}`, borderBottom: `${LineWidth} solid ${RoktGray3}` }}>
          <Input
            prefix={<Icon name="search" size="sm" color="default" />}
            placeholder={searchPlaceholder}
            value={effectiveSearchQuery}
            onChange={e => handleSearchChange(e.target.value)}
            allowClear
          />
        </div>

        <Flex style={{ flex: 1, minHeight: config.contentMinHeight, maxHeight: config.contentMaxHeight }}>
          <Flex
            vertical
            style={{ width: config.categoryWidth, borderRight: `${LineWidth} solid ${RoktGray3}`, flexShrink: 0 }}>
            <Typography.Text size="sm" type="secondary" style={{ display: 'block', padding: `10px ${PaddingSm} 6px` }}>
              {categoryTitle}
            </Typography.Text>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, overflowY: 'auto', flex: 1 }}>
              {categories.map(category => {
                const isSelected = selectedCategory === category.key
                return (
                  <li
                    key={category.key}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: SizeSm,
                      padding: config.categoryPadding,
                      cursor: 'pointer',
                      borderLeft: `3px solid ${isSelected ? RoktGray6 : 'transparent'}`,
                      backgroundColor: isSelected
                        ? ColorBorderSecondary
                        : hoveredCategory === category.key
                          ? RoktGray2
                          : undefined,
                      transition: 'background-color 0.2s ease',
                    }}
                    onClick={() => setSelectedCategory(category.key)}
                    onMouseEnter={() => setHoveredCategory(category.key)}
                    onMouseLeave={() => setHoveredCategory(null)}>
                    {renderCategory ? (
                      renderCategory(category, isSelected)
                    ) : (
                      <>
                        {category.icon && <Icon name={category.icon} size="sm" color="default" />}
                        <Typography.Text
                          size="sm"
                          style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {category.label}
                        </Typography.Text>
                      </>
                    )}
                  </li>
                )
              })}
            </ul>
          </Flex>

          <div style={{ flex: 1, overflowY: 'auto', borderRight: `${LineWidth} solid ${RoktGray3}`, minWidth: 280 }}>
            {loading ? (
              <Center style={{ height: '100%', padding: '40px 20px' }}>
                <Typography.Text type="secondary">Loading...</Typography.Text>
              </Center>
            ) : filteredItems.length === 0 ? (
              <Center style={{ height: '100%', padding: '40px 20px' }}>
                {emptyContent ?? <Empty description="No dimensions found" />}
              </Center>
            ) : (
              <ul style={{ listStyle: 'none', margin: 0, padding: `${PaddingXxs} 0` }}>
                {filteredItems.map(item => {
                  const isChecked = selectedKeys.includes(item.key)
                  return (
                    <li
                      key={item.key}
                      style={{
                        padding: config.itemPadding,
                        backgroundColor: hoveredItem?.key === item.key ? RoktBrand1 : undefined,
                        transition: 'background-color 0.15s ease',
                      }}
                      onMouseEnter={() => setHoveredItem(item)}
                      onMouseLeave={() => setHoveredItem(null)}>
                      {renderItem ? (
                        renderItem(item, isChecked)
                      ) : (
                        <Checkbox
                          checked={isChecked}
                          disabled={item.disabled}
                          onChange={() => handleItemToggle(item.key)}
                          style={{ width: '100%' }}>
                          <Typography.Text size="sm">{item.label}</Typography.Text>
                        </Checkbox>
                      )}
                    </li>
                  )
                })}
              </ul>
            )}
          </div>

          {showDescriptionPanel && (
            <Flex
              vertical
              style={{
                width: config.descriptionWidth,
                padding: `10px ${PaddingSm}`,
                backgroundColor: ColorBgContainer,
                flexShrink: 0,
              }}>
              {renderDescription ? (
                renderDescription(hoveredItem)
              ) : (
                <>
                  <Typography.Text size="sm" type="secondary" style={{ display: 'block', marginBottom: MarginXs }}>
                    {descriptionTitle}
                  </Typography.Text>
                  <Typography.Paragraph size="sm" style={{ marginBottom: 0 }}>
                    {hoveredItem?.description ?? 'Hover over a dimension to see its description.'}
                  </Typography.Paragraph>
                </>
              )}
            </Flex>
          )}
        </Flex>

        {(showClearAllButton || showApplyButton || footerContent) && (
          <Flex
            justify="flex-end"
            align="center"
            gap={MarginXs}
            style={{
              padding: `${PaddingXs} ${PaddingSm}`,
              borderTop: `${LineWidth} solid ${RoktGray3}`,
              backgroundColor: ColorBgContainer,
              borderRadius: `0 0 ${BorderRadius}px ${BorderRadius}px`,
            }}>
            {footerContent && <Flex style={{ flex: 1 }}>{footerContent}</Flex>}
            {showClearAllButton && (
              <Button type="text" onClick={handleClearAll} disabled={selectedCount === 0}>
                {clearAllText}
              </Button>
            )}
            {showApplyButton && (
              <Button type="primary" onClick={handleApply}>
                {applyText} {selectedCount > 0 && `(${selectedCount})`}
              </Button>
            )}
          </Flex>
        )}
      </Flex>
    </ConfigProvider>
  )
}
