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
import { type INavigationOrg } from 'src/components/navigation/GlobalNavigation/WorkspaceSelectorItems'
import MpLogo from 'src/assets/mpLogo.svg?react'

export interface IBaseGlobalNavigationItem {
  label: string
  icon: ReactNode
  hideLabel?: boolean
}

export interface IGlobalNavigationLogo extends IBaseGlobalNavigationItem {}

interface MenuItem extends Omit<MenuItemType, 'key'> {
  children?: MenuItem[]
}

export interface IGlobalNavigationTool extends IBaseGlobalNavigationItem {
  type: 'menu' | 'link'
  children?: MenuItem[]
  onClick?: (e: React.MouseEvent) => void
}

export interface IGlobalNavigationManagement extends IBaseGlobalNavigationItem {
  type: 'menu' | 'link'
  children?: MenuItem[]
  onClick?: (e: React.MouseEvent) => void
}

export interface IGlobalNavigationProps {
  logo: IGlobalNavigationLogo
  tools: IGlobalNavigationTool[]
  management: IGlobalNavigationManagement[]

  orgs?: INavigationOrg[]
  createItems?: Array<MenuItemType | MenuItemGroupType>
  onSearchClick?: () => void
  onClick?: () => void
}

export const NavWidth = 90 as const

export const GlobalNavigation = (props: IGlobalNavigationProps) => {
  return (
    <Layout className="globalNavigation">
      <Layout.Sider className="globalNavigation__sider" width={NavWidth}>
        <Flex vertical justify="space-between" style={{ height: '100%' }}>
          <div>
            <SuiteLogo {...props.logo} />

            <Center vertical>
              {props.onSearchClick && <NavigationSearch onClick={props.onSearchClick} />}
              {props.createItems && <NavigationCreate createItems={props.createItems} />}
            </Center>

            <NavigationList items={props.tools} onClick={props.onClick} />
          </div>

          <Center>
            <div className="globalNavigation__divider" />
          </Center>

          <NavigationList items={props.management} onClick={props.onClick} />

          {props.orgs && <WorkspaceSelector orgs={props.orgs} />}

          <Center className="globalNavigation__mpHome">
            <MpLogo className="globalNavigation__mpSvg" />
          </Center>
        </Flex>
      </Layout.Sider>
    </Layout>
  )
}