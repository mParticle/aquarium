import React from 'react'
import { InputNumber as AntInputNumber } from 'antd'
import { type InputNumberProps as AntInputNumberProps } from 'antd'
import type { InputNumberRef } from '@rc-component/input-number'
import { ConfigProvider } from 'src/components'

export type IInputNumberProps = AntInputNumberProps

export const InputNumber = React.forwardRef<InputNumberRef, IInputNumberProps>((props, ref) => {
  return (
    <ConfigProvider>
      <AntInputNumber {...props} ref={ref} />
    </ConfigProvider>
  )
})

InputNumber.displayName = 'InputNumber'
