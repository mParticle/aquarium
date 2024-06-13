import { Progress as AntProgress } from 'antd'
import { type ProgressProps as AntProgressProps } from 'antd'

export interface IProgressProps extends AntProgressProps {}

export const Progress = (props: IProgressProps) => {
  return <AntProgress {...props} />
}
