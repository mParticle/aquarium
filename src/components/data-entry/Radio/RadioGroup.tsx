import { Radio as AntRadio } from 'antd'
import { type RadioGroupProps as AntRadioGroupProps } from 'antd'

export interface IRadioGroupProps extends AntRadioGroupProps {}

export const RadioGroup = (props: IRadioGroupProps) => {
  return <AntRadio.Group {...props} />
}
