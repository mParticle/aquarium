import { Input as AntInput } from 'antd'
import { type InputProps as AntInputProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IInputProps extends AntInputProps {}

export const Input = (props: IInputProps) => {
  return (
    <ConfigProvider>
      <AntInput {...props} />
    </ConfigProvider>
  )
}

Input.Group = AntInput.Group
Input.Password = AntInput.Password
Input.Search = AntInput.Search
Input.TextArea = AntInput.TextArea
