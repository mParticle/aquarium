import { Tabs as AntTabs } from 'antd'
import { type TabsProps as AntTabsProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface ITabsProps extends AntTabsProps {}

export const Tabs = (props: ITabsProps) => {
  return (
    <ConfigProvider>
      <AntTabs {...props} />
    </ConfigProvider>
  )
}

Tabs.TabPane = AntTabs.TabPane