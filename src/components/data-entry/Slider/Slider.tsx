import React from "react";
import { Slider as AntSlider } from "antd";
import { SliderRangeProps as SliderRangeProps } from "antd/es/slider";
import { SliderSingleProps } from "antd/es/slider";

export type ISliderProps = SliderSingleProps | SliderRangeProps

export const Slider = (props: ISliderProps) => {
  return <>
    <AntSlider {...props}/>
  </>;
};