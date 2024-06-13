import { InputNumber as AntInputNumber } from 'antd'
import { type InputNumberProps as AntInputNumberProps } from 'antd'

export interface IInputNumberProps extends AntInputNumberProps {}

export const InputNumber = (props: IInputNumberProps) => {
  return <AntInputNumber {...props} />
}
