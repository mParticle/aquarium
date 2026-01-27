import React from 'react'
import { InputNumber as AntInputNumber } from 'antd'
import { type InputNumberProps as AntInputNumberProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IInputNumberProps extends AntInputNumberProps {}

export const InputNumber = React.forwardRef<HTMLInputElement, IInputNumberProps>((props, ref) => {
  return (
    <ConfigProvider>
      <AntInputNumber {...props} ref={ref} />
    </ConfigProvider>
  )
})

InputNumber.displayName = 'InputNumber'
