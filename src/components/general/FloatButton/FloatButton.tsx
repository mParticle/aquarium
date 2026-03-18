import { FloatButton as AntFloatButton } from 'antd'
import { type FloatButtonProps as AntFloatButtonProps } from 'antd'
import { ConfigProvider } from 'src/components'

export type IFloatButtonProps = AntFloatButtonProps

export const FloatButton = (props: IFloatButtonProps) => {
  return (
    <ConfigProvider>
      <AntFloatButton {...props} />
    </ConfigProvider>
  )
}

FloatButton.BackTop = AntFloatButton.BackTop
FloatButton.Group = AntFloatButton.Group
