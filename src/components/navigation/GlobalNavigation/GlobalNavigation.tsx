import 'src/styles/_variables.css'
import './global-navigation.css'
import { type IAvatarProps, Icon, Layout } from 'src/components'
import { Flex } from 'src/components'
import { Center } from 'src/components'
import { type INavigationCreateProps } from 'src/components'
import { Tooltip } from 'src/components'
import { type INavigationOrg } from 'src/components'
import { type IGlobalNavigationLogo } from 'src/components'
import { SuiteLogo } from 'src/components/navigation/GlobalNavigation/SuiteLogo'
import { NavigationSearch } from 'src/components/navigation/GlobalNavigation/NavigationSearch'
import { NavigationList } from 'src/components/navigation/GlobalNavigation/NavigationList'
import { NavigationCreate } from 'src/components/navigation/GlobalNavigation/NavigationCreate'
import { WorkspaceSelector } from 'src/components/navigation/GlobalNavigation/WorkspaceSelector/WorkspaceSelector'
import { type IGlobalNavigationItem } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { NavigationItem } from 'src/components/navigation/GlobalNavigation/NavigationItem'

export interface IGlobalNavigationProps {
  logo: IGlobalNavigationLogo
  tools: IGlobalNavigationItem[]
  management: IGlobalNavigationItem[]

  // eslint-disable-next-line no-undef
  orgs?: INavigationOrg[]

  createItems?: INavigationCreateProps['createItems']
  onSearchClick?: () => void
  onSuiteLogoClick?: () => void
  onMpHomeClick: () => void
  hideMpHome?: boolean
  avatarOptions?: IAvatarProps
  signoutOptions?: {
    label?: string
    onSignout: () => void
  }
}

export const GlobalNavWidth = 90 as const

export const GlobalNavigation = (props: IGlobalNavigationProps) => {
  return (
    <Layout className="globalNavigation">
      <Layout.Sider className="globalNavigation__sider" width={GlobalNavWidth}>
        <Flex vertical justify="space-between" style={{ height: '100%' }}>
          <div>
            <SuiteLogo {...props.logo} />

            <div className="globalNavigation__divider" />

            <Center vertical>
              {props.onSearchClick && <NavigationSearch onClick={props.onSearchClick} />}
              {props.createItems && <NavigationCreate createItems={props.createItems} />}
            </Center>

            <NavigationList items={props.tools} />
          </div>

          <div>
            <NavigationList items={props.management} />

            {props.orgs ? (
              <WorkspaceSelector
                orgs={props.orgs}
                signoutOptions={props.signoutOptions}
                avatarOptions={props.avatarOptions}
              />
            ) : (
              !!props.signoutOptions?.onSignout && (
                <NavigationItem
                  type="link"
                  icon={<Icon name="signout" />}
                  label="Sign Out"
                  hideLabel
                  onClick={props.signoutOptions?.onSignout}
                />
              )
            )}

            {!props.hideMpHome && (
              <Tooltip title="mParticle Overview" placement="right">
                <Center
                  className="globalNavigation__mpHome"
                  onClick={() => {
                    props.onMpHomeClick()
                  }}>
                  <Icon name="mpLogo" size="lg" color="white" />
                </Center>
              </Tooltip>
            )}
          </div>
        </Flex>
      </Layout.Sider>
    </Layout>
  )
}
