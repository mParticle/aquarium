import { Collapse as AntCollapse } from 'antd'
import { type CollapseProps as AntCollapseProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface ICollapseProps extends AntCollapseProps {}

export const Collapse = (props: ICollapseProps) => {
  return (
    <ConfigProvider>
      <AntCollapse {...props} />
    </ConfigProvider>
  )
}
