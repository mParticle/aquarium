import { Prompts as AntPrompts, type PromptsProps as AntPromptsProps } from '@ant-design/x'
import { ConfigProvider } from 'src/components/other/ConfigProvider/ConfigProvider'

export type IPromptsProps = AntPromptsProps

export const Prompts = (props: IPromptsProps) => {
  return (
    <ConfigProvider>
      <AntPrompts {...props} />
    </ConfigProvider>
  )
}
