import { Tree as AntTree, TreeDataNode } from 'antd'
import { type TreeProps as AntTreeProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface ITreeProps extends AntTreeProps {}

export interface ITreeData extends TreeDataNode {}

export const Tree = (props: ITreeProps) => {
  return (
    <ConfigProvider>
      <AntTree {...props} />
    </ConfigProvider>
  )
}
