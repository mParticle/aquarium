import { Tabs as AntTabs } from 'antd'
import { type TabsProps as AntTabsProps } from 'antd'

export interface ITabsProps extends AntTabsProps {}

export const Tabs = (props: ITabsProps) => {
  return <AntTabs {...props} />
}

Tabs.TabPane = AntTabs.TabPane
