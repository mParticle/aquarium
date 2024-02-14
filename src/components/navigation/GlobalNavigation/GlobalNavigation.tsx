import 'src/styles/_variables.css'
import './global-navigation.css'
import { Layout } from 'src/components'
import { Flex } from 'src/components'
import { Center } from 'src/components'
import { type INavigationCreateProps } from 'src/components'
import { Tooltip } from 'src/components'
import { SuiteLogo } from 'src/components/navigation/GlobalNavigation/SuiteLogo'
import { NavigationSearch } from 'src/components/navigation/GlobalNavigation/NavigationSearch'
import { NavigationList } from 'src/components/navigation/GlobalNavigation/NavigationList'
import { NavigationCreate } from 'src/components/navigation/GlobalNavigation/NavigationCreate'
import { WorkspaceSelector } from 'src/components/navigation/GlobalNavigation/WorkspaceSelector'
import { type INavigationOrg } from 'src/components/navigation/GlobalNavigation/WorkspaceSelectorItems'
import MpLogo from 'src/assets/mpLogo.svg?react'
import { type IGlobalNavigationLogo } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { type IGlobalNavigationManagement } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { type IGlobalNavigationTool } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'

export interface IGlobalNavigationProps {
  logo: IGlobalNavigationLogo
  tools: IGlobalNavigationTool[]
  management: IGlobalNavigationManagement[]

  orgs?: INavigationOrg[]
  createItems?: INavigationCreateProps['createItems']
  onSearchClick?: () => void
  onMpHomeClick: () => void
  hideMpHome?: boolean
  signout?: () => void
}

export const GlobalNavWidth = 90 as const

export const GlobalNavigation = (props: IGlobalNavigationProps) => {
  return (
    <Layout className="globalNavigation">
      <Layout.Sider className="globalNavigation__sider" width={GlobalNavWidth}>
        <Flex vertical justify="space-between" style={{ height: '100%' }}>
          <div>
            <SuiteLogo {...props.logo} />

            <Center vertical>
              {props.onSearchClick && <NavigationSearch onClick={props.onSearchClick} />}
              {props.createItems && <NavigationCreate createItems={props.createItems} />}
            </Center>

            <NavigationList items={props.tools} />
          </div>

          <div>
            <NavigationList items={props.management} />

            {props.orgs && <WorkspaceSelector orgs={props.orgs} signout={props.signout}/>}

            {!props.hideMpHome && (
              <Tooltip title="mParticle Overview" placement="right">
                <Center className="globalNavigation__mpHome">
                  <MpLogo
                    className="globalNavigation__mpSvg"
                    onClick={() => {
                      props.onMpHomeClick()
                    }}
                  />
                </Center>
              </Tooltip>
            )}
          </div>
        </Flex>
      </Layout.Sider>
    </Layout>
  )
}