import { Tree as AntTree, type TreeDataNode } from 'antd'
import { type TreeProps as AntTreeProps } from 'antd'

export interface ITreeProps extends AntTreeProps {}

export interface ITreeData extends TreeDataNode {}

export const Tree = (props: ITreeProps) => {
  return <AntTree {...props} />
}

Tree.DirectoryTree = AntTree.DirectoryTree
Tree.TreeNode = AntTree.TreeNode
