import './query-item.css'
import { IInputProps, Input } from 'src/components'
import { Typography } from 'src/components/general/Typography/Typography'

export type ITextInputProps = Omit<IInputProps, 'onChange'> & {
  value?: string
  disabled?: boolean
  errorMessage?: string
  placeholder?: string
  onChange?: (value: string) => void
}

const TextInput = ({ value, disabled, errorMessage, placeholder, onChange, ...inputProps }: ITextInputProps) => {
  const isErrorStatus: boolean = !!errorMessage && !disabled

  let inputClasses = `query-item query-item--input-text`
  if (errorMessage) inputClasses += ' query-item--error'

  return (
    <>
      <Input
        status={isErrorStatus ? 'error' : undefined}
        disabled={disabled}
        className={inputClasses}
        value={value}
        placeholder={placeholder}
        onChange={e => {
          onChange?.(e.target.value)
        }}
        {...inputProps}
      />

      {errorMessage && <Typography.Text type="danger">{errorMessage}</Typography.Text>}
    </>
  )
}

export default TextInput
