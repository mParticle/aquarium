import './query-item.css'
import { CheckIcon } from 'src/components/icons'
import type { DefaultOptionType } from 'antd/es/select'
import { type ISelectProps, Select } from 'src/components'

export type IQueryItemQualifierOption = DefaultOptionType

export interface IQueryItemQualifierProps {
  options: IQueryItemQualifierOption[]
  disabled?: boolean
  errorMessage?: string
}

export const Qualifier = (props: IQueryItemQualifierProps) => {
  const selectProps: ISelectProps = {
    defaultValue: props.options?.length ? props.options[0].value : undefined,
    disabled: props.disabled,
    options: props.options,
    menuItemSelectedIcon: node =>
      node.isSelected ? <CheckIcon className="query-item-qualifier__item-selected-icon" /> : null,
    placement: 'bottomLeft',
    popupMatchSelectWidth: false,
    status: props.errorMessage ? 'error' : undefined,
    suffixIcon: null,
    variant: 'borderless',
  }
  return (
    <>
      <Select className="query-item query-item-qualifier__select" {...selectProps}></Select>
      {props.errorMessage && <span className="query-item__error">{props.errorMessage}</span>}
    </>
  )
}
