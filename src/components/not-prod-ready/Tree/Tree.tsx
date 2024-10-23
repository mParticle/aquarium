import { Tree as AntTree, type TreeDataNode } from 'antd'
import { type TreeProps as AntTreeProps } from 'antd'
import type { BasicDataNode, DataNode } from 'antd/es/tree'
import { ConfigProvider } from 'src/components'

export interface ITreeProps<T extends BasicDataNode = DataNode> extends AntTreeProps<T> {}

export interface ITreeData extends TreeDataNode {}

export const Tree = <T extends BasicDataNode = DataNode>(props: ITreeProps<T>) => {
  return (
    <ConfigProvider>
      <AntTree {...props} />
    </ConfigProvider>
  )
}

Tree.DirectoryTree = AntTree.DirectoryTree
Tree.TreeNode = AntTree.TreeNode
