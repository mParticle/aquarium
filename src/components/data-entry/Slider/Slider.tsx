import { Slider as AntSlider } from "antd";
import { SliderRangeProps as SliderRangeProps } from "antd/es/slider";
import { SliderSingleProps } from "antd/es/slider";
import { ConfigProvider } from "src/components";

export type ISliderProps = SliderSingleProps | SliderRangeProps

export const Slider = (props: ISliderProps) => {
  return <ConfigProvider>
    <AntSlider {...props}/>
  </ConfigProvider>;
};