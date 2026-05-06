import type { Meta, StoryObj } from '@storybook/react'
import { Flex, Skeleton, type ColumnsType } from 'src/components'
import { PaddingMd, PaddingSm } from 'src/styles/style'

interface Row {
  key: string
  name: string
  type: string
  owner: string
}

const columns: ColumnsType<Row> = [
  { title: 'Name', dataIndex: 'name', key: 'name', width: '40%' },
  { title: 'Type', dataIndex: 'type', key: 'type', width: '20%' },
  { title: 'Owner', dataIndex: 'owner', key: 'owner', width: '40%' },
]

const SkeletonRow = () => (
  <Flex align="center" style={{ padding: `${PaddingSm} ${PaddingMd}`, borderBottom: '1px solid #f0f0f0' }}>
    {columns.map(col => (
      <div key={String(col.key)} style={{ width: col.width as string, paddingRight: PaddingMd }}>
        <Skeleton.Input active size="small" style={{ width: '70%', height: 16 }} />
      </div>
    ))}
  </Flex>
)

const SkeletonHeader = () => (
  <Flex
    align="center"
    style={{
      padding: `${PaddingSm} ${PaddingMd}`,
      background: '#fafafa',
      borderBottom: '1px solid #f0f0f0',
    }}>
    {columns.map(col => (
      <div key={String(col.key)} style={{ width: col.width as string, fontWeight: 600 }}>
        {col.title as string}
      </div>
    ))}
  </Flex>
)

const meta: Meta = {
  title: 'UX Patterns/Data Exploration/Table/Patterns/Loading Skeleton',
  parameters: {
    docs: {
      description: {
        component:
          'Render a skeleton table while the first page is loading. Keep the column shape so the layout does not jump when real data arrives. For subsequent pages (pagination), prefer keeping the previous data visible (TanStack Query `keepPreviousData`) over flashing a skeleton.',
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div style={{ border: '1px solid #f0f0f0', borderRadius: 8, overflow: 'hidden' }}>
      <SkeletonHeader />
      {Array.from({ length: 5 }).map((_, i) => (
        <SkeletonRow key={i} />
      ))}
    </div>
  ),
}
