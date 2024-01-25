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
