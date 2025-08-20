import React from 'react'
import { useMemo, useState } from 'react'
import { DateRangeString, type IDateRangeStringProps } from './DateRangeString'
import dayjs from 'dayjs'
import { Select, DatePicker, Divider, Flex, type ISelectProps, Typography } from 'src/components'
import type { IRangePickerProps } from 'src/components/data-entry/DatePicker/DatePicker'
import type { SelectBaseOptionType, SelectDefaultOptionType } from 'src/components/data-entry/Select/Select'

export type SelectWithRangePickerValue<ValueType> = ValueType | [string, string] | null

interface SelectWithRangePickerProps<ValueType, OptionType>
  extends Omit<
    // @ts-expect-error only used in stories as an example
    ISelectProps<SelectWithRangePickerValue<ValueType>, OptionType>,
    'open' | 'value' | 'dropdownRender' | 'defaultValue' | 'mode'
  > {
  value: SelectWithRangePickerValue<ValueType>
  rangePickerProps?: Omit<IRangePickerProps, 'value' | 'onChange'>
  rangePickerLabel?: React.ReactNode
  formatOptions?: IDateRangeStringProps['formatOptions']
}

const DEFAULT_PICKER_LABEL = <Typography.Text>Custom date range</Typography.Text>

export const SelectWithRangePicker = <
  ValueType = SelectWithRangePickerValue<unknown>,
  OptionType extends SelectBaseOptionType | SelectDefaultOptionType = SelectDefaultOptionType,
>({
  value,
  rangePickerProps = {},
  rangePickerLabel = DEFAULT_PICKER_LABEL,
  formatOptions,
  ...rest
}: SelectWithRangePickerProps<ValueType, OptionType>) => {
  const [open, setOpen] = useState(undefined)

  return (
    <Select<SelectWithRangePickerValue<ValueType>, OptionType>
      value={value}
      open={open}
      labelRender={({ label }) =>
        Array.isArray(value) ? (
          <DateRangeString formatOptions={formatOptions} start={new Date(value[0])} end={new Date(value[1])} />
        ) : (
          label
        )
      }
      dropdownStyle={{ minWidth: 300 }}
      dropdownRender={menu => (
        <>
          {menu}
          <Divider style={{ margin: '8px 0' }} />
          <div style={{ padding: '0 16px 8px' }}>
            <Flex vertical gap={10}>
              {rangePickerLabel}
              <DatePicker.RangePicker
                // @ts-expect-error only used in stories as an example
                value={useMemo(() => (Array.isArray(value) ? value.map(dayjs) : undefined), [value])}
                onOpenChange={isOpen => {
                  rangePickerProps?.onOpenChange?.(isOpen)
                  // @ts-expect-error only used in stories as an example
                  setOpen(isOpen ? true : undefined)
                }}
                onChange={antdDayJSArray => {
                  const nextValue = antdDayJSArray ? antdDayJSArray.map(d => d?.toDate().toISOString()) : null
                  // @ts-expect-error only used in stories as an example
                  rest.onChange?.(nextValue, undefined)
                }}
                {...rangePickerProps}
              />
            </Flex>
          </div>
        </>
      )}
      {...rest}
    />
  )
}
