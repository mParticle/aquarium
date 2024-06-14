import './query-item.css'
import { InputNumber } from 'src/components'
import { Typography } from 'src/components/general/Typography/Typography'

interface INumberInputProps {
  value?: number
  disabled?: boolean
  errorMessage?: string
  placeholder?: string
  min?: number
  max?: number
  step?: number
  onChange?: (value: number) => void
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
        placeholder={props.placeholder}
        max={props.max}
        min={props.min}
        step={props.step}
        onChange={(value: string | number | null) => {
          props.onChange?.(parseFloat(value as string))
        }}
      />

      {props.errorMessage &&
       <Typography.Text type="danger">{props.errorMessage}</Typography.Text>}
    </>
  )
}

export default NumberInput