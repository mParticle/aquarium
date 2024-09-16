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
  type IDrawerProps,
  type IPopoverProps,
} from 'src/components'
import { SuiteLogo } from 'src/components/navigation/GlobalNavigation/SuiteLogo'
import { NavigationSearch } from 'src/components/navigation/GlobalNavigation/NavigationSearch'
import { NavigationList } from 'src/components/navigation/GlobalNavigation/NavigationList'
import { NavigationCreate } from 'src/components/navigation/GlobalNavigation/NavigationCreate'
import { WorkspaceSelector } from 'src/components/navigation/GlobalNavigation/WorkspaceSelector/WorkspaceSelector'
import {
  type IGlobalNavigationItem,
  type ISuiteSelectorOptions,
} from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { NavigationItem } from 'src/components/navigation/GlobalNavigation/NavigationItem'
import { useNewExperienceReminder } from 'src/hooks/NewExperienceReminder/useNewExperienceReminder'
import { HomeButton } from 'src/components/navigation/GlobalNavigation/HomeButton'
import { type MouseEventHandler } from 'react'
import { Button, Popover, Space, Typography } from 'antd'

// type DrawerOptions = Omit<IDrawerProps, 'key' | 'placement' | 'styles' | 'getContainer' | 'closeIcon'>
export interface NotificationActions {
  onClose?: () => void
  onPreferencesClick?: () => void
}

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
  showSuiteLogo?: boolean
  avatarOptions?: IAvatarProps
  navigationButtonItemOptions?: {
    label: string
    onClick: () => void
    withoutContainer?: boolean
  }
  disableInteractions?: boolean
  onNavigationItemHover?: (item: IGlobalNavigationItem) => void
  suiteSelectorOptions?: ISuiteSelectorOptions
  /**
   * @deprecated This variant is a temporary fix for new component.
   * This will be removed once all the apps updated.
   */
  minimapOptions?: ISuiteSelectorOptions
  tempGlobalOnClick?: MouseEventHandler<HTMLDivElement>
  drawerOptions?: IDrawerProps
  notification?: {
    options?: IPopoverProps
    actions?: NotificationActions
  }
}

export const GlobalNavWidth = 90 as const

// const WIDTH = '300px' as const
// const OPACITY = '0' as const
// const PADDING = 0 as const

// const drawerStyles: DrawerStyles = {
//   mask: {
//     opacity: OPACITY,
//   },
//   wrapper: {
//     width: WIDTH,
//     marginLeft: GlobalNavWidth,
//   },
//   body: {
//     padding: PADDING,
//   },
// } as const

export const GlobalNavigation = ({ showSuiteLogo = true, ...props }: IGlobalNavigationProps) => {
  return (
    <Layout className="globalNavigation">
      <Layout.Sider className="globalNavigation__sider" width={GlobalNavWidth} onClick={props.tempGlobalOnClick}>
        <Flex vertical justify="space-between" style={{ height: '100%' }}>
          <div>
            {showSuiteLogo && (
              <>
                <SuiteLogo {...props.logo} suiteSelectorOptions={props.minimapOptions ?? props.suiteSelectorOptions} />
                <div className="globalNavigation__divider" />
              </>
            )}
            <Center vertical>
              {props.onSearchClick && <NavigationSearch onClick={props.onSearchClick} />}
              {props.createItems && <NavigationCreate createItems={props.createItems} />}
            </Center>
            <NavigationList items={props.tools} disableInteractions={props.disableInteractions} />
          </div>
          <div>
            <Popover
              trigger="click"
              placement="right"
              arrow={false}
              overlayStyle={{ height: '100%', width: '300px', left: GlobalNavWidth }}
              overlayInnerStyle={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                padding: 0,
                borderRadius: 0,
              }}
              title={
                <Flex
                  justify="space-between"
                  align="center"
                  style={{
                    padding: '16px 24px',
                    borderBottom: '1px solid rgba(44, 22, 11, 0.09)',
                  }}>
                  <Typography.Text strong={true}>Notifications</Typography.Text>
                  <Space>
                    <Button
                      type="text"
                      shape="circle"
                      icon={<Icon name="settings" />}
                      onClick={props.notification?.actions?.onPreferencesClick}
                    />
                    <Button
                      type="text"
                      shape="circle"
                      icon={<Icon name="remove" />}
                      onClick={props.notification?.actions?.onClose}
                    />
                  </Space>
                </Flex>
              }
              {...props.notification?.options}>
              <div>
                <NavigationItem
                  key="notificaitonCenter"
                  type="link"
                  isActive={props.notification?.options?.open}
                  icon={<Icon name="notification" />}
                />
              </div>
            </Popover>
            <NavigationList items={props.management} disableInteractions={props.disableInteractions} />
            {props.orgs ? (
              <WorkspaceSelector
                orgs={props.orgs}
                navigationButtonItemOptions={props.navigationButtonItemOptions}
                avatarOptions={props.avatarOptions}
              />
            ) : (
              !!props.navigationButtonItemOptions?.onClick && (
                <NavigationItem
                  type="link"
                  icon={<Icon name="signout" />}
                  label="Sign Out"
                  hideLabel
                  onClick={props.navigationButtonItemOptions?.onClick}
                />
              )
            )}
            {!props.hideMpHome && <HomeButton onMpHomeClick={props.onMpHomeClick} />}
          </div>
        </Flex>
      </Layout.Sider>
      {/* <div style={{ height: '100px', width: '100px' }}> */}
      {/* <Drawer
        key="globalNavigation__leftDrawer"
        styles={drawerStyles}
        closeIcon={false}
        placement="left"
        forceRender
        // getContainer={false}
        {...props.drawerOptions}>
        {props.drawerOptions?.children ?? null}
      </Drawer> */}
      {/* </div> */}
    </Layout>
  )
}

GlobalNavigation.useNewExperienceReminder = useNewExperienceReminder
