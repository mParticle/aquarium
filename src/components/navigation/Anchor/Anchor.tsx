import { Anchor as AntAnchor } from 'antd'
import { type AnchorProps as AntAnchorProps } from 'antd'

export interface IAnchorProps extends AntAnchorProps {}

export const Anchor = (props: IAnchorProps) => {
  return <AntAnchor {...props} />
}
Anchor.Link = AntAnchor.Link
