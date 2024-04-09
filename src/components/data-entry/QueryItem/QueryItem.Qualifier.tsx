import './query-item.css'
import { CheckIcon } from 'src/components/icons'
import type { DefaultOptionType } from 'antd/es/select'
import { type ISelectProps, Select } from '../Select/Select'

export type IQueryItemQualifierOption = DefaultOptionType

export interface IQueryItemQualifierProps {
  options: IQueryItemQualifierOption[]
}

export const QueryItemQualifier = (props: IQueryItemQualifierProps) => {
  const selectProps: ISelectProps = {
    defaultValue: props.options?.length ? props.options[0].value : undefined,
    options: props.options,
    menuItemSelectedIcon: node =>
      node.isSelected ? <CheckIcon className="query-item-qualifier__item-selected-icon" /> : null,
    placement: 'bottomLeft',
    popupMatchSelectWidth: false,
    suffixIcon: null,
    variant: 'borderless',
  }
  return <Select className="query-item-qualifier__select" {...selectProps}></Select>
}
