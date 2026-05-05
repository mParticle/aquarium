import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'
import { Table, type ColumnsType } from 'src/components'

interface Row {
  key: string
  name: string
  type: string
  owner: string
}

const TOTAL = 87

const generatePage = (page: number, pageSize: number): Row[] => {
  const start = (page - 1) * pageSize
  return Array.from({ length: Math.min(pageSize, TOTAL - start) }).map((_, i) => {
    const idx = start + i + 1
    return {
      key: `row-${idx}`,
      name: `Pipeline ${idx}`,
      type: idx % 2 === 0 ? 'Journey' : 'Campaign',
      owner: `user${idx}@example.com`,
    }
  })
}

const fakeFetch = (page: number, pageSize: number): Promise<{ items: Row[]; total: number }> =>
  new Promise(resolve => {
    setTimeout(() => resolve({ items: generatePage(page, pageSize), total: TOTAL }), 400)
  })

const columns: ColumnsType<Row> = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Type', dataIndex: 'type', key: 'type' },
  { title: 'Owner', dataIndex: 'owner', key: 'owner' },
]

const meta: Meta<typeof Table> = {
  title: 'UX Patterns/Data Exploration/Table/Patterns/Server Pagination',
  component: Table,
  parameters: {
    docs: {
      description: {
        component:
          'When the dataset is too large to fetch in one request, paginate on the server. Pass `pagination.total` from the response and update `current`/`pageSize` via `pagination.onChange`. With TanStack Query, set `placeholderData: keepPreviousData` so the previous page stays visible during the next fetch instead of flashing a skeleton.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [rows, setRows] = useState<Row[]>([])
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      let active = true
      setLoading(true)
      fakeFetch(page, pageSize).then(({ items, total: t }) => {
        if (!active) return
        setRows(items)
        setTotal(t)
        setLoading(false)
      })
      return () => {
        active = false
      }
    }, [page, pageSize])

    return (
      <Table<Row>
        columns={columns}
        dataSource={rows}
        rowKey="key"
        loading={loading}
        pagination={{
          current: page,
          pageSize,
          total,
          showSizeChanger: true,
          showTotal: (t, range) => `${range[0]}-${range[1]} of ${t}`,
          onChange: (next, nextSize) => {
            setPage(next)
            setPageSize(nextSize)
          },
        }}
      />
    )
  },
}
