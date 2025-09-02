import React from 'react'
import { Modal, Typography, type IModalProps } from 'src/components'

export interface IDeleteConfirmModalProps extends IModalProps {
  open: boolean
  title: string
  children: React.ReactNode
  onOk: () => void
  onCancel: () => void
  okText?: string
  okButtonProps?: IModalProps['okButtonProps']
  width?: number
}

export function DeleteConfirmModal(props: IDeleteConfirmModalProps) {
  const { width, title, okText, okButtonProps, ...rest } = props
  return (
    <Modal
      title={
        <Typography.Text size="lg" strong>
          {props.title}
        </Typography.Text>
      }
      width={props.width ?? 520}
      okText={props.okText ?? 'Delete'}
      okButtonProps={props.okButtonProps ?? { danger: true }}
      {...rest}>
      {props.children}
    </Modal>
  )
}
