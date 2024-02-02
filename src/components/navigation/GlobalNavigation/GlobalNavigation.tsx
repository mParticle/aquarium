import 'src/styles/_variables.css'
import './global-navigation.css'
import { type ReactNode } from 'react'
import { Layout } from 'src/components'
import { Flex } from 'src/components'
import { Center } from 'src/components'
import { type MenuItemType } from 'antd/es/menu/hooks/useItems'
import { type MenuItemGroupType } from 'antd/es/menu/hooks/useItems'
import { SuiteLogo } from 'src/components/navigation/GlobalNavigation/SuiteLogo'
import { NavigationSearch } from 'src/components/navigation/GlobalNavigation/NavigationSearch'
import { NavigationList } from 'src/components/navigation/GlobalNavigation/NavigationList'
import { NavigationCreate } from 'src/components/navigation/GlobalNavigation/NavigationCreate'
import { WorkspaceSelector } from 'src/components/navigation/GlobalNavigation/WorkspaceSelector'
import { type INavigationOrg } from 'src/components/navigation/GlobalNavigation/WorkspaceSelector'

export interface IBaseGlobalNavigationItem {
  label: string
  icon: ReactNode
  hideLabel?: boolean
}

export interface IGlobalNavigationLogo extends IBaseGlobalNavigationItem {}

export interface IGlobalNavigationTool extends IBaseGlobalNavigationItem {
  type: 'menu' | 'link'
  children?: Array<Omit<MenuItemType, 'key'>>
  onClick?: (e) => void
}

export interface IGlobalNavigationManagement extends IBaseGlobalNavigationItem {
  type: 'menu' | 'link'
  children?: Array<Omit<MenuItemType, 'key'>>
  onClick?: (e) => void
}

export interface IGlobalNavigationProps {
  logo: IGlobalNavigationLogo
  tools: IGlobalNavigationTool[]
  management: IGlobalNavigationManagement[]

  orgs?: INavigationOrg[]
  createItems?: Array<MenuItemType | MenuItemGroupType>
  onSearchClick?: () => void
}

export const NavItemHeight = '42px' as const
export const NavWidth = 90 as const

export const GlobalNavigation = (props: IGlobalNavigationProps) => {
  return (
    <Layout>
      <Layout.Sider className="globalNavigation" width={NavWidth}>
        <Flex vertical justify="space-between" style={{ height: '100%' }}>
          <div>
            <SuiteLogo {...props.logo} />
            <hr />

            <Center vertical>
              {props.onSearchClick && <NavigationSearch onClick={props.onSearchClick} />}
              {props.createItems && <NavigationCreate createItems={props.createItems} />}
            </Center>

            <NavigationList items={props.tools} />
          </div>

          <NavigationList items={props.management} />

          {props.orgs && <WorkspaceSelector orgs={props.orgs} />}
        </Flex>
      </Layout.Sider>
    </Layout>
  )
}