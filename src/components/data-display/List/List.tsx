import { List as AntList } from 'antd'
import { type ListProps as AntListProps } from 'antd'

export interface IListProps<T> extends AntListProps<T> {}

export function List<T>(props: IListProps<T>) {
  return <AntList {...props} />
}

List.Item = AntList.Item
