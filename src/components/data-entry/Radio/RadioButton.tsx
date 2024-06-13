import { Radio as AntRadio } from 'antd'
import { type RadioButtonProps as AntRadioGroupProps } from 'antd/es/radio/radioButton'

export interface IRadioButtonProps extends AntRadioGroupProps {}

export const RadioButton = (props: IRadioButtonProps) => {
  return <AntRadio.Button {...props} />
}
