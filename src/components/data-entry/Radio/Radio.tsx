import { Radio as AntRadio } from 'antd'
import { type RadioProps as AntRadioProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IRadioProps extends AntRadioProps {}

export const Radio = (props: IRadioProps) => {
  return (
    <ConfigProvider>
      <AntRadio {...props} />
    </ConfigProvider>
  )
}

Radio.Group = AntRadio.Group
Radio.Button = AntRadio.Button