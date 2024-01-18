import { Tag as AntTag, type TagProps as AntTagProps } from 'antd'

export interface ITagProps extends AntTagProps {}

export const Tag = (props: ITagProps) => {
  return (
    <>
      <AntTag {...props} />
    </>
  )
}
