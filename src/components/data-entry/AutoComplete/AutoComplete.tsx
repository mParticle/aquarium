import { AutoComplete as AntAutoComplete } from 'antd'
import { type AutoCompleteProps as AntAutoCompleteProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IAutoCompleteProps extends AntAutoCompleteProps {}

export const AutoComplete = (props: IAutoCompleteProps) => {
  return (
    <ConfigProvider>
      <AntAutoComplete {...props} />
    </ConfigProvider>
  )
}
