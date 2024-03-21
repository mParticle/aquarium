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

TreeSelect.TreeNode = AntTreeSelect.TreeNode
TreeSelect.SHOW_ALL = AntTreeSelect.SHOW_ALL
TreeSelect.SHOW_CHILD = AntTreeSelect.SHOW_CHILD
TreeSelect.SHOW_PARENT = AntTreeSelect.SHOW_PARENT
