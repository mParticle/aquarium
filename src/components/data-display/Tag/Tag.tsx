import { Tag as AntTag } from 'antd'
import { type TagProps as AntTagProps } from 'antd'
import { type CheckableTagProps as AntCheckableTagProps } from 'antd/es/tag'

export interface ITagProps extends AntTagProps {
  children: React.ReactNode
}

type CheckableTagProps = AntCheckableTagProps & ITagProps

export const Tag = (props: ITagProps) => {
  return <AntTag {...props} />
}

const CheckableTag = (props: CheckableTagProps) => {
  return <AntTag.CheckableTag {...props} />
}

Tag.CheckableTag = CheckableTag