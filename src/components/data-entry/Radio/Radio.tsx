import { Radio as AntRadio } from 'antd'
import { type RadioProps as AntRadioProps } from 'antd'
import { RadioGroup } from './RadioGroup'
import { RadioButton } from './RadioButton'

export interface IRadioProps extends AntRadioProps {}

export const Radio = (props: IRadioProps) => {
  return <AntRadio {...props} />
}

// TODO Is there a way to type the props from Radio.Group better so that value types are inferred?
// This happens with ant as well. <Radio.Group value={string} /> doesn't get properly propagated to the change event
Radio.Group = RadioGroup
Radio.Button = RadioButton
