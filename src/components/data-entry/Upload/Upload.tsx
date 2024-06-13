import { Upload as AntUpload } from 'antd'
import { type UploadProps as AntUploadProps } from 'antd'


export interface IUploadProps extends AntUploadProps {}

export const Upload = (props: IUploadProps) => {
  return <AntUpload {...props} />
}

Upload.Dragger = AntUpload.Dragger
Upload.LIST_IGNORE = AntUpload.LIST_IGNORE
