import { Table as AntTable } from 'antd'
import { type TableProps as AntTableProps } from 'antd'
import { ConfigProvider } from 'src/components'
import { type ExpandableConfig } from 'antd/es/table/interface'
import type { AnyObject } from 'antd/es/_util/type'
import type { ColumnGroupType, ColumnType, ColumnsType, TableProps } from 'antd/es/table'

// example
export type SupportedTableType = 'text' | 'date'

export type IColumnsGroupType<RecordType> = ColumnGroupType<RecordType> & {
  type?: SupportedTableType
}

export type IColumnType<RecordType> = ColumnType<RecordType> & {
  type?: SupportedTableType
}

export type IColumnsType<RecordType> = Array<IColumnType<RecordType> | IColumnsGroupType<RecordType>>

export type ITableColumn<RecordType> = IColumnsType<RecordType>

export interface ITableProps<RecordType> extends Omit<AntTableProps<RecordType>, 'columns'> {
  columns: ITableColumn<RecordType>
}

export type { ColumnType, ExpandableConfig, ColumnsType, TableProps }

export const Table = <RecordType extends AnyObject>(props: ITableProps<RecordType>) => {
  return (
    <ConfigProvider>
      <AntTable
        {...props}
        columns={props.columns.map(column => ({
          ...column,
          render: (...args): React.ReactNode => {
            if (!column.type) {
              console.warn("Should've specified a type, attempting raw render")
              if (!column.render) throw new Error('No type and no render specified')
              return <>{column.render(...args)}</>
            }
            if (column.type === 'date') {
              return <>Date formatted value {args[0]}</>
            }

            return <>String formatted val {args[0]}</>
          },
        }))}
      />
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
