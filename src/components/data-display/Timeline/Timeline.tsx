import { Timeline as AntTimeline, type TimelineProps as AntTimelineProps } from 'antd'

export interface ITimelineProps extends AntTimelineProps {}

export const Timeline = (props: ITimelineProps) => {
  return <AntTimeline {...props} />
}
