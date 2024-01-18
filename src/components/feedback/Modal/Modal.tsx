import { Modal as AntModal, type ModalProps as AntModalProps } from 'antd'

export interface IModalProps extends AntModalProps {}

export const Modal = (props: IModalProps) => {
  return (
    <>
      <AntModal {...props} />
    </>
  )
}
