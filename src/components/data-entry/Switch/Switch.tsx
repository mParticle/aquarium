import { Switch as AntSwitch, type SwitchProps as AntSwitchProps } from 'antd'

export interface ISwitchProps extends AntSwitchProps {}

export const Switch = (props: ISwitchProps) => {
  return (
    <>
      <AntSwitch {...props} />
    </>
  )
}
