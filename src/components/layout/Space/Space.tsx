import { Space as AntSpace, type SpaceProps as AntSpaceProps } from 'antd'

export interface ISpaceProps extends AntSpaceProps {}

export const Space = (props: ISpaceProps) => {
  return <AntSpace {...props} />
}
