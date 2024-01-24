import { Timeline as AntTimeline } from "antd";
import { TimelineProps as AntTimelineProps } from "antd";
import { ConfigProvider } from "src/components";

export interface ITimelineProps extends AntTimelineProps {
}

export const Timeline = (props: ITimelineProps) => {
  return <ConfigProvider>
    <AntTimeline {...props}/>
  </ConfigProvider>;
};