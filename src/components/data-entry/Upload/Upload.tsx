import { Upload as AntUpload } from 'antd'
import { type UploadProps as AntUploadProps, type UploadFile as AntUploadFile } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IUploadFileProps extends AntUploadFile {}
export interface IUploadProps extends AntUploadProps {}

export const Upload = (props: IUploadProps) => {
  return (
    <ConfigProvider>
      <AntUpload {...props} />
    </ConfigProvider>
  )
}

Upload.Dragger = AntUpload.Dragger
Upload.LIST_IGNORE = AntUpload.LIST_IGNORE
