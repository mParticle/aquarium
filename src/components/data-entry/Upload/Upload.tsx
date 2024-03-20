import { Upload as AntUpload } from 'antd'
import { type UploadProps as AntUploadProps } from 'antd'
import { ConfigProvider } from 'src/components'

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