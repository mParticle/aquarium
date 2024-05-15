import './query-item.css'
import { GetProp } from 'antd'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import {
  Cascader as BaseCascader,
  Flex,
  ICascaderProps as IBaseCascaderProps,
  Input,
  Typography,
  Icon,
} from 'src/components'
import { Icons } from 'src/constants/Icons'
import { debounce } from 'src/utils/utils'

export interface ICascaderOption {
  value: string
  label: string
  children?: ICascaderOption[]
  disabled?: boolean
}

export interface ICascaderProps {
  options: ICascaderOption[]
  icon?: keyof Pick<typeof Icons, 'empty' | 'event' | 'userAttribute' | 'eventAttribute'>
  errorMessage?: string
  placeholder?: string
  onChange?: (values: (number | string)[], selectedOptions: any) => Promise<void>
  loadData?: (value: string) => void
  value?: (number | string)[]
}

export const Cascader = (props: ICascaderProps) => {
  type DefaultOptionType = GetProp<IBaseCascaderProps, 'options'>[number]

  const options: ICascaderOption[] = []
  const [items, setItems] = useState(props.options ?? options)
  const [searchValue, setSearchValue] = useState('')
  const [selectedValue, setSelectedValue] = useState<(number | string)[]>(props.value ?? [])
  const [selectedDisplayValue, setSelectedDisplayValue] = useState(
    props.value ? (props.value.slice(-1)[0] as any).label : '',
  )
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setItems(props.options)
  }, [props.options])

  const onSearch = ({ target: { value: value } }: { target: { value: string } }) => {
    if (debouncedLoadData) {
      if (value.length > 3) {
        if (transformOptionsToPaths(items, []).filter(path => filter(value, path)).length == 0) {
          debouncedLoadData(value)
        }
      }
    }
    setSearchValue(value)
  }

  const filter = (inputValue: string, path: DefaultOptionType[]) => {
    return path.some(option => (option.label as string).toLowerCase().indexOf(inputValue.toLowerCase()) > -1)
  }

  let debouncedLoadData: (value: string) => void
  if (props.loadData) {
    debouncedLoadData = useCallback(debounce(props.loadData, 500), [])
  }

  const baseProps: IBaseCascaderProps = {
    getPopupContainer: triggerNode => triggerNode.parentElement,
    searchValue: searchValue,
    value: selectedValue,
    onChange: (values: (number | string)[], selectedOptions: any): void => {
      setSelectedValue(values as string[])
      setSelectedDisplayValue(selectedOptions.slice(-1)[0].label)
      if (props.onChange) {
        props.onChange(values, selectedOptions)
      }
    },
    dropdownRender: menu => (
      <div className={'query-item__dropdown'}>
        <Input
          allowClear
          value={searchValue}
          className={'query-item__input-search'}
          placeholder="Search"
          onChange={a => onSearch(a)}
        />
        <Flex justify="center">{menu}</Flex>
      </div>
    ),
    showSearch: {
      filter,
      render: (inputValue: string, paths: ICascaderOption[]): ReactNode => {
        return (
          <>
            {paths.map((path: ICascaderOption, index) => {
              const lowerLabel = path.label.toLowerCase()
              return (
                <>
                  {highlightMatches(path.label, inputValue.toLowerCase())}
                  {index < paths.length - 1 ? ' > ' : ''}
                </>
              )
            })}
          </>
        )
      },
    },
    options: items,
    onDropdownVisibleChange: value => {
      setIsOpen(value)
      if (value) setSearchValue('')
    },
  }

  let inputClasses = `query-item`
  if (isOpen) inputClasses += ' query-item--open'
  if (selectedValue && selectedValue.length != 0) inputClasses += ' query-item--selected'
  if (props.errorMessage) inputClasses += ' query-item--error'
  const displayValue = selectedDisplayValue ?? selectedValue.slice(-1)

  return (
    <>
      <BaseCascader {...baseProps}>
        <Input
          readOnly
          placeholder={props.placeholder}
          status={props.errorMessage ? 'error' : undefined}
          className={inputClasses}
          value={displayValue}
          prefix={getIcon()}
        />
      </BaseCascader>
      {props.errorMessage && <Typography.Text type={'danger'}>{props.errorMessage}</Typography.Text>}
    </>
  )

  function highlightMatches(source: string, valueToHighlight: string): ReactNode {
    const lowerSource = source.toLowerCase()
    return lowerSource.indexOf(valueToHighlight) === -1 ? (
      <>{source}</>
    ) : (
      <>
        {source.slice(0, lowerSource.indexOf(valueToHighlight))}
        <span className="query-item__search-highlight">
          {source.slice(
            lowerSource.indexOf(valueToHighlight),
            lowerSource.indexOf(valueToHighlight) + valueToHighlight.length,
          )}
        </span>
        {highlightMatches(
          source.slice(lowerSource.indexOf(valueToHighlight) + valueToHighlight.length),
          valueToHighlight,
        )}
      </>
    )
  }

  function transformOptionsToPaths(
    options: DefaultOptionType[],
    prefixPath: DefaultOptionType[],
  ): DefaultOptionType[][] {
    let result: DefaultOptionType[][] = []
    options.forEach(option => {
      if (option.children && option.children.length > 0) {
        const newPrefix = prefixPath.concat([{ label: option.label, value: option.value }])
        result = result.concat(transformOptionsToPaths(option.children, newPrefix))
      } else {
        const path = prefixPath.concat([{ label: option.label, value: option.value }])
        result.push(path)
      }
    })
    return result
  }

  function getIcon() {
    return props.icon ? (
      <Icon name={props.icon} size="ms" color="primary" />
    ) : (
      <Icon name="empty" size="ms" color="primary" />
    )
  }
}