import React, { useState } from 'react'
import { Avatar, Badge, Dropdown, Flex, Icon, Typography, type IMenuProps } from 'src/components'
import {
  UserOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  ShoppingOutlined,
  SwapOutlined,
  ShopOutlined,
  FormOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import { ColorBorder, PaddingSm } from 'src/styles/style'

const { Text } = Typography

export interface IUserMenuItem {
  key: string
  label: string
  icon?: React.ReactNode
  onClick?: () => void
  danger?: boolean
}

export interface ISidebarUserProfileProps {
  name: string
  email: string
  avatarSrc?: string
  avatarAlt?: string
  isOnline?: boolean
  onClick?: () => void
  menuItems?: IUserMenuItem[]
}

const defaultMenuItems: IUserMenuItem[] = [
  { key: 'profile', label: 'View & edit profile', icon: <UserOutlined /> },
  { key: 'settings', label: 'Settings', icon: <SettingOutlined /> },
  { key: 'help', label: 'Help center', icon: <QuestionCircleOutlined /> },
  { key: 'test-order', label: 'Run a test order', icon: <ShoppingOutlined /> },
  { key: 'switch-accounts', label: 'Switch accounts', icon: <SwapOutlined /> },
  { key: 'switch-partner', label: 'Switch to Partner', icon: <ShopOutlined /> },
  { key: 'feedback', label: 'Give feedback', icon: <FormOutlined /> },
  { key: 'signout', label: 'Sign out', icon: <LogoutOutlined /> },
]

export function SidebarUserProfile({
  name,
  email,
  avatarSrc,
  avatarAlt,
  isOnline = true,
  onClick,
  menuItems = defaultMenuItems,
}: ISidebarUserProfileProps) {
  const [open, setOpen] = useState(false)

  const dropdownItems: IMenuProps['items'] = menuItems.map(item => ({
    key: item.key,
    label: item.label,
    icon: item.icon,
    danger: item.danger,
    onClick: item.onClick,
  }))

  const userProfileContent = (
    <Flex
      className="expandedSidebar__userProfile"
      align="center"
      justify="space-between"
      style={{
        cursor: 'pointer',
        padding: PaddingSm,
        borderRadius: 8,
        border: `1px solid ${ColorBorder}`,
        backgroundColor: 'white',
      }}>
      <Flex align="center" gap={12}>
        <Badge dot status={isOnline ? 'success' : 'default'} styles={{ root: { lineHeight: 0 } }}>
          <Avatar src={avatarSrc} alt={avatarAlt ?? name} size={40} shape="square">
            {!avatarSrc && name.charAt(0).toUpperCase()}
          </Avatar>
        </Badge>
        <Flex vertical gap={0}>
          <Text strong>{name}</Text>
          <Text type="secondary">{email}</Text>
        </Flex>
      </Flex>
      <Flex vertical align="center" style={{ color: '#667085' }}>
        <Icon name="dropdownClose" size="xs" />
        <Icon name="dropdownOpen" size="xs" />
      </Flex>
    </Flex>
  )

  return (
    <Dropdown
      menu={{ items: dropdownItems }}
      trigger={['click']}
      placement="topRight"
      open={open}
      onOpenChange={setOpen}>
      {userProfileContent}
    </Dropdown>
  )
}
