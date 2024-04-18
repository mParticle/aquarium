import './query-item.css'
import { GetProp } from 'antd'
import { ReactNode, useState } from 'react'
import {
  AddIcon,
  Cascader as BaseCascader,
  CircleDashedIcon,
  Flex,
  ICascaderProps as IBaseCascaderProps,
  Input,
  Space,
  Typography,
} from 'src/components'

export interface CascaderOption {
  value: string
  label: ReactNode
  selectedLabel?: string
  children?: CascaderOption[]
  disabled?: boolean
}

export type CascaderIcons = 'blank' | 'attribute' | 'user' | 'event'

const CascaderIconList = {
  blank: <CircleDashedIcon className="query-item__icon" />,
  attribute: <AddIcon className="query-item__icon" />,
  user: <AddIcon className="query-item__icon" />,
  event: <AddIcon className="query-item__icon" />,
}

export interface ICascaderProps {
  options: CascaderOption[]
  icon?: CascaderIcons
  errorMessage?: string
  placeholder?: string
  onChange?: (values: (number | string)[], selectedOptions: any) => Promise<void>
  value?: (number | string)[]
}

export const Cascader = (props: ICascaderProps) => {
  type DefaultOptionType = GetProp<IBaseCascaderProps, 'options'>[number]

  const options: CascaderOption[] = []
  const [items] = useState(props.options ?? options)
  const [searchValue, setSearchValue] = useState('')
  const [selectedValue, setSelectedValue] = useState<(number | string)[]>(props.value ?? [""])
  const [isOpen, setIsOpen] = useState(false)

  const onSearch = (value: string) => {
    setSearchValue(value)
  }

  const filter = (inputValue: string, path: DefaultOptionType[]) =>
    path.some(option => (option.label as string).toLowerCase().indexOf(inputValue.toLowerCase()) > -1)

  const baseProps: IBaseCascaderProps = {
    getPopupContainer: triggerNode => triggerNode.parentElement,
    searchValue: searchValue,
    value: selectedValue,
    onChange: (values: (number | string)[], selectedOptions: any): void => {
      setSelectedValue(values as string[])
      if (props.onChange) {
        props.onChange(values, selectedOptions)
      }
    },
    dropdownRender: menu => (
      <div className={'query-item__dropdown'}>
        <Input.Search allowClear className={'query-item__input-search'} placeholder="Search" onSearch={onSearch} />
        <Flex justify="center">{menu}</Flex>
      </div>
    ),
    showSearch: { filter },
    options: items,
    onDropdownVisibleChange: value => setIsOpen(value),
  }

  let inputClasses = `query-item`
  if (isOpen) inputClasses += ' query-item--open'
  if (selectedValue) inputClasses += ' query-item--selected'
  if (props.errorMessage) inputClasses += ' query-item--error'

  return (
    <>
      <BaseCascader {...baseProps}>
        <Input
          readOnly={true}
          placeholder={props.placeholder}
          status={props.errorMessage ? 'error' : undefined}
          className={inputClasses}
          value={(selectedValue as string[])?.slice(-1)}
          prefix={props.icon ?? <CircleDashedIcon className="query-item__icon" />}
        />
      </BaseCascader>
      {props.errorMessage && <Typography.Text type={'danger'}>{props.errorMessage}</Typography.Text>}
    </>
  )
}
