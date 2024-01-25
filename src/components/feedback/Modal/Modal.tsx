import { Modal as AntModal } from 'antd'
import { type ModalProps as AntModalProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IModalProps extends AntModalProps {}

export const Modal = (props: IModalProps) => {
  return (
    <ConfigProvider>
      <AntModal {...props} />
    </ConfigProvider>
  )
}
