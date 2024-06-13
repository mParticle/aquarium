import { Slider as AntSlider } from 'antd'
import { type SliderRangeProps } from 'antd/es/slider'
import { type SliderSingleProps } from 'antd/es/slider'

export type ISliderProps = SliderSingleProps | SliderRangeProps

export const Slider = (props: ISliderProps) => {
  return <AntSlider {...props} />
}
