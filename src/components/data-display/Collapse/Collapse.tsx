import { Collapse as AntCollapse, type CollapseProps as AntCollapseProps } from 'antd'

export interface ICollapseProps extends AntCollapseProps {}

export const Collapse = (props: ICollapseProps) => {
  return <AntCollapse {...props} />
}
