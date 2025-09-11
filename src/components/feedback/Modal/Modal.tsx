import { Modal as AntModal, type ModalProps as AntModalProps } from 'antd'
import React from 'react'
import { ConfigProvider } from 'src/components'
import './modal.css'

export interface IModalProps extends AntModalProps {}

export const Modal = (props: IModalProps) => {
  return (
    <ConfigProvider>
      <AntModal {...props} data-testid="aqua-modal" />
    </ConfigProvider>
  )
}

Modal.info = AntModal.info
Modal.success = AntModal.success
Modal.confirm = AntModal.confirm
Modal.warning = AntModal.warning

Modal.config = AntModal.config
Modal.destroyAll = AntModal.destroyAll
Modal.useModal = AntModal.useModal
