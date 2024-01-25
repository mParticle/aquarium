import React from 'react'
import { useState } from 'react'
import './global-navigation.css'
import { type IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Menu } from 'src/components'
import { Layout } from 'src/components'
import { Flex } from 'src/components'
import { Center } from 'src/components'
import { Icon } from 'src/components/general/Icon/Icon'
import { type MenuItemType } from 'antd/es/menu/hooks/useItems'
import { type MenuItemGroupType } from 'antd/es/menu/hooks/useItems'
import { SuiteLogo } from 'src/components/navigation/GlobalNavigation/SuiteLogo'
import { NavigationSearch } from 'src/components/navigation/GlobalNavigation/NavigationSearch'
import { NavigationList } from 'src/components/navigation/GlobalNavigation/NavigationList'

export interface IBaseGlobalNavigationItem {
  label: string
  icon: IconDefinition
}

export interface IGlobalNavigationLogo extends IBaseGlobalNavigationItem {}

export interface IGlobalNavigationTool extends IBaseGlobalNavigationItem {
  type: 'menu' | 'link'
  children? // : Omit<MenuItemType, "key">[];
}

export interface IGlobalNavigationManagement extends IBaseGlobalNavigationItem {
  type: 'menu' | 'link'
  children? // : Omit<MenuItemType, "key">[];
}

export interface IGlobalNavigationProps {
  logo: IGlobalNavigationLogo
  tools: IGlobalNavigationTool[]
  management: IGlobalNavigationManagement[]
  canSearch: boolean

  createOptions: {
    canCreate: boolean
    createItems: Array<MenuItemType | MenuItemGroupType>
  }
}

export const NavItemHeight = '42px' as const

export const GlobalNavigation = (props: IGlobalNavigationProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(true)

  return (
    <Layout.Sider
      width={200}
      collapsedWidth={100}
      style={{
        border: 'solid 1px black',
        minHeight: '750px',
        backgroundColor: 'white',
      }}
      collapsible
      collapsed={collapsed}
      trigger={null}
      onMouseEnter={e => {
        setCollapsed(false)
      }}
      onMouseLeave={e => {
        setCollapsed(true)
      }}
    >
      <Flex vertical justify="space-between" style={{ height: '100%', backgroundColor: 'white' }}>
        <div>
          <SuiteLogo {...props.logo} />
          <hr />

          {props.canSearch && <NavigationSearch />}

          {props.createOptions?.canCreate && props.createOptions?.createItems && (
            <NavigationCreate createItems={props.createOptions.createItems} />
          )}

          <NavigationList items={props.tools} />
        </div>

        <NavigationList items={props.management} />
      </Flex>
    </Layout.Sider>
  )
}

function NavigationCreate({ createItems }: { createItems: Array<MenuItemType | MenuItemGroupType> }) {
  return (
    <>
      <Center style={{ height: NavItemHeight }}>
        <Menu
          items={[
            {
              icon: <Icon icon={faPlus} color="gray" size="2x" />,
              key: 'NavigationCreate',
              children: createItems,
            },
          ]}
        />
      </Center>
      <hr />
    </>
  )
}