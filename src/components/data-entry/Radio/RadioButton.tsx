import { Radio as AntRadio } from 'antd'
import { type RadioButtonProps as AntRadioGroupProps } from "antd/es/radio/radioButton";
import { ConfigProvider } from 'src/components'

export interface IRadioButtonProps extends AntRadioGroupProps {}

export const RadioButton = (props: IRadioButtonProps) => {
  return (
    <ConfigProvider>
      <AntRadio.Button {...props} />
    </ConfigProvider>
  )
}
