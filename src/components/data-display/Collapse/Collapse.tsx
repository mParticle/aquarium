import { Collapse as AntCollapse } from 'antd'
import type { CollapseProps as AntCollapseProps } from 'antd'
import { ConfigProvider, Icon } from 'src/components'

export type ICollapseProps = AntCollapseProps

export const Collapse = (props: ICollapseProps) => {
  return (
    <ConfigProvider>
      <AntCollapse
        expandIcon={({ isActive }): React.JSX.Element =>
          isActive ? <Icon name="dropdownOpen" size="sm" /> : <Icon name="next" size="sm" />
        }
        {...props}
      />
    </ConfigProvider>
  )
}

Collapse.Panel = AntCollapse.Panel
