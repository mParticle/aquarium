import { type Meta, type StoryObj } from '@storybook/react'
import { Flex, Table, Typography } from 'src/components'
import {
  FontFamily,
  FontFamilyCode,
  FontSize,
  FontSizeSm,
  FontSizeLg,
  FontSizeXl,
  FontSizeHeading1,
  FontSizeHeading2,
  FontSizeHeading3,
  FontSizeHeading4,
  FontSizeHeading5,
  FontSizeIcon,
  FontWeightNormal,
  FontWeightStrong,
  LineHeight,
  LineHeightLg,
  LineHeightSm,
  LineHeightHeading1,
  LineHeightHeading2,
  LineHeightHeading3,
  LineHeightHeading4,
  LineHeightHeading5,
} from 'src/styles/style'

const meta: Meta = {
  title: 'Design Tokens/Typography',
}

export default meta
type Story = StoryObj

interface TokenRow {
  key: string
  preview: React.ReactNode
  name: string
  token: string
  value: string
}

const tokenColumns = [
  { title: 'Preview', dataIndex: 'preview', key: 'preview', width: '30%' },
  { title: 'Name', dataIndex: 'name', key: 'name', width: '25%' },
  {
    title: 'Token',
    dataIndex: 'token',
    key: 'token',
    width: '25%',
    render: (token: string) => <code style={{ fontFamily: FontFamilyCode, fontSize: FontSizeSm }}>{token}</code>,
  },
  { title: 'Value', dataIndex: 'value', key: 'value', width: '20%' },
]

const fontSizeRows: TokenRow[] = [
  { token: 'FontSizeHeading1', name: 'Heading 1', value: FontSizeHeading1 },
  { token: 'FontSizeHeading2', name: 'Heading 2', value: FontSizeHeading2 },
  { token: 'FontSizeHeading3', name: 'Heading 3', value: FontSizeHeading3 },
  { token: 'FontSizeHeading4', name: 'Heading 4', value: FontSizeHeading4 },
  { token: 'FontSizeHeading5', name: 'Heading 5', value: FontSizeHeading5 },
  { token: 'FontSizeXl', name: 'Extra Large', value: FontSizeXl },
  { token: 'FontSizeLg', name: 'Large', value: FontSizeLg },
  { token: 'FontSize', name: 'Base', value: FontSize },
  { token: 'FontSizeSm', name: 'Small', value: FontSizeSm },
  { token: 'FontSizeIcon', name: 'Icon', value: FontSizeIcon },
].map(r => ({
  key: r.token,
  preview: <span style={{ fontSize: r.value, fontFamily: FontFamily }}>Aa</span>,
  ...r,
}))

const fontWeightRows: TokenRow[] = [
  { token: 'FontWeightNormal', name: 'Normal', value: String(FontWeightNormal) },
  { token: 'FontWeightStrong', name: 'Strong', value: String(FontWeightStrong) },
].map(r => ({
  key: r.token,
  preview: (
    <span style={{ fontWeight: Number(r.value), fontFamily: FontFamily, fontSize: FontSizeLg }}>
      The quick brown fox
    </span>
  ),
  ...r,
}))

const lineHeightRows: TokenRow[] = [
  { token: 'LineHeightHeading1', name: 'Heading 1', value: LineHeightHeading1.toFixed(3) },
  { token: 'LineHeightHeading2', name: 'Heading 2', value: LineHeightHeading2.toFixed(3) },
  { token: 'LineHeightHeading3', name: 'Heading 3', value: LineHeightHeading3.toFixed(3) },
  { token: 'LineHeightHeading4', name: 'Heading 4', value: LineHeightHeading4.toFixed(3) },
  { token: 'LineHeightHeading5', name: 'Heading 5', value: LineHeightHeading5.toFixed(3) },
  { token: 'LineHeightLg', name: 'Large', value: LineHeightLg.toFixed(3) },
  { token: 'LineHeight', name: 'Base', value: LineHeight.toFixed(3) },
  { token: 'LineHeightSm', name: 'Small', value: LineHeightSm.toFixed(3) },
].map(r => ({
  key: r.token,
  preview: <span style={{ fontFamily: FontFamily, fontSize: FontSize }}>1.2em</span>,
  ...r,
}))

const fontFamilyRows: TokenRow[] = [
  {
    key: 'FontFamily',
    token: 'FontFamily',
    name: 'Primary',
    value: FontFamily,
    preview: <span style={{ fontFamily: FontFamily, fontSize: FontSizeLg }}>The quick brown fox</span>,
  },
  {
    key: 'FontFamilyCode',
    token: 'FontFamilyCode',
    name: 'Monospace',
    value: FontFamilyCode,
    preview: <span style={{ fontFamily: FontFamilyCode, fontSize: FontSizeLg }}>const x = 42</span>,
  },
]

export const FontSizes: Story = {
  render: () => (
    <Flex vertical gap={24}>
      <Typography.Title level={3}>Font Sizes</Typography.Title>
      <Table columns={tokenColumns} dataSource={fontSizeRows} pagination={false} size="middle" />
    </Flex>
  ),
}

export const FontWeights: Story = {
  render: () => (
    <Flex vertical gap={24}>
      <Typography.Title level={3}>Font Weights</Typography.Title>
      <Table columns={tokenColumns} dataSource={fontWeightRows} pagination={false} size="middle" />
    </Flex>
  ),
}

export const LineHeights: Story = {
  render: () => (
    <Flex vertical gap={24}>
      <Typography.Title level={3}>Line Heights</Typography.Title>
      <Table columns={tokenColumns} dataSource={lineHeightRows} pagination={false} size="middle" />
    </Flex>
  ),
}

export const FontFamilies: Story = {
  render: () => (
    <Flex vertical gap={24}>
      <Typography.Title level={3}>Font Families</Typography.Title>
      <Table columns={tokenColumns} dataSource={fontFamilyRows} pagination={false} size="middle" />
    </Flex>
  ),
}
