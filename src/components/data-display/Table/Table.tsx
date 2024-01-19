import { Table as AntTable, type TableProps as AntTableProps } from 'antd'

export interface ITableProps extends AntTableProps {}

export const Table = (props: ITableProps) => {
  return <AntTable {...props} />
}
