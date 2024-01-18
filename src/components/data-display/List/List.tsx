import { List as AntList, type ListProps as AntListProps } from 'antd'

export interface IListProps<T> extends AntListProps<T> {}

export const List = <T,>(props: IListProps<T>) => (
  <>
    <AntList {...props} />
  </>
)

List.Item = AntList.Item
