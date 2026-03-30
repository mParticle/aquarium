import { Attachments as AntAttachments, type AttachmentsProps as AntAttachmentsProps } from '@ant-design/x'
import { ConfigProvider } from 'src/components'

export type IAttachmentsProps = AntAttachmentsProps

export const Attachments = (props: IAttachmentsProps) => {
  return (
    <ConfigProvider>
      <AntAttachments {...props} />
    </ConfigProvider>
  )
}
