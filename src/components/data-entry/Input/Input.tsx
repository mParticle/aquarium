import { Input as AntInput } from 'antd'
import { type InputProps as AntInputProps } from 'antd'
import { ConfigProvider } from 'src/components'
import { type InputRef } from 'antd'
import { forwardRef, type ForwardRefExoticComponent, type Ref, type RefAttributes } from 'react'

interface IInputProps extends AntInputProps {}

type CompoundedComponent = ForwardRefExoticComponent<IInputProps & RefAttributes<InputRef>> & {
  Group: typeof AntInput.Group
  Search: typeof AntInput.Search
  TextArea: typeof AntInput.TextArea
  Password: typeof AntInput.Password
}

const InternalInput = (props: IInputProps, ref: Ref<InputRef>) => {
  return (
    <ConfigProvider>
      <AntInput {...props} ref={ref} />
    </ConfigProvider>
  )
}

const InternalInputWithRef = forwardRef(InternalInput)
const Input = InternalInputWithRef as CompoundedComponent

Input.Group = AntInput.Group
Input.Password = AntInput.Password
Input.Search = AntInput.Search
Input.TextArea = AntInput.TextArea

export { Input, type InputRef, type IInputProps }
