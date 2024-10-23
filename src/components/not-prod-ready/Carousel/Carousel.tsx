import { Carousel as AntCarousel } from 'antd'
import { type CarouselProps as AntCarouselProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface ICarouselProps extends AntCarouselProps {}

export const Carousel = (props: ICarouselProps) => {
  return (
    <ConfigProvider>
      <AntCarousel {...props} />
    </ConfigProvider>
  )
}
