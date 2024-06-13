import { AutoComplete as AntAutoComplete } from 'antd'
import { type AutoCompleteProps as AntAutoCompleteProps } from 'antd'

export interface IAutoCompleteProps extends AntAutoCompleteProps {}

export const AutoComplete = (props: IAutoCompleteProps) => {
  return <AntAutoComplete {...props} />
}
