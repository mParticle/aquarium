import { Timeline as AntTimeline } from 'antd'
import { type TimelineProps as AntTimelineProps } from 'antd'


export interface ITimelineProps extends AntTimelineProps {}

export const Timeline = (props: ITimelineProps) => {
  return <AntTimeline {...props} />
}

Timeline.Item = AntTimeline.Item
