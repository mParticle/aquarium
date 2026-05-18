import type { Meta, StoryObj } from '@storybook/react'
import { useMemo, useState } from 'react'
import {
  Button,
  Checkbox,
  Divider,
  Flex,
  Icon,
  Input,
  Modal,
  Select,
  Table,
  Tag,
  Typography,
  type ColumnsType,
} from 'src/components'
import { MarginXs, SizeSm, SizeXxs } from 'src/styles/style'

type Status = 'draft' | 'active' | 'paused' | 'archived'
type Environment = 'production' | 'staging' | 'development'
type Output = 'Braze' | 'Cortex' | 'mP Analytics' | 'Google Analytics'

interface Row {
  key: string
  name: string
  status: Status
  environment: Environment
  outputs: Output[]
  mpId: string
}

const data: Row[] = [
  { key: '1', name: 'Welcome Series', status: 'active', environment: 'production', outputs: ['Braze'], mpId: '1234' },
  {
    key: '2',
    name: 'Black Friday',
    status: 'paused',
    environment: 'staging',
    outputs: ['Braze', 'Cortex'],
    mpId: '5678',
  },
  {
    key: '3',
    name: 'Onboarding Quiz',
    status: 'active',
    environment: 'development',
    outputs: ['mP Analytics'],
    mpId: '9012',
  },
  {
    key: '4',
    name: 'Cortex Pipeline',
    status: 'archived',
    environment: 'production',
    outputs: ['Google Analytics'],
    mpId: '3456',
  },
  {
    key: '5',
    name: 'Cart Abandonment',
    status: 'draft',
    environment: 'production',
    outputs: ['Braze', 'mP Analytics'],
    mpId: '7890',
  },
]

type SortOrder = 'recent' | 'oldest'

interface Filters {
  status: Status[]
  environments: Environment[]
  outputs: Output[]
  mpId: string
  sort: SortOrder
}

const DEFAULTS: Filters = {
  status: [],
  environments: [],
  outputs: [],
  mpId: '',
  sort: 'recent',
}

const columns: ColumnsType<Row> = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
  { title: 'Environment', dataIndex: 'environment', key: 'environment' },
  {
    title: 'Outputs',
    dataIndex: 'outputs',
    key: 'outputs',
    render: (outs: Output[]) => (
      <Flex gap={SizeXxs} wrap>
        {outs.map(o => (
          <Tag key={o} color="default">
            {o}
          </Tag>
        ))}
      </Flex>
    ),
  },
  { title: 'mPID', dataIndex: 'mpId', key: 'mpId' },
]

