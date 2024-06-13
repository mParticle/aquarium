import { Modal as AntModal } from 'antd'
import { type ModalProps as AntModalProps } from 'antd'

export interface IModalProps extends AntModalProps {}

export const Modal = (props: IModalProps) => {
  return <AntModal {...props} />
}

Modal.info = AntModal.info
Modal.success = AntModal.success
Modal.confirm = AntModal.confirm
Modal.warning = AntModal.warning
Modal.error = AntModal.error

Modal.config = AntModal.config
Modal.destroyAll = AntModal.destroyAll
Modal.useModal = AntModal.useModal
