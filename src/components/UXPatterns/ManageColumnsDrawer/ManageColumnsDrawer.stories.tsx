import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, message } from 'src/components'
import { ManageColumnsDrawer, type IColumnItem } from './ManageColumnsDrawer'

const meta: Meta<typeof ManageColumnsDrawer> = {
  title: 'POC/ManageColumnsDrawer',
  component: ManageColumnsDrawer,
  parameters: {
    layout: 'fullscreen',
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

const DefaultTemplate = () => {
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
      <Button type="default" onClick={() => setOpen(true)}>
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
      />
    </div>
  )
}

export const Default: Story = {
  render: () => <DefaultTemplate />,
}