const meta: Meta<typeof Table> = {
  title: 'UX Patterns/Data Exploration/Table/Patterns/Modal Filters',
  component: Table,
  parameters: {
    docs: {
      description: {
        component:
          'Escape hatch for tables with many filter dimensions (5+) where an inline toolbar would be too crowded. The modal collects sort + filter state behind an Apply button. Always pair with visible filter chips beneath the toolbar so users can see what is currently applied without re-opening the modal.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [applied, setApplied] = useState<Filters>(DEFAULTS)
    const [draft, setDraft] = useState<Filters>(DEFAULTS)
    const [search, setSearch] = useState('')

    const showModal = () => {
      setDraft(applied)
      setOpen(true)
    }
    const handleApply = () => {
      setApplied(draft)
      setOpen(false)
    }
    const handleCancel = () => setOpen(false)
    const clearOne = (patch: Partial<Filters>) => setApplied({ ...applied, ...patch })

    const filtered = useMemo(
      () =>
        data
          .filter(row => {
            if (search && !row.name.toLowerCase().includes(search.toLowerCase())) return false
            if (applied.status.length && !applied.status.includes(row.status)) return false
            if (applied.environments.length && !applied.environments.includes(row.environment)) return false
            if (applied.outputs.length && !row.outputs.some(o => applied.outputs.includes(o))) return false
            if (applied.mpId && !row.mpId.includes(applied.mpId)) return false
            return true
          })
          .sort((a, b) => (applied.sort === 'oldest' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))),
      [applied, search],
    )

    const activeChips = [
      ...applied.status.map(s => ({
        key: `status-${s}`,
        label: `Status: ${s}`,
        onClose: () => clearOne({ status: applied.status.filter(x => x !== s) }),
      })),
      ...applied.environments.map(e => ({
        key: `env-${e}`,
        label: `Env: ${e}`,
        onClose: () => clearOne({ environments: applied.environments.filter(x => x !== e) }),
      })),
      ...applied.outputs.map(o => ({
        key: `out-${o}`,
        label: `Output: ${o}`,
        onClose: () => clearOne({ outputs: applied.outputs.filter(x => x !== o) }),
      })),
      ...(applied.mpId ? [{ key: 'mpId', label: `mPID: ${applied.mpId}`, onClose: () => clearOne({ mpId: '' }) }] : []),
    ]

    return (
      <>
        <Flex vertical gap={SizeSm}>
          <Flex align="center" justify="space-between" gap={SizeSm}>
            <Button onClick={showModal}>
              <Flex align="center" gap={SizeXxs}>
                <Icon color="inherit" name="filter" size="sm" />
                <span>Sort &amp; Filters</span>
                {activeChips.length > 0 && <Tag color="blue">{activeChips.length}</Tag>}
              </Flex>
            </Button>
            <Input
              allowClear
              prefix={<Icon size="sm" color="brand" name="search" />}
              placeholder="Search by name"
              style={{ width: 240 }}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </Flex>

          {activeChips.length > 0 && (
            <Flex gap={SizeXxs} wrap style={{ marginTop: MarginXs }}>
              {activeChips.map(c => (
                <Tag key={c.key} closable onClose={c.onClose} color="default">
                  {c.label}
                </Tag>
              ))}
              <Button type="link" size="small" onClick={() => setApplied(DEFAULTS)}>
                Clear all
              </Button>
            </Flex>
          )}

          <Table<Row> columns={columns} dataSource={filtered} pagination={false} rowKey="key" />
        </Flex>

        <Modal
          open={open}
          onCancel={handleCancel}
          onOk={handleApply}
          okText="Apply"
          cancelText="Cancel"
          width={520}
          title={
            <Typography.Text strong size="lg">
              Sort &amp; Filters
            </Typography.Text>
          }>
          <Flex vertical gap={SizeSm}>
            <section>
              <Typography.Text strong>Sort</Typography.Text>
              <Select<SortOrder>
                style={{ width: '100%', marginTop: SizeXxs }}
                value={draft.sort}
                onChange={v => setDraft({ ...draft, sort: v })}
                options={[
                  { value: 'recent', label: 'Recent first' },
                  { value: 'oldest', label: 'Oldest first' },
                ]}
              />
            </section>
            <Divider style={{ margin: 0 }} />
            <section>
              <Typography.Text strong>Status</Typography.Text>
              <Flex gap={SizeSm} wrap style={{ marginTop: SizeXxs }}>
                {(['draft', 'active', 'paused', 'archived'] as Status[]).map(s => (
                  <Checkbox
                    key={s}
                    checked={draft.status.includes(s)}
                    onChange={e =>
                      setDraft({
                        ...draft,
                        status: e.target.checked ? [...draft.status, s] : draft.status.filter(x => x !== s),
                      })
                    }>
                    {s}
                  </Checkbox>
                ))}
              </Flex>
            </section>
            <Divider style={{ margin: 0 }} />
            <section>
              <Typography.Text strong>Environment</Typography.Text>
              <Select<Environment[]>
                mode="multiple"
                style={{ width: '100%', marginTop: SizeXxs }}
                placeholder="Any"
                value={draft.environments}
                onChange={v => setDraft({ ...draft, environments: v })}
                options={[
                  { value: 'production', label: 'Production' },
                  { value: 'staging', label: 'Staging' },
                  { value: 'development', label: 'Development' },
                ]}
              />
            </section>
            <Divider style={{ margin: 0 }} />
            <section>
              <Typography.Text strong>Outputs</Typography.Text>
              <Select<Output[]>
                mode="multiple"
                style={{ width: '100%', marginTop: SizeXxs }}
                placeholder="Any"
                value={draft.outputs}
                onChange={v => setDraft({ ...draft, outputs: v })}
                options={[
                  { value: 'Braze', label: 'Braze' },
                  { value: 'Cortex', label: 'Cortex' },
                  { value: 'mP Analytics', label: 'mP Analytics' },
                  { value: 'Google Analytics', label: 'Google Analytics' },
                ]}
              />
            </section>
            <Divider style={{ margin: 0 }} />
            <section>
              <Typography.Text strong>mPID</Typography.Text>
              <Input
                allowClear
                style={{ marginTop: SizeXxs }}
                placeholder="e.g. 1234"
                value={draft.mpId}
                onChange={e => setDraft({ ...draft, mpId: e.target.value })}
              />
            </section>
          </Flex>
        </Modal>
      </>
    )
  },
}
