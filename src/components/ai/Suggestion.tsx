import { Suggestion as AntSuggestion, type SuggestionProps as AntSuggestionProps } from '@ant-design/x'
import { ConfigProvider } from 'src/components/other/ConfigProvider/ConfigProvider'

export type ISuggestionProps = AntSuggestionProps

export const Suggestion = (props: ISuggestionProps) => {
  return (
    <ConfigProvider>
      <AntSuggestion {...props} />
    </ConfigProvider>
  )
}
