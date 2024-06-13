import { Image as AntImage } from 'antd'
import { type ImageProps as AntImageProps } from 'antd'

export interface IImageProps extends AntImageProps {}

export const Image = (props: IImageProps) => {
  return <AntImage {...props} />
}

Image.PreviewGroup = AntImage.PreviewGroup
