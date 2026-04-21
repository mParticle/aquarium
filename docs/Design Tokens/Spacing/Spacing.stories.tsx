import { type Meta, type StoryObj } from '@storybook/react'
import { Flex, Table, Typography } from 'src/components'
import {
  FontFamilyCode,
  FontSizeSm,
  MpBrandPrimary6,
  Size,
  SizeLg,
  SizeMd,
  SizeMs,
  SizeSm,
  SizeXl,
  SizeXs,
  SizeXxl,
  SizeXxs,
  Margin,
  MarginLg,
  MarginMd,
  MarginSm,
  MarginXl,
  MarginXs,
  MarginXxl,
  MarginXxs,
  Padding,
  PaddingLg,
  PaddingMd,
  PaddingSm,
  PaddingXl,
  PaddingXs,
  PaddingXxs,
  BorderRadius,
  BorderRadiusLg,
  BorderRadiusSm,
  BorderRadiusXs,
} from 'src/styles/style'

const meta: Meta = {
  title: 'Design Tokens/Spacing',
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

const SpaceBar = ({ width }: { width: string }) => (
  <div
    style={{
      width,
      height: '12px',
      backgroundColor: MpBrandPrimary6,
      borderRadius: '2px',
    }}
  />
)

const RadiusSwatch = ({ radius }: { radius: number | string }) => (
  <div
    style={{
      width: '48px',
      height: '48px',
      backgroundColor: MpBrandPrimary6,
      borderRadius: typeof radius === 'number' ? `${radius}px` : radius,
    }}
  />
)

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

const sizeRows: TokenRow[] = [
  { token: 'SizeXxs', name: 'XXS', value: SizeXxs },
  { token: 'SizeXs', name: 'XS', value: SizeXs },
  { token: 'SizeSm', name: 'SM', value: SizeSm },
  { token: 'Size', name: 'Base', value: Size },
  { token: 'SizeMs', name: 'MS', value: SizeMs },
  { token: 'SizeMd', name: 'MD', value: SizeMd },
  { token: 'SizeLg', name: 'LG', value: SizeLg },
  { token: 'SizeXl', name: 'XL', value: SizeXl },
  { token: 'SizeXxl', name: 'XXL', value: SizeXxl },
].map(r => ({ key: r.token, preview: <SpaceBar width={r.value} />, ...r }))

const marginRows: TokenRow[] = [
  { token: 'MarginXxs', name: 'XXS', value: MarginXxs },
  { token: 'MarginXs', name: 'XS', value: MarginXs },
  { token: 'MarginSm', name: 'SM', value: MarginSm },
  { token: 'Margin', name: 'Base', value: Margin },
  { token: 'MarginMd', name: 'MD', value: MarginMd },
  { token: 'MarginLg', name: 'LG', value: MarginLg },
  { token: 'MarginXl', name: 'XL', value: MarginXl },
  { token: 'MarginXxl', name: 'XXL', value: MarginXxl },
].map(r => ({ key: r.token, preview: <SpaceBar width={r.value} />, ...r }))

const paddingRows: TokenRow[] = [
  { token: 'PaddingXxs', name: 'XXS', value: PaddingXxs },
  { token: 'PaddingXs', name: 'XS', value: PaddingXs },
  { token: 'PaddingSm', name: 'SM', value: PaddingSm },
  { token: 'Padding', name: 'Base', value: Padding },
  { token: 'PaddingMd', name: 'MD', value: PaddingMd },
  { token: 'PaddingLg', name: 'LG', value: PaddingLg },
  { token: 'PaddingXl', name: 'XL', value: PaddingXl },
].map(r => ({ key: r.token, preview: <SpaceBar width={r.value} />, ...r }))

const radiusRows: TokenRow[] = [
  { token: 'BorderRadiusXs', name: 'XS', value: BorderRadiusXs },
  { token: 'BorderRadiusSm', name: 'SM', value: BorderRadiusSm },
  { token: 'BorderRadius', name: 'Base', value: `${BorderRadius}px` },
  { token: 'BorderRadiusLg', name: 'LG', value: `${BorderRadiusLg}px` },
].map((r, _i) => ({
  key: r.token,
  preview: <RadiusSwatch radius={r.value} />,
  ...r,
}))

export const Sizes: Story = {
  render: () => (
    <Flex vertical gap={24}>
      <Typography.Title level={3}>Sizes</Typography.Title>
      <Typography.Paragraph type="secondary">
        Generic size tokens. Use for widths, heights, and gaps.
      </Typography.Paragraph>
      <Table columns={tokenColumns} dataSource={sizeRows} pagination={false} size="middle" />
    </Flex>
  ),
}

export const Margin_: Story = {
  name: 'Margins',
  render: () => (
    <Flex vertical gap={24}>
      <Typography.Title level={3}>Margins</Typography.Title>
      <Table columns={tokenColumns} dataSource={marginRows} pagination={false} size="middle" />
    </Flex>
  ),
}

export const Padding_: Story = {
  name: 'Paddings',
  render: () => (
    <Flex vertical gap={24}>
      <Typography.Title level={3}>Paddings</Typography.Title>
      <Table columns={tokenColumns} dataSource={paddingRows} pagination={false} size="middle" />
    </Flex>
  ),
}

export const Radii: Story = {
  render: () => (
    <Flex vertical gap={24}>
      <Typography.Title level={3}>Border Radii</Typography.Title>
      <Table columns={tokenColumns} dataSource={radiusRows} pagination={false} size="middle" />
    </Flex>
  ),
}
