import { Checkbox as AntCheckbox } from 'antd'
import { type CheckboxProps as AntCheckboxProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface ICheckboxProps extends AntCheckboxProps {}

export const Checkbox = (props: ICheckboxProps) => {
  return (
    <ConfigProvider>
      <AntCheckbox {...props} />
    </ConfigProvider>
  )
}

Checkbox.Group = AntCheckbox.Group