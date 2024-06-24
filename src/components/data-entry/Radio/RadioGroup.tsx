import { Radio as AntRadio } from 'antd'
import { type RadioGroupProps as AntRadioGroupProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IRadioGroupProps extends AntRadioGroupProps {}

export const RadioGroup = (props: IRadioGroupProps) => {
  return (
    <ConfigProvider>
      <AntRadio.Group {...props} />
    </ConfigProvider>
  )
}
