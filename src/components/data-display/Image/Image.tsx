import React from "react";
import { Image as AntImage } from "antd";
import { ImageProps as AntImageProps } from "antd";

export interface IImageProps extends AntImageProps {}

export const Image = (props: IImageProps) => {
  return (
    <>
      <AntImage {...props} />
    </>
  );
};
