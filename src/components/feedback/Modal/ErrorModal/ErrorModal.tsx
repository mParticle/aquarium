import React from 'react'
import { CloseCircleFilled } from '@ant-design/icons'
import { Button, Flex, Modal, Typography, type IModalProps } from 'src/components'
import { ColorError, MpIconSizeMd } from 'src/styles/style'

export interface IErrorModalProps
  extends Omit<
    IModalProps,
    'footer' | 'okText' | 'okButtonProps' | 'cancelText' | 'cancelButtonProps' | 'onOk' | 'onCancel' | 'content'
  > {
  open: boolean
  title?: string
  children: React.ReactNode
  onClose: () => void
}

export function ErrorModal(props: IErrorModalProps): React.JSX.Element {
  const { width, title, onClose, ...rest } = props

  return (
    <Modal
      title={
        <Flex align="center" gap="small">
          <CloseCircleFilled style={{ color: ColorError, fontSize: MpIconSizeMd }} />
          <Typography.Text size="lg" strong>
            {props.title ?? 'Error'}
          </Typography.Text>
        </Flex>
      }
      footer={
        <Button type="default" onClick={onClose}>
          Close
        </Button>
      }
      onCancel={onClose}
      {...rest}>
      {props.children}
    </Modal>
  )
}
