import { type Meta, type StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import {
  HomeOutlined,
  SettingOutlined,
  TagOutlined,
  ShoppingCartOutlined,
  ShopOutlined,
  StarFilled,
  AimOutlined,
  FileTextOutlined,
  InboxOutlined,
  FolderOutlined,
  SendOutlined,
  LineChartOutlined,
} from '@ant-design/icons'
import { Avatar } from 'src/components'
import { ColorBorder, MpBrandSecondary5 } from 'src/styles/style'
import { ExpandedSidebar, type IExpandedSidebarItem, type IExpandedSidebarSection } from './ExpandedSidebar'

// Simple gray avatar for additional partners
const GrayAvatar = () => (
  <Avatar size="small" style={{ backgroundColor: MpBrandSecondary5, color: 'white', marginRight: 10 }} />
)

// Navigation items matching the Figma design
const roktNavItems: IExpandedSidebarItem[] = [
  { key: 'home', icon: <HomeOutlined />, label: 'Home' },
  { key: 'settings', icon: <SettingOutlined />, label: 'Settings' },
  { key: 'products', icon: <TagOutlined />, label: 'Products' },
  { key: 'orders', icon: <ShoppingCartOutlined />, label: 'Orders' },
]

// Featured partners (polished)
const featuredPartners: IExpandedSidebarItem[] = [
  {
    key: 'nordstrom',
    icon: (
      <Avatar size="small" style={{ backgroundColor: 'white', border: `1px solid ${ColorBorder}`, color: '#1F2937' }}>
        N
      </Avatar>
    ),
    label: 'Nordstrom',
  },
  {
    key: 'macys',
    icon: (
      <Avatar size="small" style={{ backgroundColor: 'white', border: `1px solid ${ColorBorder}`, color: '#EF4444' }}>
        <StarFilled />
      </Avatar>
    ),
    label: "Macy's",
  },
  {
    key: 'target',
    icon: (
      <Avatar size="small" style={{ backgroundColor: 'white', border: `1px solid ${ColorBorder}`, color: '#EF4444' }}>
        <AimOutlined />
      </Avatar>
    ),
    label: 'Target',
  },
]

// Additional partners (simple gray avatars)
const additionalPartners: IExpandedSidebarItem[] = [
  { key: 'shopsimon', icon: <GrayAvatar />, label: 'ShopSimon' },
  { key: 'canal-demo', icon: <GrayAvatar />, label: 'Canal Demo Store' },
  { key: 'forex', icon: <GrayAvatar />, label: 'Forex (Deactivated)' },
  { key: 'fellow', icon: <GrayAvatar />, label: 'Fellow (Deactivated)' },
  { key: 'alyssa', icon: <GrayAvatar />, label: 'Alyssa Milano (Deact...' },
  { key: 'flip', icon: <GrayAvatar />, label: 'Flip (Deactivated)' },
]

// Function to build marketplace items with dynamic partners
const buildMarketplaceItems = (expanded: boolean, onToggle: () => void): IExpandedSidebarItem[] => [
  {
    key: 'partners',
    icon: <ShopOutlined />,
    label: 'Partners',
    children: [
      ...featuredPartners,
      ...(expanded ? additionalPartners : []),
      {
        key: 'see-toggle',
        label: expanded ? 'See less' : 'See more',
        onClick: onToggle,
      },
    ],
  },
  { key: 'proposals', icon: <FileTextOutlined />, label: 'Proposals', badge: 10 },
  { key: 'inbox', icon: <InboxOutlined />, label: 'Inbox', badge: 10 },
  {
    key: 'reports',
    icon: <FolderOutlined />,
    label: 'Reports',
    children: [
      { key: 'analytics', label: 'Analytics' },
      { key: 'payouts', label: 'Payouts' },
    ],
  },
]

// Ads section items
const adsItems: IExpandedSidebarItem[] = [
  { key: 'campaign-manager', icon: <SendOutlined />, label: 'Campaign manager' },
  { key: 'ads-analytics', icon: <LineChartOutlined />, label: 'Analytics' },
]

// Function to build sections with dynamic marketplace items
const buildSections = (expanded: boolean, onToggle: () => void): IExpandedSidebarSection[] => [
  { label: 'MARKETPLACE', items: buildMarketplaceItems(expanded, onToggle) },
  { label: 'ADS', items: adsItems },
]

const meta: Meta<typeof ExpandedSidebar> = {
  title: 'POC/Rokt Catalog/ExpandedSidebar',
  component: ExpandedSidebar,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <div className="expandedSidebar__storyContainer">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof ExpandedSidebar>

/**
 * Primary story matching the Rokt Catalog Figma design
 */
export const RoktCatalog: Story = {
  render: () => {
    const [expanded, setExpanded] = useState(false)

    return (
      <ExpandedSidebar
        header={{
          title: 'Rokt Catalog',
          subtitle: 'for Brands',
        }}
        items={roktNavItems}
        sections={buildSections(expanded, () => setExpanded(!expanded))}
        userProfile={{
          name: 'lily riojas',
          email: 'lily@sundaycitizen.co',
          isOnline: true,
          onClick: () => alert('User profile clicked!'),
        }}
        selectedKey="home"
        defaultOpenKeys={['partners', 'reports']}
      />
    )
  },
}
