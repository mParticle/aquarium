import { Input as AntInput } from 'antd'
import { type InputProps as AntInputProps } from 'antd'
import { type SearchProps } from 'antd/es/input'
import { type InputRef } from 'antd'
import { forwardRef, type ForwardRefExoticComponent, type Ref, type RefAttributes } from 'react'

export { Input, type InputRef, type IInputProps }

interface IInputProps extends AntInputProps {}

interface ISearchProps extends SearchProps {}

type CompoundedComponent = ForwardRefExoticComponent<IInputProps & RefAttributes<InputRef>> & {
  Group: typeof AntInput.Group
  Search: typeof AntInput.Search
  TextArea: typeof AntInput.TextArea
  Password: typeof AntInput.Password
}

const InternalInput = (props: IInputProps, ref: Ref<InputRef>) => {
  return <AntInput {...props} ref={ref} />
}

const InternalInputWithRef = forwardRef(InternalInput)
const Input = InternalInputWithRef as CompoundedComponent

const InternalSearch = (props: ISearchProps, ref: Ref<InputRef>) => <AntInput.Search ref={ref} {...props} />
const InternalSearchWithRef = forwardRef(InternalSearch)
const Search = InternalSearchWithRef as CompoundedComponent

Input.Search = Search
Input.Group = AntInput.Group
Input.Password = AntInput.Password
Input.TextArea = AntInput.TextArea
