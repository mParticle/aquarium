import { Checkbox as AntCheckbox } from 'antd'
import { type CheckboxProps as AntCheckboxProps } from 'antd'

export interface ICheckboxProps extends AntCheckboxProps {}

export const Checkbox = (props: ICheckboxProps) => {
  return <AntCheckbox {...props} />
}

Checkbox.Group = AntCheckbox.Group
