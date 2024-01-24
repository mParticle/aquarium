import { Image as AntImage } from 'antd'
import { type ImageProps as AntImageProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IImageProps extends AntImageProps {}

export const Image = (props: IImageProps) => {
  return (
    <ConfigProvider>
      <AntImage {...props} />
    </ConfigProvider>
  )
}
