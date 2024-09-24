/* eslint-disable @typescript-eslint/no-use-before-define */
import './query-item.css'
import { type GetProp } from 'antd'
import { type DefaultOptionType } from 'antd/es/select'
import { type ReactNode, useCallback, useEffect, useState } from 'react'
import {
  Cascader as BaseCascader,
  Flex,
  type ICascaderProps as IBaseCascaderProps,
  Input,
  Typography,
  Icon,
  Skeleton,
} from 'src/components'
import { type Icons } from 'src/constants/Icons'
import { useMount } from 'src/hooks/useMount'
import { debounce } from 'src/utils/utils'

export interface ICascaderOption extends DefaultOptionType {
  value: string
  label: ReactNode
  searchLabel?: string // useful when label is a reactNode and not a string
  children?: ICascaderOption[]
  disabled?: boolean
}

export interface IQueryItemCascaderProps {
  options: ICascaderOption[]
  icon?: keyof Pick<typeof Icons, 'empty' | 'event' | 'userAttribute' | 'eventAttribute'>
  errorMessage?: string
  placeholder?: string
  onChange?: (values: Array<number | string>, selectedOptions: any) => Promise<void>
  loadData?: (value: string) => Promise<void>
  value?: Array<number | string>
  disabled?: boolean
  placement?: IBaseCascaderProps['placement']
  defaultOpen?: IBaseCascaderProps['defaultOpen']
}

const Cascader = (props: IQueryItemCascaderProps) => {
  type ICascaderOption = GetProp<IBaseCascaderProps, 'options'>[number]

  const options: ICascaderOption[] = []
  const [items, setItems] = useState(props.options ?? options)
  const [searchValue, setSearchValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [selectedValue, setSelectedValue] = useState<Array<number | string>>(props.value ?? [])
  const [selectedOption, setSelectedOption] = useState<ICascaderOption>(
    props.value?.length ? props.value.slice(-1)[0] : undefined,
  )
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setItems(props.options)
  }, [props.options])

  useEffect(() => {
    if (props.value && props.value.length > 0) {
      setSelectedValue(props.value)
    }
  }, [props.value])

  useMount(() => {
    async function init(): Promise<void> {
      if (props.loadData && !items?.length) {
        setIsLoading(true)
        await props.loadData('')
        setIsLoading(false)
      }
    }

    void init()
  })

  const onSearch = ({ target: { value } }: { target: { value: string } }) => {
    if (debouncedLoadData) {
      if (value.length > 3) {
        if (transformOptionsToPaths(items, []).filter(path => filter(value, path)).length === 0) {
          debouncedLoadData(value)
        }
      }
    }
    setSearchValue(value)
  }

  const getSearchValue = (option: ICascaderOption): string =>
    option.searchLabel ?? (typeof option.label === 'string' ? (option.label as string) : '')

  const filter = (inputValue: string, path: ICascaderOption[]) =>
    path.some(option => getSearchValue(option).toLowerCase().includes(inputValue.toLowerCase()))

  let debouncedLoadData: (value: string) => void
  if (props.loadData) {
    debouncedLoadData = useCallback(
      debounce((value: string) => {
        void props.loadData?.(value)
      }, 500),
      [],
    )
  }

  const baseProps: IBaseCascaderProps = {
    getPopupContainer: triggerNode => triggerNode.parentElement,
    searchValue,
    disabled: props.disabled,
    value: selectedValue,
    defaultOpen: props.defaultOpen,
    placement: props.placement ?? 'bottomLeft',
    onChange: (values: Array<number | string>, selectedOptions: any): void => {
      setSelectedValue(values as string[])
      setSelectedOption(selectedOptions.slice(-1)[0])
      void props.onChange?.(values, selectedOptions)
    },
    dropdownRender: menu => (
      <div className="query-item__dropdown">
        {isLoading ? (
          <Skeleton />
        ) : (
          <>
            <Input
              allowClear
              autoFocus
              value={searchValue}
              className="query-item__input-search"
              placeholder="Search"
              onChange={a => {
                onSearch(a)
              }}
            />
            <Flex justify="center">{menu}</Flex>
          </>
        )}
      </div>
    ),
    showSearch: {
      filter,
      render: (inputValue: string, options: ICascaderOption[]): ReactNode => (
        <>
          {options.map((option: ICascaderOption, index) => (
            <>
              {highlightMatches(getSearchValue(option), inputValue.toLowerCase())}
              {index < options.length - 1 ? ' > ' : ''}
            </>
          ))}
        </>
      ),
    },
    options: items,
    onDropdownVisibleChange: value => {
      setIsOpen(value)
      if (value) setSearchValue('')
    },
  }

  let inputClasses = `query-item`
  if (isOpen) inputClasses += ' query-item--open'
  if (selectedValue && selectedValue.length !== 0) inputClasses += ' query-item--selected'
  if (props.errorMessage) inputClasses += ' query-item--error'
  const displayValue = (selectedOption ? getSearchValue(selectedOption) : selectedValue.slice(-1)) as string

  return (
    <>
      <BaseCascader {...baseProps}>
        <Flex>
          <Input
            disabled={props.disabled}
            readOnly
            placeholder={props.placeholder}
            status={props.errorMessage ? 'error' : undefined}
            className={inputClasses}
            value={displayValue}
            prefix={getIcon()}
          />
        </Flex>
      </BaseCascader>
      {props.errorMessage && <Typography.Text type="danger">{props.errorMessage}</Typography.Text>}
    </>
  )

  function highlightMatches(source: string, valueToHighlight: string): ReactNode {
    const lowerSource = source.toLowerCase()
    return !lowerSource.includes(valueToHighlight) ? (
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

  function transformOptionsToPaths(options: ICascaderOption[], prefixPath: ICascaderOption[]): ICascaderOption[][] {
    let result: ICascaderOption[][] = []
    options.forEach(option => {
      if (option.children && option.children.length > 0) {
        const newPrefix = prefixPath.concat([{ label: option.label, value: option.value }])
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        result = result.concat(transformOptionsToPaths(option.children, newPrefix))
      } else {
        const path = prefixPath.concat([{ label: option.label, value: option.value }])
        result.push(path)
      }
    })
    return result
  }

  function getIcon() {
    return <Icon name={props.icon ?? 'empty'} size="sm" color="primary" />
  }
}

export default Cascader
