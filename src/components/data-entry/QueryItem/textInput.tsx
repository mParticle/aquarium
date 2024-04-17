import { useState } from 'react'
import './query-item.css'
import { Input } from 'src/components'
import { Typography } from 'src/components/general/Typography/Typography'

interface ITextInputProps {
  defaultValue?: string;
  onChange: (value: string | number) => void;
  disabled?: boolean;
  errorMessage?: string;
}

export const TextInput = ({ defaultValue, onChange, disabled = false, errorMessage }: ITextInputProps) => {

  const props = {
    defaultValue,
    onChange,
    disabled,
    errorMessage
  }

  const [value, setValue] = useState<string>(defaultValue || '')

  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onChange(e.target.value)
  }

  return (
    <>
      <Input
        status={errorMessage ? 'error' : undefined}
        disabled={disabled}
        className={'query-item query-item-input-text'}
        value={value}
        onChange={_onChange}
        >
      </Input>
      {errorMessage && <Typography.Text type="danger">{errorMessage}</Typography.Text>}
    </>
  )
}