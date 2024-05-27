import 'src/styles/_variables.css'
import './global-navigation.css'
import {
  type IGlobalNavigationLogo,
  type INavigationOrg,
  type INavigationCreateProps,
  Center,
  Flex,
  type IAvatarProps,
  Icon,
  Layout,
} from 'src/components'
import { SuiteLogo } from 'src/components/navigation/GlobalNavigation/SuiteLogo'
import { NavigationSearch } from 'src/components/navigation/GlobalNavigation/NavigationSearch'
import { NavigationList } from 'src/components/navigation/GlobalNavigation/NavigationList'
import { NavigationCreate } from 'src/components/navigation/GlobalNavigation/NavigationCreate'
import { WorkspaceSelector } from 'src/components/navigation/GlobalNavigation/WorkspaceSelector/WorkspaceSelector'
import {
  type IGlobalNavigationItem,
  IMinimapOptions,
} from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { NavigationItem } from 'src/components/navigation/GlobalNavigation/NavigationItem'
import { useNewExperienceReminder } from 'src/hooks/NewExperienceReminder/useNewExperienceReminder'
import { HomeButton } from 'src/components/navigation/GlobalNavigation/HomeButton'
import { ISvgLink } from 'src/components/navigation/MiniMap/SvgLinker'

export interface IGlobalNavigationProps {
  logo: IGlobalNavigationLogo
  tools: IGlobalNavigationItem[]
  management: IGlobalNavigationItem[]
  orgs?: INavigationOrg[]
  createItems?: INavigationCreateProps['createItems']
  onSearchClick?: () => void
  onSuiteLogoClick?: () => void
  onMpHomeClick: () => void
  hideMpHome?: boolean
  avatarOptions?: IAvatarProps
  navigationButtonItemOptions?: {
    label: string
    onClick: () => void
    withoutContainer?: boolean
  }
  minimapOptions: IMinimapOptions
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
                navigationButtonItemOptions={props.navigationButtonItemOptions}
                avatarOptions={props.avatarOptions}
              />
            ) : (
              !!props.navigationButtonItemOptions?.onClick() && (
                <NavigationItem
                  type="link"
                  icon={<Icon name="signout" />}
                  label="Sign Out"
                  hideLabel
                  onClick={props.navigationButtonItemOptions?.onClick}
                />
              )
            )}
            {!props.hideMpHome && (
              <HomeButton onMpHomeClick={props.onMpHomeClick} minimapOptions={props.minimapOptions} />
            )}
          </div>
        </Flex>
      </Layout.Sider>
    </Layout>
  )
}

GlobalNavigation.useNewExperienceReminder = useNewExperienceReminder
