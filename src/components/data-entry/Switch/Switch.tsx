import { Switch as AntSwitch } from 'antd'
import { type SwitchProps as AntSwitchProps } from 'antd'

export interface ISwitchProps extends AntSwitchProps {}

export const Switch = (props: ISwitchProps) => {
  return <AntSwitch {...props} />
}
