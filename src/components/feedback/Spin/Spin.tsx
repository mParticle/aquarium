import { Spin as AntSpin } from 'antd'
import { type SpinProps as AntSpinProps } from 'antd'

export interface ISpinProps extends AntSpinProps {}

export const Spin = (props: ISpinProps) => {
  return <AntSpin {...props} />
}

Spin.setDefaultIndicator = AntSpin.setDefaultIndicator
