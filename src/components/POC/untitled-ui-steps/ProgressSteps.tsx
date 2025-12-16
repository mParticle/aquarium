import React from 'react'
import { Steps, type IStepsProps } from 'src/components'
import './progress-steps.css'

export interface IProgressStepsProps extends IStepsProps {}

export const ProgressSteps = (props: IProgressStepsProps) => {
  return <Steps {...props} className="untitled-ui-steps" />
}

export default ProgressSteps
