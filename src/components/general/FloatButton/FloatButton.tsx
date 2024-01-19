import { FloatButton as AntFloatButton, type FloatButtonProps as AntFloatButtonProps } from 'antd'

export interface IFloatButtonProps extends AntFloatButtonProps {}

export const FloatButton = (props: IFloatButtonProps) => {
  return <AntFloatButton {...props} />
}
