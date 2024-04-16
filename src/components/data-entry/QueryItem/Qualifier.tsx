import './query-item.css'
import type { DefaultOptionType } from 'antd/es/select'
import { CheckIcon } from 'src/components/icons'
import { Typography } from 'src/components/general/Typography/Typography'
import { type ISelectProps, Select } from 'src/components'

export type IQueryItemQualifierOption = DefaultOptionType

export interface IQueryItemQualifierProps {
  options: IQueryItemQualifierOption[]
  disabled?: boolean
  errorMessage?: string
  onChange: (value: IQueryItemQualifierOption) => void
}

export const Qualifier = (props: IQueryItemQualifierProps) => {
  const selectProps: ISelectProps = {
    defaultValue: props.options?.length ? props.options[0].value : undefined,
    menuItemSelectedIcon: node =>
      node.isSelected ? <CheckIcon className="query-item-qualifier__item-selected-icon" /> : null,
    onChange: props.onChange,
    placement: 'bottomLeft',
    popupMatchSelectWidth: false,
    status: props.errorMessage ? 'error' : undefined,
    suffixIcon: null,
    variant: 'borderless',
  }
  return (
    <>
      <Select className="query-item query-item-qualifier__select" {...selectProps}></Select>
      {props.errorMessage && <Typography.Text type="danger">{props.errorMessage}</Typography.Text>}
    </>
  )
}
