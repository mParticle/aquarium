import { Result as AntResult } from 'antd'
import { type ResultProps as AntResultProps } from 'antd'

export interface IResultProps extends AntResultProps {}

export const Result = (props: IResultProps) => {
  return <AntResult {...props} />
}

Result.PRESENTED_IMAGE_403 = AntResult.PRESENTED_IMAGE_403
Result.PRESENTED_IMAGE_404 = AntResult.PRESENTED_IMAGE_404
Result.PRESENTED_IMAGE_500 = AntResult.PRESENTED_IMAGE_500
