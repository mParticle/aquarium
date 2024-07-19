import './query-item.css'
import { Input } from 'src/components'
import { Typography } from 'src/components/general/Typography/Typography'

interface ITextInputProps {
  value?: string
  disabled?: boolean
  errorMessage?: string
  placeholder?: string
  onChange?: (value: string) => void
  className?: string
}

const TextInput = (props: ITextInputProps) => {
  const isErrorStatus: boolean = !!props.errorMessage && !props.disabled

  let inputClasses = `query-item query-item--input-text`
  if (props.errorMessage) inputClasses += ' query-item--error'
  if (props.className) inputClasses += ` ${props.className}`

  return (
    <>
      <Input
        status={isErrorStatus ? 'error' : undefined}
        disabled={props.disabled}
        className={inputClasses}
        value={props.value}
        placeholder={props.placeholder}
        onChange={e => {
          props.onChange?.(e.target.value)
        }}
      />

      {props.errorMessage && <Typography.Text type="danger">{props.errorMessage}</Typography.Text>}
    </>
  )
}

export default TextInput
