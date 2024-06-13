import { Segmented as AntSegmented } from 'antd'
import { type SegmentedProps as AntSegmentedProps } from 'antd'

export interface ISegmentedProps extends AntSegmentedProps {
  ref?: React.RefObject<HTMLDivElement>
}

export const Segmented = (props: ISegmentedProps) => {
  return <AntSegmented {...props} />
}
