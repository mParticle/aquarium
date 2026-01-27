import { Select as AntSelect } from 'antd'
import type { SelectProps as AntSelectProps } from 'antd'
import type { BaseOptionType as AntBaseOptionType, DefaultOptionType as AntDefaultOptionType } from 'antd/es/select'
import { ConfigProvider, Icon } from 'src/components'

export type SelectBaseOptionType = AntBaseOptionType
export type SelectDefaultOptionType = AntDefaultOptionType

export type ISelectProps<
  SelectValueType = unknown,
  SelectOptionType extends SelectBaseOptionType | SelectDefaultOptionType = SelectDefaultOptionType,
> = AntSelectProps<SelectValueType, SelectOptionType>

export const Select = <
  SelectValueType,
  SelectOptionType extends SelectBaseOptionType | SelectDefaultOptionType = SelectDefaultOptionType,
>(
  props: ISelectProps<SelectValueType, SelectOptionType>,
) => {
  return (
    <ConfigProvider>
      <AntSelect suffixIcon={<Icon name="dropdownOpen" size="sm" />} {...props} />
    </ConfigProvider>
  )
}

Select.Option = AntSelect.Option
Select.OptGroup = AntSelect.OptGroup
