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

export const TextInput = (props: ITextInputProps) => {
  const [value, setValue] = useState<string>(props.defaultValue || '')
  const isErrorStatus = props.errorMessage && !props.disabled

  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    props.onChange(e.target.value)
  }

  
  return (
    <>
      <Input
        status={isErrorStatus ? 'error' : undefined}
        disabled={props.disabled}
        className={'query-item query-item--input-text'}
        value={value}
        onChange={_onChange}
      >
      </Input>
      {props.errorMessage && <Typography.Text type="danger">{props.errorMessage}</Typography.Text>}
    </>
  )
}