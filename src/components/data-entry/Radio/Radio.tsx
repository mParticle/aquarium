import { Radio as AntRadio } from 'antd'
import { type RadioProps as AntRadioProps } from 'antd'
import { ConfigProvider } from 'src/components'
import { RadioGroup } from './RadioGroup'
import { RadioButton } from './RadioButton'
import './radio.css'

export interface IRadioProps extends AntRadioProps {}

export const Radio = (props: IRadioProps) => {
  return (
    <ConfigProvider>
      <AntRadio {...props} />
    </ConfigProvider>
  )
}

// TODO Is there a way to type the props from Radio.Group better so that value types are inferred?
// This happens with ant as well. <Radio.Group value={string} /> doesn't get properly propagated to the change event
Radio.Group = RadioGroup
Radio.Button = RadioButton
