import { Collapse as AntCollapse } from 'antd'
import { type CollapseProps as AntCollapseProps } from 'antd'

export interface ICollapseProps extends AntCollapseProps {}

export const Collapse = (props: ICollapseProps) => {
  return <AntCollapse {...props} />
}

Collapse.Panel = AntCollapse.Panel
