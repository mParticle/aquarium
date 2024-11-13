import './query-item.css'
import type { DefaultOptionType } from 'antd/es/select'
import { useState } from 'react'
import { CheckIcon } from 'src/components/icons'
import { Typography } from 'src/components/general/Typography/Typography'
import { type ISelectProps, Select } from 'src/components'

export type IQueryItemQualifierOption = DefaultOptionType

export interface IQueryItemQualifierProps {
  options: IQueryItemQualifierOption[]
  disabled?: boolean
  errorMessage?: string
  onChange?: (value: IQueryItemQualifierOption) => void
  value?: IQueryItemQualifierOption
}

const Qualifier = (props: IQueryItemQualifierProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectProps: ISelectProps = {
    defaultValue: props.options?.length ? props.options[0].value : undefined,
    menuItemSelectedIcon: node =>
      node.isSelected ? <CheckIcon className="query-item-qualifier__item-selected-icon" /> : null,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error Introduced when we properly typed the Select value and option generics from Aquarium. Need to double check to fix this.
    onChange: props.onChange,
    onDropdownVisibleChange: () => {
      setIsOpen(!isOpen)
    },
    placement: 'bottomLeft',
    popupMatchSelectWidth: false,
    status: props.errorMessage ? 'error' : undefined,
    suffixIcon: null,
    variant: 'borderless',
    options: props.options,
    disabled: props.disabled,
    value: props.value,
    dropdownAlign: {
      points: ['tl', 'bl'],
      offset: [-5, 7],
    },
  }

  let className = 'query-item'
  if (isOpen) className += ' query-item--open'

  return (
    <>
      <Select className={className} {...selectProps} />
      {props.errorMessage && <Typography.Text type="danger">{props.errorMessage}</Typography.Text>}
    </>
  )
}

export default Qualifier
