import { Tag as AntTag } from 'antd'
import { type TagProps as AntTagProps } from 'antd'
import { type CheckableTagProps as AntCheckableTagProps } from 'antd/lib/tag'
import { ConfigProvider } from 'src/components'

export interface ITagProps extends AntTagProps {}

type CheckableTagProps = AntCheckableTagProps & ITagProps

export const Tag = (props: ITagProps) => {
  return (
    <ConfigProvider>
      <AntTag {...props} />
    </ConfigProvider>
  )
}

Tag.CheckableTag = function CheckableTag(props: CheckableTagProps) {
  return (
    <ConfigProvider>
      <AntTag.CheckableTag {...props} />
    </ConfigProvider>
  )
}
