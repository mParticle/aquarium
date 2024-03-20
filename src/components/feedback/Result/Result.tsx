import { Result as AntResult } from 'antd'
import { type ResultProps as AntResultProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IResultProps extends AntResultProps {}

export const Result = (props: IResultProps) => {
  return (
    <ConfigProvider>
      <AntResult {...props} />
    </ConfigProvider>
  )
}

Result.PRESENTED_IMAGE_403 = AntResult.PRESENTED_IMAGE_403
Result.PRESENTED_IMAGE_404 = AntResult.PRESENTED_IMAGE_404
Result.PRESENTED_IMAGE_500 = AntResult.PRESENTED_IMAGE_500