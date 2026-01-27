import React from 'react'
import { Select as AntSelect } from 'antd'
import type { SelectProps as AntSelectProps } from 'antd'
import type { BaseOptionType as AntBaseOptionType, DefaultOptionType as AntDefaultOptionType } from 'antd/es/select'
import { ConfigProvider, Icon } from 'src/components'

export type SelectBaseOptionType = AntBaseOptionType
export type SelectDefaultOptionType = AntDefaultOptionType

export interface ISelectProps<
  SelectValueType = unknown,
  SelectOptionType extends SelectBaseOptionType | SelectDefaultOptionType = SelectDefaultOptionType,
> extends AntSelectProps<SelectValueType, SelectOptionType> {}

interface SelectComponent extends React.ForwardRefExoticComponent<ISelectProps & React.RefAttributes<any>> {
  Option: typeof AntSelect.Option
  OptGroup: typeof AntSelect.OptGroup
}

const InternalSelect = React.forwardRef<any, ISelectProps>((props, ref) => {
  return (
    <ConfigProvider>
      <AntSelect suffixIcon={<Icon name="dropdownOpen" size="sm" />} {...props} ref={ref} />
    </ConfigProvider>
  )
}) as SelectComponent

InternalSelect.displayName = 'Select'

InternalSelect.Option = AntSelect.Option
InternalSelect.OptGroup = AntSelect.OptGroup

export const Select = InternalSelect
