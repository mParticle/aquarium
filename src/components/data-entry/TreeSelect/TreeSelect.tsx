import { TreeSelect as AntTreeSelect } from 'antd'
import { type TreeSelectProps as AntTreeSelectProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface ITreeSelectProps extends AntTreeSelectProps {}

export const TreeSelect = (props: ITreeSelectProps) => {
  return (
    <ConfigProvider>
      <AntTreeSelect {...props} />
    </ConfigProvider>
  )
}
