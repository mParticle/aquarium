import { Checkbox as AntCheckbox } from 'antd'
import { type CheckboxProps as AntCheckboxProps } from 'antd'
import { type CheckboxGroupProps as AntCheckboxGroupProps } from 'antd/es/checkbox/Group'
import { ConfigProvider } from 'src/components'
import './checkbox.css'

export interface ICheckboxProps extends AntCheckboxProps {}
export interface ICheckboxGroupProps extends AntCheckboxGroupProps {}

const CheckboxComponent = (props: ICheckboxProps) => {
  return (
    <ConfigProvider>
      <AntCheckbox {...props} />
    </ConfigProvider>
  )
}

const CheckboxGroup = (props: ICheckboxGroupProps) => {
  return (
    <ConfigProvider>
      <AntCheckbox.Group {...props} />
    </ConfigProvider>
  )
}

export const Checkbox = Object.assign(CheckboxComponent, { Group: CheckboxGroup })
