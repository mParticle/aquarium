import { FloatButton as AntFloatButton } from 'antd'
import { type FloatButtonProps as AntFloatButtonProps } from 'antd'

export interface IFloatButtonProps extends AntFloatButtonProps {}

export const FloatButton = (props: IFloatButtonProps) => {
  return <AntFloatButton {...props} />
}

FloatButton.BackTop = AntFloatButton.BackTop
FloatButton.Group = AntFloatButton.Group
