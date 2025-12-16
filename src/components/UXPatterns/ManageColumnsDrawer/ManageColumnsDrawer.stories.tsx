import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, message } from 'src/components'
import { ManageColumnsDrawer, type IColumnItem, type IManageColumnsDrawerProps } from './ManageColumnsDrawer'

const meta: Meta<typeof ManageColumnsDrawer> = {
  title: 'UX Patterns/ManageColumnsDrawer',
  component: ManageColumnsDrawer,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the drawer is visible',
    },
    title: {
      control: 'text',
      description: 'Custom title for the drawer',
    },
    description: {
      control: 'text',
      description: 'Custom description text',
    },
    dimensionsLabel: {
      control: 'text',
      description: 'Label for the dimensions section',
    },
    metricsLabel: {
      control: 'text',
      description: 'Label for the metrics section',
    },
    width: {
      control: 'number',
      description: 'Width of the drawer',
    },
  },
}

export default meta
type Story = StoryObj<typeof ManageColumnsDrawer>

const defaultDimensions: IColumnItem[] = [
  { id: 'day', label: 'Day' },
  { id: 'campaign_name', label: 'Campaign name' },
  { id: 'campaign_id', label: 'Campaign ID' },
]

const defaultMetrics: IColumnItem[] = [
  { id: 'gross_cost', label: 'Gross cost' },
  { id: 'impressions', label: 'Impressions' },
  { id: 'referrals', label: 'Referrals' },
  { id: 'conversion_rate', label: 'Conversion rate' },
  { id: 'conversions', label: 'Conversions' },
]

const InteractiveTemplate = (props: Partial<IManageColumnsDrawerProps>) => {
  const [open, setOpen] = useState(false)
  const [dimensions, setDimensions] = useState<IColumnItem[]>(defaultDimensions)
  const [metrics, setMetrics] = useState<IColumnItem[]>(defaultMetrics)

  const handleRename = (columnId: string, type: 'dimension' | 'metric') => {
    const items = type === 'dimension' ? dimensions : metrics
    const item = items.find(i => i.id === columnId)
    if (item) {
      void message.info(`Rename "${item.label}" (${type})`)
    }
  }

  const handleRemove = (columnId: string, type: 'dimension' | 'metric') => {
    if (type === 'dimension') {
      setDimensions(prev => prev.filter(item => item.id !== columnId))
    } else {
      setMetrics(prev => prev.filter(item => item.id !== columnId))
    }
    void message.success('Column removed')
  }

  return (
    <div style={{ padding: 24 }}>
      <Button type="primary" onClick={() => setOpen(true)}>
        Manage Columns
      </Button>

      <ManageColumnsDrawer
        open={open}
        onClose={() => setOpen(false)}
        dimensions={dimensions}
        metrics={metrics}
        onDimensionsChange={setDimensions}
        onMetricsChange={setMetrics}
        onRenameColumn={handleRename}
        onRemoveColumn={handleRemove}
        {...props}
      />
    </div>
  )
}

export const Default: Story = {
  render: () => <InteractiveTemplate />,
}

export const CustomLabels: Story = {
  render: () => (
    <InteractiveTemplate
      title="Configure Table Columns"
      description="Drag and drop to reorder columns. Use the actions menu to rename or remove columns."
      dimensionsLabel="Grouping columns"
      metricsLabel="Value columns"
    />
  ),
}

const DimensionsOnlyTemplate = () => {
  const [open, setOpen] = useState(false)
  const [dimensions, setDimensions] = useState<IColumnItem[]>([
    { id: 'country', label: 'Country' },
    { id: 'region', label: 'Region' },
    { id: 'city', label: 'City' },
    { id: 'device', label: 'Device Type' },
    { id: 'browser', label: 'Browser' },
  ])

  return (
    <div style={{ padding: 24 }}>
      <Button type="primary" onClick={() => setOpen(true)}>
        Manage Dimensions
      </Button>

      <ManageColumnsDrawer
        open={open}
        onClose={() => setOpen(false)}
        dimensions={dimensions}
        metrics={[]}
        onDimensionsChange={setDimensions}
        onMetricsChange={() => {}}
        onRenameColumn={id => {
          void message.info(`Rename column: ${id}`)
        }}
        onRemoveColumn={id => {
          setDimensions(prev => prev.filter(item => item.id !== id))
          void message.success('Column removed')
        }}
        title="Manage Dimensions"
        description="Reorder your grouping columns by dragging."
      />
    </div>
  )
}

