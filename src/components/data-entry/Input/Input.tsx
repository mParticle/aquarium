import { Input as AntInput } from 'antd'
import { type InputProps as AntInputProps } from 'antd'
import { ConfigProvider } from 'src/components'
import { type InputRef } from 'antd'
import { forwardRef, type Ref } from 'react'

export interface IInputProps extends AntInputProps {}

export { type InputRef }

const Input = (props: IInputProps, ref: Ref<InputRef>) => {
  return (
    <ConfigProvider>
      <AntInput {...props} ref={ref} />
    </ConfigProvider>
  )
}

const InputWithRef = forwardRef(Input)
export { InputWithRef as InternalInput }