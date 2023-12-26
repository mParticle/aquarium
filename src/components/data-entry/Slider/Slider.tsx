import React from "react";
import { Slider as AntSlider } from "antd";
import { SliderProps as AntSliderProps } from "antd";

export interface ISliderProps extends AntSliderProps {
}

export const Slider = (props: ISliderProps) => {
  return <>
    <AntSlider {...props}/>
  </>;
};