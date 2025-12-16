import './expanded-sidebar.css'
import React, { type ReactNode } from 'react'
import { Badge, Flex, Layout, Menu, Typography, type IMenuProps } from 'src/components'
import { SidebarHeader, type ISidebarHeaderProps } from './SidebarHeader'
import { SidebarUserProfile, type ISidebarUserProfileProps } from './SidebarUserProfile'
import { ColorBorder, ColorBgLayout, ColorText, Padding } from 'src/styles/style'

type MenuProps = IMenuProps

export interface IExpandedSidebarItem {
  key: string
  label: ReactNode
  icon?: ReactNode
  badge?: number
  children?: IExpandedSidebarItem[]
  onClick?: () => void
  href?: string
  disabled?: boolean
}

export interface IExpandedSidebarSection {
  label: string
  items: IExpandedSidebarItem[]
}

export interface IExpandedSidebarProps {
  header?: ISidebarHeaderProps
  items?: IExpandedSidebarItem[]
  sections?: IExpandedSidebarSection[]
  userProfile?: ISidebarUserProfileProps
  selectedKey?: string
  defaultOpenKeys?: string[]
  onSelect?: (key: string) => void
  onOpenChange?: (openKeys: string[]) => void
  width?: number
  className?: string
}

export function ExpandedSidebar({
  header,
  items = [],
  sections = [],
  userProfile,
  selectedKey,
  defaultOpenKeys = [],
  onSelect,
  onOpenChange,
  width = 280,
  className = '',
}: IExpandedSidebarProps) {
  const handleSelect: MenuProps['onSelect'] = ({ key }) => {
    onSelect?.(key)
  }

  const handleOpenChange: MenuProps['onOpenChange'] = openKeys => {
    onOpenChange?.(openKeys)
  }

  // Convert our items to Ant Menu items format
  const convertToMenuItems = (navItems: IExpandedSidebarItem[]): MenuProps['items'] => {
    return navItems.map(item => {
      const baseItem: NonNullable<MenuProps['items']>[number] = {
        key: item.key,
        icon: item.icon,
        disabled: item.disabled,
        onClick: item.onClick,
      }

      // Handle items with badges
      if (item.badge !== undefined) {
        return {
          ...baseItem,
          label: (
            <Flex justify="space-between" align="center">
              <span>{item.label}</span>
              <Badge
                count={item.badge}
                styles={{
                  indicator: {
                    backgroundColor: ColorBgLayout,
                    color: ColorText,
                    border: `1px solid ${ColorBorder}`,
                    boxShadow: 'none',
                  },
                }}
              />
            </Flex>
          ),
        }
      }

      // Handle items with children (submenus)
      if (item.children && item.children.length > 0) {
        return {
          ...baseItem,
          label: item.label,
          children: convertToMenuItems(item.children),
        }
      }

      // Regular items
      return {
        ...baseItem,
        label: item.label,
      }
    })
  }

  // Build the complete menu items array
  const buildMenuItems = (): MenuProps['items'] => {
    const menuItems: MenuProps['items'] = []

    // Add top-level items first
    if (items.length > 0) {
      menuItems.push(...(convertToMenuItems(items) ?? []))
    }

    // Add sections with dividers and group labels
    sections.forEach((section, index) => {
      // Add divider before section (except for first section if no top items)
      if (items.length > 0 || index > 0) {
        menuItems.push({
          type: 'divider',
          key: `divider-${section.label}`,
        })
      }

      // Add section group with its items
      menuItems.push({
        type: 'group',
        label: (
          <Typography.Text color="ColorTextTertiary" size="sm" strong>
            {section.label}
          </Typography.Text>
        ),
        key: `group-${section.label}`,
        children: convertToMenuItems(section.items),
      })
    })

    return menuItems
  }

  return (
    <Layout.Sider
      width={width}
      theme="light"
      style={{
        padding: Padding,
        backgroundColor: 'white',
        borderRight: `1px solid ${ColorBorder}`,
        height: '100vh',
        maxWidth: '290px',
        display: 'flex',
        flexDirection: 'column',
      }}>
      {header && <SidebarHeader {...header} />}

      <Menu
        className="expandedSidebar__menu"
        mode="inline"
        selectedKeys={selectedKey ? [selectedKey] : []}
        defaultOpenKeys={defaultOpenKeys}
        items={buildMenuItems()}
        onSelect={handleSelect}
        onOpenChange={handleOpenChange}
        style={{ borderInlineEnd: 'none', flex: 1 }}
      />

      {userProfile && <SidebarUserProfile {...userProfile} />}
    </Layout.Sider>
  )
}

export type { ISidebarHeaderProps, ISidebarUserProfileProps }
