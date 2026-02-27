import { Input as AntInput } from 'antd'
import { type InputProps as AntInputProps } from 'antd'
import { type SearchProps } from 'antd/es/input'
import { ConfigProvider } from 'src/components'
import { type InputRef } from 'antd'
import { type Ref, type JSX } from 'react'

export { Input, type InputRef, type IInputProps }

interface IInputProps extends AntInputProps {
  ref?: Ref<InputRef>
}

interface ISearchProps extends SearchProps {
  ref?: Ref<InputRef>
}

type CompoundedComponent = ((props: IInputProps) => JSX.Element) & {
  Group: typeof AntInput.Group
  Search: typeof AntInput.Search
  TextArea: typeof AntInput.TextArea
  Password: typeof AntInput.Password
}

const InternalInput = ({ ref, ...props }: IInputProps) => {
  return (
    <ConfigProvider>
      <AntInput {...props} ref={ref} />
    </ConfigProvider>
  )
}

const Input = InternalInput as CompoundedComponent

const InternalSearch = ({ ref, ...props }: ISearchProps) => (
  <ConfigProvider>
    <AntInput.Search ref={ref} {...props} />
  </ConfigProvider>
)
const Search = InternalSearch as CompoundedComponent['Search']

Input.Search = Search
Input.Group = AntInput.Group
Input.Password = AntInput.Password
Input.TextArea = AntInput.TextArea
