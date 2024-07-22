import './query-item.css'
import { InputNumber } from 'src/components'
import { Typography } from 'src/components/general/Typography/Typography'

export interface INumberInputProps {
  value?: number | undefined
  disabled?: boolean
  errorMessage?: string
  autoFocus: boolean
  placeholder?: string
  min?: number
  max?: number
  step?: number
  onChange?: (value: number | undefined) => void
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  className?: string
}

const NumberInput = (props: INumberInputProps) => {
  const isErrorStatus = props.errorMessage && !props.disabled

  let inputClasses = `query-item query-item--input-number`
  if (props.errorMessage) inputClasses += ' query-item--error'
  if (props.className) inputClasses += ` ${props.className}`

  const handleOnChange = (value: string | number | null | undefined) => {
    const floatValue = parseFloat(value as string)
    isNaN(floatValue) ? props.onChange?.(undefined) : props.onChange?.(floatValue)
  }

  return (
    <>
      <InputNumber
        status={isErrorStatus ? 'error' : undefined}
        disabled={props.disabled}
        className={inputClasses}
        value={props.value}
        autoFocus={props.autoFocus}
        placeholder={props.placeholder}
        max={props.max}
        min={props.min}
        step={props.step}
        onPressEnter={props.onPressEnter}
        onChange={handleOnChange}
      />

      {props.errorMessage && <Typography.Text type="danger">{props.errorMessage}</Typography.Text>}
    </>
  )
}

export default NumberInput
