import { Spin as AntSpin } from 'antd'
import { type SpinProps as AntSpinProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface ISpinProps extends AntSpinProps {}

export const Spin = (props: ISpinProps) => {
  return (
    <ConfigProvider>
      <AntSpin {...props} />
    </ConfigProvider>
  )
}

Spin.setDefaultIndicator = AntSpin.setDefaultIndicator