import './query-item.css'
import { type ChangeEvent } from 'react'
import { Input } from 'src/components'
import { Typography } from 'src/components/general/Typography/Typography'

interface ITextInputProps {
  onChange?: (value: string) => void
  value?: string
  disabled?: boolean
  errorMessage?: string
  placeholder?: string
}

export const TextInput = (props: ITextInputProps) => {
  const isErrorStatus = props.errorMessage && !props.disabled

  const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) props.onChange(e.target.value)
  }

  let inputClasses = `query-item query-item--input-text`
  if (props.errorMessage) inputClasses += ' query-item--error'

  return (
    <>
      <Input
        status={isErrorStatus ? 'error' : undefined}
        disabled={props.disabled}
        className={inputClasses}
        value={props.value}
        placeholder={props.placeholder}
        onChange={_onChange}></Input>
      {props.errorMessage && <Typography.Text type="danger">{props.errorMessage}</Typography.Text>}
    </>
  )
}
