import { Space as AntSpace } from 'antd'
import { type SpaceProps as AntSpaceProps } from 'antd'

export interface ISpaceProps extends AntSpaceProps {}

export const Space = (props: ISpaceProps) => {
  return <AntSpace {...props} />
}

Space.Compact = AntSpace.Compact
