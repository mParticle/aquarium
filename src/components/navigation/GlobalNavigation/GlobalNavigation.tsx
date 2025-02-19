import 'src/styles/_variables.css'
import './global-navigation.css'
import {
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
} from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { NavigationItem } from 'src/components/navigation/GlobalNavigation/NavigationItem'
import { useNewExperienceReminder } from 'src/hooks/NewExperienceReminder/useNewExperienceReminder'
import {
  NotificationCenter,
  type INotificationCenterProps,
} from 'src/components/navigation/GlobalNavigation/NotificationCenter'
import React from "react";

export interface IGlobalNavigationProps {
  tools: IGlobalNavigationItem[]
  management: IGlobalNavigationItem[]
  orgs?: INavigationOrg[]
  createItems?: INavigationCreateProps['createItems']
  onSearchClick?: () => void
  onSuiteLogoClick?: () => void
  onMpHomeClick: () => void
  avatarOptions?: IAvatarProps
  navigationButtonItemOptions?: {
    label: string
    onClick: () => void
    withoutContainer?: boolean
  }
  notificationCenter?: INotificationCenterProps
}

export const GlobalNavWidth = 90 as const

export const GlobalNavigation = (props: IGlobalNavigationProps) => {
  return (
    <Layout className="globalNavigation">
      <Layout.Sider className="globalNavigation__sider" width={GlobalNavWidth}>
        <Flex vertical justify="space-between" style={{ height: '100%' }}>
          <div>
            <Center className="globalNavigation__mpHome">
              <Icon name="mpLogo" size="lg" color="white" />
            </Center>
            
            <Center vertical>
              {props.onSearchClick && <NavigationSearch onClick={props.onSearchClick} />}
              {props.createItems && <NavigationCreate createItems={props.createItems} />}
            </Center>
            <NavigationList items={props.tools} />
          </div>
          <div>
            {props.notificationCenter && <NotificationCenter {...props.notificationCenter} />}
            <NavigationList items={props.management} />
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
          </div>
        </Flex>
      </Layout.Sider>
    </Layout>
  )
}

GlobalNavigation.useNewExperienceReminder = useNewExperienceReminder
