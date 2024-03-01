import { type ForwardRefExoticComponent, type RefAttributes } from 'react'
import { Input as AntInput, type InputRef } from 'antd'
import { InternalInput, type IInputProps } from 'src/components/data-entry/Input/Input'

type CompoundedComponent = ForwardRefExoticComponent<IInputProps & RefAttributes<InputRef>> & {
  Group: typeof AntInput.Group
  Search: typeof AntInput.Search
  TextArea: typeof AntInput.TextArea
  Password: typeof AntInput.Password
}

const Input = InternalInput as CompoundedComponent

Input.Group = AntInput.Group
Input.Password = AntInput.Password
Input.Search = AntInput.Search
Input.TextArea = AntInput.TextArea

export { Input, type InputRef, type IInputProps }
