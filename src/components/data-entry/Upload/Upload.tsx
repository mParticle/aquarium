import { Upload as AntUpload } from "antd";
import { UploadProps as AntUploadProps } from "antd";

export interface IUploadProps extends AntUploadProps {
}

export const Upload = (props: IUploadProps) => {
  return <>
    <AntUpload {...props}/>
  </>;
};