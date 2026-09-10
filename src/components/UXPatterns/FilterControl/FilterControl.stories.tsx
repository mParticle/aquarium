import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Checkbox, FilterControl, Flex, InputNumber, Typography } from 'src/components'
import { ColorTextSecondary, Padding, PaddingSm, PaddingXxs, SizeSm, SizeXs } from 'src/styles/style'

const meta: Meta<typeof FilterControl> = {
  title: 'UX Patterns/Inline Controls/Filter Control',
  component: FilterControl,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'FilterControl is an opinionated trigger and popover shell for filters that keep draft state until a user applies changes. Consumers provide the value type, empty-state logic, trigger label, and filter-specific content.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof FilterControl>

const ProductSetOptions = [
  { label: 'All products', value: 'all-products' },
  { label: 'New arrivals', value: 'new-arrivals' },
  { label: 'Best sellers', value: 'best-sellers' },
  { label: 'Clearance', value: 'clearance' },
]

const getProductSetButtonText = (value: string[]) => {
  if (value.length === 0) return 'Product set'
  if (value.length === 1) return ProductSetOptions.find(option => option.value === value[0])?.label ?? '1 selected'
  return `${value.length} selected`
}

const ProductSetFilterExample = () => {
  const [value, setValue] = useState(['new-arrivals'])

  return (
    <FilterControl
      id="storybook-product-set-filter"
      value={value}
      onChange={setValue}
      getEmptyValue={() => []}
      isEmpty={currentValue => currentValue.length === 0}
      renderButtonContent={({ value: currentValue }) => getProductSetButtonText(currentValue)}
      bodyProps={{ style: { padding: `${PaddingXxs} 0` } }}>
      {({ draftValue, setDraftValue }) => (
        <Flex vertical>
          {ProductSetOptions.map(option => (
            <Checkbox
              key={option.value}
              checked={draftValue.includes(option.value)}
              onChange={event => {
                setDraftValue(previousValue =>
                  event.target.checked
                    ? [...previousValue, option.value]
                    : previousValue.filter(selectedValue => selectedValue !== option.value),
                )
              }}
              style={{ padding: `${PaddingXxs} ${PaddingSm}` }}>
              {option.label}
            </Checkbox>
          ))}
        </Flex>
      )}
    </FilterControl>
  )
}

interface IPriceRange {
  min?: number
  max?: number
}

const EmptyPriceRange: IPriceRange = {}

const getPriceRangeButtonText = (value: IPriceRange) => {
  if (value.min === undefined && value.max === undefined) return 'Price range'
  if (value.min !== undefined && value.max !== undefined) return `$${value.min} - $${value.max}`
  if (value.min !== undefined) return `From $${value.min}`
  return `Up to $${value.max}`
}

const PriceRangeFilterExample = () => {
  const [value, setValue] = useState<IPriceRange>({ min: 25, max: 100 })

  return (
    <FilterControl
      id="storybook-price-range-filter"
      value={value}
      onChange={setValue}
      getEmptyValue={() => EmptyPriceRange}
      isEmpty={currentValue => currentValue.min === undefined && currentValue.max === undefined}
      renderButtonContent={({ value: currentValue }) => getPriceRangeButtonText(currentValue)}
      isApplyDisabled={draftValue =>
        draftValue.min !== undefined && draftValue.max !== undefined && draftValue.min > draftValue.max
      }
      bodyProps={{ style: { padding: `${PaddingSm} ${Padding} ${PaddingXxs}` } }}>
      {({ draftValue, setDraftValue }) => (
        <Flex vertical gap={SizeSm}>
          <Typography.Text style={{ color: ColorTextSecondary }}>
            Choose a minimum and maximum price for the table.
          </Typography.Text>
          <Flex align="center" gap={SizeXs}>
            <InputNumber
              aria-label="Minimum price"
              min={0}
              prefix="$"
              placeholder="Min"
              value={draftValue.min}
              onChange={nextValue => {
                setDraftValue(previousValue => ({
                  ...previousValue,
                  min: typeof nextValue === 'number' ? nextValue : undefined,
                }))
              }}
            />
            <Typography.Text style={{ color: ColorTextSecondary }}>to</Typography.Text>
            <InputNumber
              aria-label="Maximum price"
              min={0}
              prefix="$"
              placeholder="Max"
              value={draftValue.max}
              onChange={nextValue => {
                setDraftValue(previousValue => ({
                  ...previousValue,
                  max: typeof nextValue === 'number' ? nextValue : undefined,
                }))
              }}
            />
          </Flex>
        </Flex>
      )}
    </FilterControl>
  )
}

export const ProductSetValue: Story = {
  render: () => <ProductSetFilterExample />,
}

export const ObjectValue: Story = {
  render: () => <PriceRangeFilterExample />,
}
