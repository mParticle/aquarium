import { Bubble as AntBubble, type BubbleProps as AntBubbleProps } from '@ant-design/x'
import { ConfigProvider } from 'src/components'

export type IBubbleProps = AntBubbleProps

export const Bubble = (props: IBubbleProps) => {
  return (
    <ConfigProvider>
      <AntBubble {...props} />
    </ConfigProvider>
  )
}

Bubble.List = AntBubble.List
