import { useState, useMemo, type ReactNode } from 'react'
import { ConfigProvider, Input, Checkbox, Button, Empty, Typography } from 'src/components'
import { Icon } from 'src/components/general/Icon/Icon'
import type { IconNames } from 'src/types/icons'
import './dimension-picker.css'

export interface IDimensionCategory {
  /** Unique identifier for the category */
  key: string
  /** Display label for the category */
  label: string
  /** Icon name from the icon library */
  icon?: IconNames
}

export interface IDimensionItem {
  /** Unique identifier for the dimension item */
  key: string
  /** Display label for the dimension */
  label: string
  /** Category key this dimension belongs to */
  categoryKey: string
  /** Optional description shown in the details panel */
  description?: string
  /** Whether this item is disabled */
  disabled?: boolean
}

export interface IDimensionPickerProps {
  /** Title shown above the category list */
  categoryTitle?: string
  /** Title shown above the description panel */
  descriptionTitle?: string
  /** List of available categories */
  categories: IDimensionCategory[]
  /** List of all dimension items */
  items: IDimensionItem[]
  /** Currently selected dimension keys */
  value?: string[]
  /** Default selected dimension keys (uncontrolled mode) */
  defaultValue?: string[]
  /** Callback when selection changes */
  onChange?: (selectedKeys: string[]) => void
  /** Callback when Apply button is clicked */
  onApply?: (selectedKeys: string[]) => void
  /** Callback when Clear all button is clicked */
  onClearAll?: () => void
  /** Placeholder text for the search input */
  searchPlaceholder?: string
  /** Text for the Clear all button */
  clearAllText?: string
  /** Text for the Apply button (count will be appended) */
  applyText?: string
  /** Whether to show the Apply button */
  showApplyButton?: boolean
  /** Whether to show the Clear all button */
  showClearAllButton?: boolean
  /** Whether to show the description panel */
  showDescriptionPanel?: boolean
  /** Custom empty state when no items match search */
  emptyContent?: ReactNode
  /** Custom className for the container */
  className?: string
  /** Loading state */
  loading?: boolean
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
  searchPlaceholder = 'Search',
  clearAllText = 'Clear all',
  applyText = 'Apply',
  showApplyButton = true,
  showClearAllButton = true,
  showDescriptionPanel = true,
  emptyContent,
  className = '',
  loading = false,
}: IDimensionPickerProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]?.key ?? '')
  const [hoveredItem, setHoveredItem] = useState<IDimensionItem | null>(null)
  const [internalSelected, setInternalSelected] = useState<string[]>(defaultValue)

  // Controlled vs uncontrolled
  const selectedKeys = value ?? internalSelected
  const setSelectedKeys = (keys: string[]) => {
    if (value === undefined) {
      setInternalSelected(keys)
    }
    onChange?.(keys)
  }

  // Filter items by category and search
  const filteredItems = useMemo(() => {
    let filtered = items.filter(item => item.categoryKey === selectedCategory)

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(item => item.label.toLowerCase().includes(query))
    }

    return filtered
  }, [items, selectedCategory, searchQuery])

  // Handle item selection
  const handleItemToggle = (itemKey: string) => {
    const newSelected = selectedKeys.includes(itemKey)
      ? selectedKeys.filter(key => key !== itemKey)
      : [...selectedKeys, itemKey]
    setSelectedKeys(newSelected)
  }

  // Handle clear all
  const handleClearAll = () => {
    setSelectedKeys([])
    onClearAll?.()
  }

  // Handle apply
  const handleApply = () => {
    onApply?.(selectedKeys)
  }

  const selectedCount = selectedKeys.length

  return (
    <ConfigProvider>
      <div className={`dimension-picker ${className}`}>
        {/* Search Bar */}
        <div className="dimension-picker__search">
          <Input
            prefix={<Icon name="search" size="sm" color="default" />}
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            allowClear
          />
        </div>

        {/* Main Content */}
        <div className="dimension-picker__content">
          {/* Categories Panel */}
          <div className="dimension-picker__categories">
            <Typography.Text size="sm" type="secondary" className="dimension-picker__categories-title">
              {categoryTitle}
            </Typography.Text>
            <ul className="dimension-picker__categories-list">
              {categories.map(category => {
                const isSelected = selectedCategory === category.key
                return (
                  <li
                    key={category.key}
                    className={`dimension-picker__category-item ${isSelected ? 'dimension-picker__category-item--selected' : ''}`}
                    onClick={() => setSelectedCategory(category.key)}>
                    {category.icon && <Icon name={category.icon} size="sm" color="default" />}
                    <Typography.Text size="sm" className="dimension-picker__category-label">
                      {category.label}
                    </Typography.Text>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Items Panel */}
          <div className="dimension-picker__items">
            {loading ? (
              <div className="dimension-picker__loading">
                <Typography.Text type="secondary">Loading...</Typography.Text>
              </div>
            ) : filteredItems.length === 0 ? (
              <div className="dimension-picker__empty">
                {emptyContent ?? <Empty description="No dimensions found" />}
              </div>
            ) : (
              <ul className="dimension-picker__items-list">
                {filteredItems.map(item => {
                  const isChecked = selectedKeys.includes(item.key)
                  const isHovered = hoveredItem?.key === item.key
                  return (
                    <li
                      key={item.key}
                      className={`dimension-picker__item ${isHovered ? 'dimension-picker__item--hovered' : ''}`}
                      onMouseEnter={() => setHoveredItem(item)}
                      onMouseLeave={() => setHoveredItem(null)}>
                      <Checkbox
                        checked={isChecked}
                        disabled={item.disabled}
                        onChange={() => handleItemToggle(item.key)}>
                        <Typography.Text size="sm">{item.label}</Typography.Text>
                      </Checkbox>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>

          {/* Description Panel */}
          {showDescriptionPanel && (
            <div className="dimension-picker__description">
              <Typography.Text size="sm" type="secondary" className="dimension-picker__description-title">
                {descriptionTitle}
              </Typography.Text>
              <Typography.Paragraph size="sm" className="dimension-picker__description-content">
                {hoveredItem?.description ?? 'Hover over a dimension to see its description.'}
              </Typography.Paragraph>
            </div>
          )}
        </div>

        {/* Footer */}
        {(showClearAllButton || showApplyButton) && (
          <div className="dimension-picker__footer">
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
          </div>
        )}
      </div>
    </ConfigProvider>
  )
}
