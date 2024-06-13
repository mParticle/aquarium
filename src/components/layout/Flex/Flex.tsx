import { Flex as AntFlex } from 'antd'
import { type FlexProps as AntFlexProps } from 'antd'

export interface IFlexProps extends AntFlexProps {}

export const Flex = (props: IFlexProps) => {
  return <AntFlex {...props} />
}
