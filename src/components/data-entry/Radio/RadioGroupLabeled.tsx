import { type RadioGroupProps as AntRadioGroupProps } from 'antd'
import { Form, Radio } from 'src/components'
import type { RadioChangeEvent } from 'antd/es/radio/interface'
import { RadioGroup } from 'src/components/data-entry/Radio/RadioGroup'

export interface IRadioGroupProps extends AntRadioGroupProps {}

interface IRadioGroupItem {
  label: string
  value: string
}

export interface IRadioGroupWithLabelProps extends IRadioGroupProps {
  label: string
  handleChange: (e: RadioChangeEvent) => void
  selectedItem: IRadioGroupItem
  items: IRadioGroupItem[]
}

export function RadioGroupLabeled(props: IRadioGroupWithLabelProps) {
  return (
    <Form.Item label={props.label} colon>
      <RadioGroup onChange={props.handleChange} value={props.selectedItem?.value} {...props}>
        {props.items.map(value => (
          <Radio key={value.value} value={value.value}>
            {value.label}
          </Radio>
        ))}
      </RadioGroup>
    </Form.Item>
  )
}
