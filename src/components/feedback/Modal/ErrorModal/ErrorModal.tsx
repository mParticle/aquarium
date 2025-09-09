import React from 'react'
import { CloseCircleFilled } from '@ant-design/icons'
import { Button, Flex, Modal, Typography, type IModalProps } from 'src/components'

export interface IErrorModalProps
  extends Omit<IModalProps, 'footer' | 'okText' | 'okButtonProps' | 'cancelText' | 'cancelButtonProps'> {
  open: boolean
  title?: string
  children: React.ReactNode
  onOk: () => void
}

export function ErrorModal(props: IErrorModalProps): React.JSX.Element {
  const { width, title, onOk, ...rest } = props

  return (
    <Modal
      title={
        <Flex align="center" gap="small">
          <CloseCircleFilled style={{ color: '#ff4d4f', fontSize: '20px' }} />
          <Typography.Text size="lg" strong>
            {props.title ?? 'Error'}
          </Typography.Text>
        </Flex>
      }
      footer={
        <>
          <Button type="primary" onClick={onOk}>
            OK
          </Button>
        </>
      }
      {...rest}>
      {props.children}
    </Modal>
  )
}
