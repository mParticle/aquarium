import { Steps as AntSteps, type StepsProps as AntStepsProps } from 'antd'

export interface IStepsProps extends AntStepsProps {}

export const Steps = (props: IStepsProps) => {
  return <AntSteps {...props} />
}
