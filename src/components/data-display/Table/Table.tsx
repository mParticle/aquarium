import { Table as AntTable } from 'antd'
import { type TableProps as AntTableProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface ITableProps extends AntTableProps {}

export const Table = (props: ITableProps) => {
  return (
    <ConfigProvider>
      <AntTable {...props} />
    </ConfigProvider>
  )
}
