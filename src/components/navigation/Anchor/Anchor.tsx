import { Anchor as AntAnchor } from 'antd'
import { type AnchorProps as AntAnchorProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IAnchorProps extends AntAnchorProps {}

export const Anchor = (props: IAnchorProps) => {
  return (
    <ConfigProvider>
      <AntAnchor {...props} />
    </ConfigProvider>
  )
}
Anchor.Link = AntAnchor.Link