import { ColorPicker as AntColorPicker } from 'antd'
import { type ColorPickerProps as AntColorPickerProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IColorPickerProps extends AntColorPickerProps {}

export const ColorPicker = (props: IColorPickerProps) => {
  return (
    <ConfigProvider>
      <AntColorPicker {...props} />
    </ConfigProvider>
  )
}