export const DimensionsOnly: Story = {
  render: () => <DimensionsOnlyTemplate />,
}

const MetricsOnlyTemplate = () => {
  const [open, setOpen] = useState(false)
  const [metrics, setMetrics] = useState<IColumnItem[]>([
    { id: 'revenue', label: 'Revenue' },
    { id: 'cost', label: 'Cost' },
    { id: 'profit', label: 'Profit' },
    { id: 'roi', label: 'ROI' },
    { id: 'ctr', label: 'CTR' },
  ])

  return (
    <div style={{ padding: 24 }}>
      <Button type="primary" onClick={() => setOpen(true)}>
        Manage Metrics
      </Button>

      <ManageColumnsDrawer
        open={open}
        onClose={() => setOpen(false)}
        dimensions={[]}
        metrics={metrics}
        onDimensionsChange={() => {}}
        onMetricsChange={setMetrics}
        onRenameColumn={id => {
          void message.info(`Rename metric: ${id}`)
        }}
        onRemoveColumn={id => {
          setMetrics(prev => prev.filter(item => item.id !== id))
          void message.success('Metric removed')
        }}
        title="Manage Metrics"
        description="Reorder your value columns by dragging."
      />
    </div>
  )
}

export const MetricsOnly: Story = {
  render: () => <MetricsOnlyTemplate />,
}

const ReadOnlyTemplate = () => {
  const [open, setOpen] = useState(false)
  const [dimensions, setDimensions] = useState<IColumnItem[]>(defaultDimensions)
  const [metrics, setMetrics] = useState<IColumnItem[]>(defaultMetrics)

  return (
    <div style={{ padding: 24 }}>
      <Button type="primary" onClick={() => setOpen(true)}>
        View Columns (Reorder Only)
      </Button>

      <ManageColumnsDrawer
        open={open}
        onClose={() => setOpen(false)}
        dimensions={dimensions}
        metrics={metrics}
        onDimensionsChange={setDimensions}
        onMetricsChange={setMetrics}
        description="Drag to reorder columns."
      />
    </div>
  )
}

export const ReorderOnly: Story = {
  render: () => <ReadOnlyTemplate />,
}

const ManyColumnsTemplate = () => {
  const [open, setOpen] = useState(false)
  const [dimensions, setDimensions] = useState<IColumnItem[]>([
    { id: 'date', label: 'Date' },
    { id: 'campaign', label: 'Campaign' },
    { id: 'ad_group', label: 'Ad Group' },
    { id: 'ad', label: 'Ad' },
    { id: 'keyword', label: 'Keyword' },
    { id: 'device', label: 'Device' },
    { id: 'location', label: 'Location' },
  ])
  const [metrics, setMetrics] = useState<IColumnItem[]>([
    { id: 'impressions', label: 'Impressions' },
    { id: 'clicks', label: 'Clicks' },
    { id: 'ctr', label: 'CTR' },
    { id: 'cost', label: 'Cost' },
    { id: 'conversions', label: 'Conversions' },
    { id: 'conversion_rate', label: 'Conversion Rate' },
    { id: 'cost_per_conversion', label: 'Cost per Conversion' },
    { id: 'revenue', label: 'Revenue' },
    { id: 'roas', label: 'ROAS' },
    { id: 'avg_position', label: 'Average Position' },
  ])

  return (
    <div style={{ padding: 24 }}>
      <Button type="primary" onClick={() => setOpen(true)}>
        Manage Many Columns
      </Button>

      <ManageColumnsDrawer
        open={open}
        onClose={() => setOpen(false)}
        dimensions={dimensions}
        metrics={metrics}
        onDimensionsChange={setDimensions}
        onMetricsChange={setMetrics}
        onRenameColumn={(id, type) => {
          void message.info(`Rename ${type}: ${id}`)
        }}
        onRemoveColumn={(id, type) => {
          if (type === 'dimension') {
            setDimensions(prev => prev.filter(item => item.id !== id))
          } else {
            setMetrics(prev => prev.filter(item => item.id !== id))
          }
          void message.success('Column removed')
        }}
      />
    </div>
  )
}

export const ManyColumns: Story = {
  render: () => <ManyColumnsTemplate />,
}
