import { QRCode as AntQRCode } from 'antd'
import { type QRCodeProps as AntQRCodeProps } from 'antd'


export interface IQRCodeProps extends AntQRCodeProps {}

export const QRCode = (props: IQRCodeProps) => {
  return <AntQRCode {...props} />
}
