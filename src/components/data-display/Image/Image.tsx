import { Image as AntImage } from 'antd'
import { type ImageProps as AntImageProps } from 'antd'
import { ConfigProvider } from 'src/components'

export type IImageProps = AntImageProps

export const Image = (props: IImageProps) => {
  return (
    <ConfigProvider>
      <AntImage {...props} />
    </ConfigProvider>
  )
}

Image.PreviewGroup = AntImage.PreviewGroup
