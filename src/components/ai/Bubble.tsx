import { Bubble as AntBubble, type BubbleProps as AntBubbleProps } from '@ant-design/x'
import { type ComponentProps } from 'react'
import { ConfigProvider } from 'src/components/other/ConfigProvider/ConfigProvider'

export type IBubbleProps = AntBubbleProps

export const Bubble = (props: IBubbleProps) => {
  return (
    <ConfigProvider>
      <AntBubble {...props} />
    </ConfigProvider>
  )
}

const BubbleList = (props: ComponentProps<typeof AntBubble.List>) => {
  return (
    <ConfigProvider>
      <AntBubble.List {...props} />
    </ConfigProvider>
  )
}

Bubble.List = BubbleList
