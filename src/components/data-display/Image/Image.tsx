import { Image as AntImage, type ImageProps as AntImageProps } from "antd";

export interface IImageProps extends AntImageProps {}

export const Image = (props: IImageProps) => {
  return (
    <>
      <AntImage {...props} />
    </>
  );
};
