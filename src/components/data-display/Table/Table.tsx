import { Table as AntTable } from 'antd'
import { type TableProps as AntTableProps } from 'antd'
import { ConfigProvider } from 'src/components'
import { type ColumnType, type ExpandableConfig } from 'antd/es/table/interface'
import { type ColumnsType, type TableProps } from 'antd/es/table'

export interface ITableProps extends AntTableProps {}

export type { ColumnType, ExpandableConfig, ColumnsType, TableProps }

export const Table = (props: ITableProps) => {
  return (
    <ConfigProvider>
      <AntTable {...props} />
    </ConfigProvider>
  )
}

Table.Column = AntTable.Column
Table.ColumnGroup = AntTable.ColumnGroup
Table.Summary = AntTable.Summary

Table.EXPAND_COLUMN = AntTable.EXPAND_COLUMN
Table.SELECTION_NONE = AntTable.SELECTION_NONE
Table.SELECTION_ALL = AntTable.SELECTION_ALL
Table.SELECTION_INVERT = AntTable.SELECTION_INVERT
Table.SELECTION_COLUMN = AntTable.SELECTION_COLUMN