import { Carousel as AntCarousel, type CarouselProps as AntCarouselProps } from 'antd'

export interface ICarouselProps extends AntCarouselProps {}

export const Carousel = (props: ICarouselProps) => {
  return <AntCarousel {...props} />
}
