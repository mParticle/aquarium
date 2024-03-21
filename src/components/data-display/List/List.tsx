import { List as AntList } from 'antd'
import { type ListProps as AntListProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IListProps<T> extends AntListProps<T> {}

export function List<T>(props: IListProps<T>) {
  return (
    <ConfigProvider>
      <AntList {...props} />
    </ConfigProvider>
  )
}

List.Item = AntList.Item
