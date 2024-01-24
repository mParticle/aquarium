import { Slider as AntSlider } from 'antd'
import { type SliderRangeProps } from 'antd/es/slider'
import { type SliderSingleProps } from 'antd/es/slider'
import { ConfigProvider } from 'src/components'

export type ISliderProps = SliderSingleProps | SliderRangeProps

export const Slider = (props: ISliderProps) => {
  return (
    <ConfigProvider>
      <AntSlider {...props} />
    </ConfigProvider>
  )
}
