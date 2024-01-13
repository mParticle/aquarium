import { Watermark as AntWatermark } from "antd";
import { WatermarkProps as AntWatermarkProps } from "antd";

export interface IWatermarkProps extends AntWatermarkProps {
}

export const Watermark = (props: IWatermarkProps) => {
  return <>
    <AntWatermark {...props}/>
  </>;
};