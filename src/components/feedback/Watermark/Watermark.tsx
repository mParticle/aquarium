import { Watermark as AntWatermark } from "antd";
import { WatermarkProps as AntWatermarkProps } from "antd";
import { ConfigProvider } from "src/components";

export interface IWatermarkProps extends AntWatermarkProps {
}

export const Watermark = (props: IWatermarkProps) => {
  return <ConfigProvider>
    <AntWatermark {...props}/>
  </ConfigProvider>;
};