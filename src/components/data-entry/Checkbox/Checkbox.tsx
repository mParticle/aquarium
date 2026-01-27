import React from 'react'
import { Checkbox as AntCheckbox } from 'antd'
import { type CheckboxProps as AntCheckboxProps, type CheckboxRef } from 'antd'
import { type CheckboxGroupProps as AntCheckboxGroupProps } from 'antd/es/checkbox/Group'
import { ConfigProvider } from 'src/components'
import './checkbox.css'

export type ICheckboxProps = AntCheckboxProps
export type ICheckboxGroupProps = AntCheckboxGroupProps

const CheckboxComponent = React.forwardRef<CheckboxRef, ICheckboxProps>((props, ref) => {
  return (
    <ConfigProvider>
      <AntCheckbox {...props} ref={ref} />
    </ConfigProvider>
  )
})

CheckboxComponent.displayName = 'Checkbox'

const CheckboxGroup = (props: ICheckboxGroupProps) => {
  return (
    <ConfigProvider>
      <AntCheckbox.Group {...props} />
    </ConfigProvider>
  )
}

export const Checkbox = Object.assign(CheckboxComponent, { Group: CheckboxGroup })
