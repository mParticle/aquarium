import { Segmented as AntSegmented } from "antd";
import { SegmentedProps as AntSegmentedProps } from "antd";
import { ConfigProvider } from "src/components";

export interface ISegmentedProps extends AntSegmentedProps {
  ref?: React.RefObject<HTMLDivElement>;
}

export const Segmented = (props: ISegmentedProps) => {
  return <ConfigProvider>
    <AntSegmented {...props}/>
  </ConfigProvider>;
};