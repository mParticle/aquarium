import { Select as AntSelect } from 'antd'
import { type SelectProps as AntSelectProps } from 'antd'
import { type BaseOptionType, type DefaultOptionType } from 'antd/es/select'
import { ConfigProvider } from 'src/components'

export interface ISelectProps<
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
> extends AntSelectProps<ValueType, OptionType> {}

export const Select = (props: ISelectProps) => {
  return (
    <ConfigProvider>
      <AntSelect {...props} />
    </ConfigProvider>
  )
}

Select.Option = AntSelect.Option
Select.OptGroup = AntSelect.OptGroup
