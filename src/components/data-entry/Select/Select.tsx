import { Select as AntSelect } from 'antd'
import { type SelectProps as AntSelectProps } from 'antd'
import { type BaseOptionType, type DefaultOptionType } from 'antd/es/select'

export interface ISelectProps<
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
> extends AntSelectProps<ValueType, OptionType> {}

export const Select = (props: ISelectProps) => {
  return <AntSelect {...props} />
}

Select.Option = AntSelect.Option
Select.OptGroup = AntSelect.OptGroup
