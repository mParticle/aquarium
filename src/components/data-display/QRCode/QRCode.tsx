import { QRCode as AntQRCode } from 'antd'
import { type QRCodeProps as AntQRCodeProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IQRCodeProps extends AntQRCodeProps {}

export const QRCode = (props: IQRCodeProps) => {
  return (
    <ConfigProvider>
      <AntQRCode {...props} />
    </ConfigProvider>
  )
}