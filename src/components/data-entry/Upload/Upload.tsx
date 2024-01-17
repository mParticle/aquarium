import { Upload as AntUpload, type UploadProps as AntUploadProps } from "antd";

export interface IUploadProps extends AntUploadProps {}

export const Upload = (props: IUploadProps) => {
  return (
    <>
      <AntUpload {...props} />
    </>
  );
};
