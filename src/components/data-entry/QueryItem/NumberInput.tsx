import './query-item.css'
import { InputNumber } from 'src/components'
import { Typography } from 'src/components/general/Typography/Typography'

export interface INumberInputProps {
  value?: number
  disabled?: boolean
  errorMessage?: string
  autoFocus: boolean
  placeholder?: string
  min?: number
  max?: number
  step?: number
  onChange?: (value: number | undefined) => void
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const NumberInput = (props: INumberInputProps) => {
  const isErrorStatus = props.errorMessage && !props.disabled

  let inputClasses = `query-item query-item--input-number`
  if (props.errorMessage) inputClasses += ' query-item--error'

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
        onChange={(value: string | number | null | undefined) => {
          props.onChange?.(parseFloat(value as string) || undefined)
        }}
      />

      {props.errorMessage && <Typography.Text type="danger">{props.errorMessage}</Typography.Text>}
    </>
  )
}

export default NumberInput
